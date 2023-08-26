import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage() {
  const [ sales, setSales ] = useState<any[]>();

  const { data, error } = useSWR(
    'https://nextjs-course-353dc-default-rtdb.firebaseio.com/sales.json', 
    url => fetch(url).then(d => d.json())
  );

  useEffect(() => {
    if (data) {
      setSales(Object.values(data).map((sale: any) => ({
        client: sale.username,
        quantity: sale.quantity
      })))
    }
  }, [ data ]);

  if (error) {
    return <p>Error loading data.</p>
  }

  if (!data || !sales) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Sales</h1>
      <ul>
        {sales.map(sale => <li key={sale.client}>{sale.client}: {sale.quantity}</li>)}
      </ul>
    </>
  )
}