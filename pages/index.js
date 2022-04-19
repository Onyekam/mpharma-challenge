import Head from 'next/head'
import Image from 'next/image'


export default function Home({products}) {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Welcome to MPharma</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://www.mocky.io/v2/5c3e15e63500006e003e9795`)
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}
