import { useRouter } from "next/router"


export default function Address() {
  const router = useRouter();

  return (
    <div>
      <h1>Address info of client {router.query.id}</h1>
    </div>
  )
}