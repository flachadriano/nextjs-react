import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router"
import { Fragment } from "react";

export default function OtherEvent() {
  const router = useRouter();
  const filterData = router.query.slug;
  
  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filters</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for the chosen filter.</p>
  }

  return (
    <Fragment>
      <EventList items={filteredEvents} />
    </Fragment>
  )
}
