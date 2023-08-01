import { useRouter } from "next/router";

export default function ClientDetail() {
  const router = useRouter();

  return (
    <div>
      <h1>Client Detail of {router.query.id}</h1>
    </div>
  )
}