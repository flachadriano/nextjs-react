import path from 'path';
import fs from 'fs/promises';

export async function getStaticProps({ params }: any) {
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const product = data.products.find((product: {id: string}) => product.id = productId);
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
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } }
    ],
    fallback: false
  }
}

interface ProductDetailPageProps {
  loadedProduct: {
    title: string
    description: string
  }
}

export default function ProductDetailPage({ loadedProduct } : ProductDetailPageProps) {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  )
}