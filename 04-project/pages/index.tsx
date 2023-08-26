import EventList from '@/components/events/event-list';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import useSWR from "swr";

export default function Home() {
  const [featuredEvents, setFeaturedEvents] = useState<any[]>();

  const { data, error } = useSWR(
    'https://nextjs-course-353dc-default-rtdb.firebaseio.com/events.json', 
    url => fetch(url).then(d => d.json())
  );

  useEffect(() => {
    if (data) {
      setFeaturedEvents(Object.values(data).filter((e: any) => e.isFeatured));
    }
  }, [data]);

  if (error) {
    return <p>Error lading data.</p>
  }

  if (!data || !featuredEvents) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Nearby events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </>
  )
}
