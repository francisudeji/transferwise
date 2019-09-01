import Head from 'next/head'

function Index() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/static/styles.css' />
        <title>TransferWise</title>
      </Head>
      <h1 className='text-blue-500 text-center text-4xl'>Hello World!</h1>
    </>
  )
}

export default Index
