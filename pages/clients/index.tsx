import { useRouter } from 'next/router'

export default function Clients() {
  const router = useRouter()
  const clients = [
    {id: 'flach', name: 'Adriano Flach'}
  ]

  function clientPageHandler(client: any) {
    router.push({
      pathname: '/clients/[id]',
      query: { id: client.id }
    })
  }

  return (
    <div>
      <h1>Clients</h1>
      {clients.map(client => (
        <button key={client.id} onClick={() => clientPageHandler(client)}>{client.name}</button>
      ))}
      <button></button>
    </div>
  )
}