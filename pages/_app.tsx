import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  function clientFolderHandler() {
    console.log('send to another page through source code');
    router.push('/clients')
  }

  return (
    <div>
      <h1>My Application</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><button onClick={clientFolderHandler}>Clients</button></li>
      </ul>
      <hr></hr>
      <Component {...pageProps} />
    </div>
  )
}
