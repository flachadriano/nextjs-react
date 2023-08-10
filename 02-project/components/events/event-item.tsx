import Button from "./ui/button/button"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import styles from "./event-item.module.css"

export interface EventItemProps {
  id: string
  title: string
  description: string
  location: string
  date: string
  image: string
  isFeatured: boolean
}

export default function EventItem({ id, title, description, location, date, image, isFeatured }: EventItemProps) {

  const formattedDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('pt-BR')

  const formattedAddress = (address: string) => address.replace(', ', '\n')

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{formattedDate(date)}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress(location)}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <>
              <span>Explore Event</span>
              <span className={styles.icons}>
                <ArrowRightIcon />
              </span>
            </>
          </Button>
        </div>
      </div>
    </li>
  )
}