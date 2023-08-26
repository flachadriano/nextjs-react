import { Fragment, useEffect, useState } from "react";
import EventList from "../../components/events/event-list"
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState<any[]>();

  const { data, error } = useSWR(
    'https://nextjs-course-353dc-default-rtdb.firebaseio.com/events.json', 
    url => fetch(url).then(d => d.json())
  );

  useEffect(() => {
    if (data) {
      setEvents(Object.values(data));
    }
  }, [data]);

  if (error) {
    return <p>Error loading data.</p>
  }

  if (!data || !events) {
    return <p>Loading...</p>
  }

  function findEventsHandler(year: string|undefined, month: string|undefined) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
