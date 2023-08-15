import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.products
    },
    revalidate: 30 // regenerate the static page content after x seconds
    // notFound: true/false - when you want to move the user to not found page
    // redirect: string path - when you want to redirect to a specific page
  };
}

interface HomeProps {
  products: {
    id: string
    title: string
  }[]
}

export default function Home({ products } : HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Project</h1>
        <ul>
          {products.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}
