import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>My Application</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
      </ul>
      <hr></hr>
      <Component {...pageProps} />
    </div>
  )
}
