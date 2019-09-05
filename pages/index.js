import Head from 'next/head'
import Main from '../components/main'
import '../css/styles.css'
import Header from '../components/header'
import BorderlessAccount from '../components/borderless-account'
import SendingMoney from '../components/sending-money'

function Index() {
  return (
    <>
      <Head>
        <title>
          Transfer Money Online | Send Money Online With TransferWise
        </title>
      </Head>
      <Header />
      <Main />
      <BorderlessAccount className='md:hidden' />
      <SendingMoney />
    </>
  )
}

export default Index
