import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/dummy-data'
import Head from 'next/head'

export default function Home() {
  const featuredEvents = getFeaturedEvents();

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
