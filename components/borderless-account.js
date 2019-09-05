function BorderlessAccount({ className }) {
  return (
    <section className={className}>
      <div className='container mx-auto px-4 pb-16'>
        <div className=' lg:flex lg:items-center'>
          <div className='w-88 max-w-xs mx-auto relative mt-12 lg:w-1/2 lg:order-2'>
            <img
              className='w-2/3 ml-auto mr-4 lg:mr-0'
              src='/static/phone.jpg'
              alt=''
            />
            <img
              className='w-48 ml-4 -mt-20 lg:w-2/3 lg:-mt-40 lg:ml-4'
              src='/static/mastercard.png'
              alt=''
            />
          </div>

          <div className='lg:w-1/2 lg:order-1'>
            <h2 className='text-3xl font-bold text-dark-blue text-center mt-6 md:text-5xl lg:text-left leading-tight'>
              The TransferWise borderless account
              <span className='text-dark-green'>.</span>
            </h2>
            <p className='text-base text-dark-blue text-center pt-4 md:text-lg lg:text-left'>
              Receive money with international bank details, and track your
              transactions with notifications on your phone. Spend with your
              free debit Mastercard, and if necessary - instantly freeze it
              in-app.
            </p>

            <a
              href='#'
              className='bg-transparent border border-light-blue px-6 py-3 mt-6 rounded text-light-blue font-semibold text-lg hover:bg-light-blue hover:text-white hidden lg:inline-block'
            >
              Learn more
            </a>

            <div className='mt-6 sm:flex sm:justify-center lg:justify-start'>
              <div className='sm:mr-2'>
                <img
                  className='h-16 mt-4 mx-auto'
                  src='/static/appstore.svg'
                  alt='App store'
                />
                <div className='hidden mt-4 lg:block'>
                  <svg width='96' height='16'>
                    <defs>
                      <clipPath id='a'>
                        <rect width='96%' height='16' />
                      </clipPath>
                    </defs>
                    <g clip-path='url(#a)' fill='#ffb600' fillRule='evenodd'>
                      <path d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM28.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L28.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM48.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L48.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM68.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L68.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM88.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L88.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z' />
                    </g>
                  </svg>
                  <p className='text-gray-600 text-lg'>4.8, 34.3K Ratings</p>
                </div>
              </div>
              <div className='sm:ml-2'>
                <img
                  className='h-16 mt-4 mx-auto'
                  src='/static/playstore.svg'
                  alt='Play store'
                />
                <div className='hidden mt-4 lg:block'>
                  <svg width='96' height='16'>
                    <defs>
                      <clipPath id='a'>
                        <rect width='90%' height='16' />
                      </clipPath>
                    </defs>
                    <g clip-path='url(#a)' fill='#ffb600' fillRule='evenodd'>
                      <path d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM28.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L28.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM48.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L48.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM68.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L68.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6zM88.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L88.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z' />
                    </g>
                  </svg>
                  <p className='text-gray-600 text-lg'>4.5, 58.8K Ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BorderlessAccount
