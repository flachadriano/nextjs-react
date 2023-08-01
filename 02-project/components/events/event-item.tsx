import Link from "next/link";

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
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{formattedDate(date)}</time>
        </div>
        <div>
          <address>{formattedAddress(location)}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </li>
  )
}