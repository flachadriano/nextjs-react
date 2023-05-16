import { useRouter } from "next/router";

export default function PortfolioDetail() {
  const router = useRouter();

  return (
    <div>
      <h1>Portfolio Detail of {router.query.id}</h1>
    </div>
  )
}