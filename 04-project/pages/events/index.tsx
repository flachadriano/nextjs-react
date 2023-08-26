import { Fragment, useEffect, useState } from "react";
import EventList from "../../components/events/event-list"
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getAllEvents } from "@/helpers/api-util";

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events
    }
  }
}

interface EventsProps {
  events: any[]
}

export default function Events({ events }: EventsProps) {
  const router = useRouter();

  if (!events) {
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
