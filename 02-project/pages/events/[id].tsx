import { useRouter } from "next/router"
import { Fragment } from "react";

import { getEventById } from "@/dummy-data";
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics";

export default function DefaultEvent() {
  const router = useRouter();

  const eventId = router.query.id;
  if (eventId) {
    const event = getEventById(eventId.toString());
    if (event) {
      return (
        <Fragment>
          <EventSummary title={event.title} />
          <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </Fragment>
      )
    }
  }
  
  return <p>No event found!</p>
}
