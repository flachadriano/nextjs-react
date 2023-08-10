import Link from "next/link"
import styles from './button.module.css'

interface ButtonProps {
  link?: string
  onClick?: () => void
  children: JSX.Element|string
}

export default function Button({ link, onClick, children } : ButtonProps) {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>{children}</Link>
    )
  }

  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )
}
