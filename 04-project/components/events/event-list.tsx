import EventItem, { EventItemProps } from "./event-item"
import styles from './event-list.module.css'

interface EventListProps {
  items: EventItemProps[]
}

export default function EventList({ items }: EventListProps) {
  return (
    <ul className={styles.list}>
      {items.map(event => <EventItem key={event.id} {...event} />)}
    </ul>
  )
}