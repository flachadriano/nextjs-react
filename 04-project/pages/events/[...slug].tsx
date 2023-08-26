import EventList from "@/components/events/event-list";
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

export default function OtherEvent() {
  const router = useRouter();
  const filterData = router.query.slug || [];
  const [filteredEvents, setFilteredEvents] = useState<any[]>();
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  
  const { data, error } = useSWR(
    'https://nextjs-course-353dc-default-rtdb.firebaseio.com/events.json', 
    url => fetch(url).then(d => d.json())
  );

  useEffect(() => {
    if (data) {
      const events = Object.values(data);
      let filteredEvents = events.filter((event: any) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
      });
      setFilteredEvents(filteredEvents);
    
    }
  }, [data, numYear, numMonth]);

  if (!filterData || !filterData.length) {
    return <p className="center">Loading...</p>
  }

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filters</p>
  }

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for the chosen filter.</p>
  }

  return (
    <Fragment>
      <EventList items={filteredEvents} />
    </Fragment>
  )
}
