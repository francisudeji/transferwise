import { FaChevronDown } from 'react-icons/fa'

function HowToSendMoney() {
  return (
    <section className='bg-gray-200'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-dark-blue font-bold text-2xl text-center md:text-5xl'>
          How to send money from GBP to NGN
          <span className='text-light-blue'>.</span>
        </h1>
        <div className='flex flex-col mt-6 sm:flex-row sm:justify-between sm:flex-wrap'>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/register-for-free.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:block sm:mx-auto sm:text-center md:text-lg'>
              1. Register for free.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/choose-an-amount-to-send.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:block sm:mx-auto sm:text-center md:text-lg'>
              2. Choose an amount to send.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/add-recipient-bank-details.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:block sm:mx-auto sm:text-center md:text-lg'>
              3. Add recipient’s bank details.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/verify-your-identity.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:mx-auto md:text-lg'>
              4. Verify your identity.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block sm:mx-auto sm:text-center text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/pay-for-your-transfer.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:block sm:mx-auto sm:text-center md:text-lg'>
              5. Pay for your transfer.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
          <div className='card bg-white w-full flex justify-between items-center rounded px-4 py-8 mb-4 sm:w-48% sm:flex-col sm:py-10 md:w-31% md:mb-6 md:py-6'>
            <img
              src='/static/thats-it.svg'
              alt=''
              className='hidden sm:block sm:mx-auto'
            />
            <h2 className='text-dark-blue text-sm font-bold sm:text-base sm:block sm:mx-auto sm:text-center md:text-lg'>
              6. That’s it.
            </h2>
            <FaChevronDown className='text-sm text-light-blue sm:hidden' />
            <p className='mt-3 text-dark-blue text-center mx-auto hidden sm:block text-base md:text-text-lg'>
              Sign up online or in our app for free. All you need is an email
              address, or a Google or Facebook account.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToSendMoney
