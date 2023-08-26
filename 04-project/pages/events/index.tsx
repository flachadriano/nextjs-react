import { Fragment } from "react";
import { getAllEvents } from "@/dummy-data"
import EventList from "../../components/events/event-list"
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();
  const events = getAllEvents();

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
