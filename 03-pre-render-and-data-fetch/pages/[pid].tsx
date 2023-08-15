import path from 'path';
import fs from 'fs/promises';

export async function getStaticProps({ params }: any) {
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const product = data.products.find((product: {id: string}) => product.id == productId);
  return {
    props: {
      loadedProduct: product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p3' } }
    ],
    fallback: true // it will generate a static page, when it is not in the paths options, e.g.: page of product 2
    // fallback: 'blocking' // it will make the user wait, with loading of the browser, until the page is generated
  }
}

interface ProductDetailPageProps {
  loadedProduct: {
    title: string
    description: string
  }
}

export default function ProductDetailPage({ loadedProduct } : ProductDetailPageProps) {
  if (!loadedProduct) {
    return <p>Loading...</p>
  }
 
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  )
}