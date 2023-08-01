import EventItem, { EventItemProps } from "./event-item"

interface EventListProps {
  items: EventItemProps[]
}

export default function EventList({ items }: EventListProps) {
  return (
    <ul>
      {items.map(event => <EventItem key={event.id} {...event} />)}
    </ul>
  )
}