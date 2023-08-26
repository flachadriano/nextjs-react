import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics";

export default function DefaultEvent() {
  const router = useRouter();
  const eventId = router.query.id;
  const [event, setEvent] = useState<any>();

  const { data, error } = useSWR(
    'https://nextjs-course-353dc-default-rtdb.firebaseio.com/events.json', 
    url => fetch(url).then(d => d.json())
  );

  useEffect(() => {
    if (data && eventId && !Array.isArray(eventId)) {
      setEvent(data[eventId]);
    }
  }, [data, eventId]);

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
  
  return <p>No event found!</p>
}
