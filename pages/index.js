import Head from 'next/head'
import Main from '../components/main'
import '../css/styles.css'
import Header from '../components/header'
import BorderlessAccount from '../components/borderless-account'
import SendingMoney from '../components/sending-money'
import HowToSendMoney from '../components/how-to-send-money'
import GlobalSupport from '../components/global-support'
import TrustedAllOverTheWorld from '../components/trusted-all-over-the-world'
import LongStoryPeople from '../components/long-story-people'
import MoneyWithoutBorders from '../components/money-without-borders'
import Footer from '../components/footer'
import '../css/index.css'

function Index() {
  return (
    <>
      <Head>
        <title>
          Transfer Money Online | Send Money Online With TransferWise
          <style></style>
        </title>
      </Head>
      <Header />
      <Main />
      <BorderlessAccount className='md:hidden' />
      <SendingMoney />
      <HowToSendMoney />
      <GlobalSupport />
      <TrustedAllOverTheWorld />
      <LongStoryPeople />
      <BorderlessAccount className='hidden md:block' />
      <MoneyWithoutBorders />
      <Footer />
    </>
  )
}

export default Index
