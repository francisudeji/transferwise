import {
  FaChevronDown,
  FaLine,
  FaLock,
  FaChevronRight,
  FaPlay
} from 'react-icons/fa'

function Main() {
  return (
    <main className='bg-lightest-blue pb-20 md:pb-32'>
      <div className='container mx-auto px-4'>
        <div className='h-pane pt-8 sm:pt-24 lg:flex justify-between'>
          <div className='left-pane lg:flex-1 lg:pr-10'>
            <h1 className='text-center text-white font-bold text-3xl px-8 md:text-5xl md:leading-tight lg:text-left lg:pt-4 lg:px-0'>
              The cheap, fast way to send money abroad
              <span className='text-light-blue'>.</span>
            </h1>

            <div className='hidden md:block'>
              <p className='text-white text-lg text-center px-12 mt-8 lg:text-left lg:px-0'>
                Join over 5 million people who get the real exchange rate
                <br className='hidden lg:block' /> with TransferWise. We’re{' '}
                <a href='#' className='text-light-blue'>
                  on average 8x cheaper
                </a>{' '}
                than <br className='hidden lg:block' /> leading UK high street
                banks.
              </p>
            </div>

            <div className='hidden md:block mt-10'>
              <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mx-auto hover:bg-light-blue hover:text-white lg:mr-auto lg:ml-0'>
                <span className='h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                  <FaPlay className='text-dark-blue text-xs' />
                </span>
                <span className='text-light-blue text-lg font-semibold ml-3'>
                  See how we send money
                </span>
              </button>
            </div>
          </div>

          <div className='right-pane lg:w-1/3'>
            <form className='mt-4 md:mt-8 lg:mt-0'>
              <div className='flex rounded overflow-hidden mt-4'>
                <div className='flex flex-col flex-1'>
                  <span className='block bg-white text-base text-dark-blue pt-2 pl-3'>
                    You send
                  </span>
                  <div className='relative'>
                    <input
                      type='text'
                      className='bg-white w-full text-dark-blue font-semibold outline-none text-2xl px-3 pt-1 pb-2'
                      value='1,000'
                    />
                  </div>
                </div>
                <button className='text-white w-32 text-xl bg-dark-blue font-semibold px-3 flex justify-center items-center'>
                  <span>GBP</span>
                  <FaChevronDown className='text-light-blue ml-3' />
                </button>
              </div>

              <div className='flex rounded overflow-hidden mt-4'>
                <ul className='block w-full px-3'>
                  <li className='flex items-center'>
                    <span className='h-6 w-6 inline-block rounded-full bg-dark-blue flex items-center text-center'>
                      <span className='inline-block text-base text-white font-semibold text-center'>
                        -
                      </span>
                    </span>
                    <span className='text-white font-semibold text-sm ml-3'>
                      5.73 GBP
                    </span>
                    <button className='rounded text-white text-base bg-dark-blue flex items-center justify-between px-4 py-2 ml-3 relative'>
                      <span>Low cost transfer</span>{' '}
                      <FaChevronDown className='text-light-blue ml-3' />
                      <div className='hidden absolute z-30 left-0 top-0 py-4 px-2 rounded bg-white w-112'>
                        <div>
                          <a href='#' className='bg-dark-blue block py-2 px-2'>
                            <div>
                              <span className='block text-white text-base'>
                                Low cost transfer{' '}
                                <span className='text-gray-200 font-100'>
                                  5.73GBP fee
                                </span>
                              </span>
                              <span className='block text-gray-200 font-100'>
                                Send money from your bank account
                              </span>
                            </div>
                          </a>
                        </div>
                        <div>
                          <a href='#' className='bg-dark-blue block py-4 px-3'>
                            <div>
                              <span className='block text-white text-base'>
                                Low cost transfer{' '}
                                <span className='text-gray-200 font-100'>
                                  5.73GBP fee
                                </span>
                              </span>
                              <span className='block text-gray-200 font-100'>
                                Send money from your bank account
                              </span>
                            </div>
                          </a>
                        </div>
                        <div>
                          <a href='#' className='bg-dark-blue block py-4 px-3'>
                            <div>
                              <span className='block text-white text-base'>
                                Low cost transfer{' '}
                                <span className='text-gray-200 font-100'>
                                  5.73GBP fee
                                </span>
                              </span>
                              <span className='block text-gray-200 font-100'>
                                Send money from your bank account
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </button>
                    <span className='text-sm text-gray-300 ml-3'>fee</span>
                  </li>
                  <li className='flex items-center mt-3 relative'>
                    <span className='h-2 w-2 rounded-full bg-dark-blue ml-2'></span>
                    <span className='text-white text-sm font-semibold ml-5'>
                      994.27 GBP
                    </span>

                    <span className='text-sm text-gray-300 ml-3'>
                      Amount we'll convert
                    </span>
                  </li>
                  <li className='flex items-center mt-3'>
                    <span className='h-6 w-6 inline-block rounded-full bg-dark-blue flex items-center text-center'>
                      <span className='inline-block text-base text-white font-semibold text-center'>
                        &times;
                      </span>
                    </span>
                    <span className='text-light-blue font-semibold text-sm ml-3'>
                      420.308
                    </span>
                    <span className='text-sm text-gray-300 ml-3'>
                      <span className='underline underline-dotted hover:text-light-blue'>
                        Guaranteed rate
                      </span>
                      <span>(24 hrs)</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className='flex rounded overflow-hidden mt-4 relative'>
                <div className='flex flex-col flex-1'>
                  <span className='block bg-white text-base text-dark-blue pt-2 pl-3'>
                    Recipient gets
                  </span>
                  <div className='relative'>
                    <input
                      type='text'
                      className='bg-white w-full text-dark-blue font-semibold outline-none text-2xl px-3 pt-1 pb-2'
                      value='425,853.80'
                    />
                    <FaLock className='text-gray-400 text-xl z-10 absolute right-0 top-0 mr-4' />
                  </div>
                </div>
                <button className='text-white w-32 text-xl bg-dark-blue font-semibold px-3 flex justify-center items-center'>
                  <span>NGN</span>
                  <FaChevronDown className='text-light-blue ml-3' />
                </button>
              </div>

              <div className='flex items-center mt-8'>
                <div className='w-1/2 text-center'>
                  <span className='text-base text-gray-300 block md:text-lg'>
                    You can save vs banks
                  </span>
                  <span className='text-base text-white font-semibold block md:text-lg md:font-bold'>
                    2.17 GBP
                  </span>
                </div>
                <div className='w-1/2 text-center'>
                  <span className='text-base text-gray-300 block md:text-lg'>
                    Should arrive
                  </span>
                  <span className='text-base text-white font-semibold block md:text-lg md:font-bold'>
                    by Sep 3
                  </span>
                </div>
              </div>

              <div className='flex flex-col mt-8 md:mt-3 md:flex-row justify-between'>
                <button className='block text-center font-semibold text-lg text-white font-semibold bg-light-blue rounded p-3 hover:bg-blue-500 md:w-48% md:mt-4'>
                  Compare price
                </button>
                <button className='block text-center font-semibold text-lg text-white font-semibold bg-dark-green rounded p-3 mt-4 hover:bg-green-500 md:w-48%'>
                  Get started
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='flex justify-center mt-3 sm:block mt-5 md:hidden'>
          <div className='w-1/2 pr-3 sm:w-full sm:p-0'>
            <img
              className='h-16 mt-4 ml-auto sm:mx-auto sm:mt-0'
              src='/static/appstore.svg'
              alt='App store'
            />
          </div>
          <div className='w-1/2 pl-3 sm:w-full'>
            <img
              className='h-16 mt-4 mr-auto sm:mx-auto sm:mt-5'
              src='/static/playstore.svg'
              alt='App store'
            />
          </div>
        </div>

        <div className='mt-12 md:hidden'>
          <p className='text-white text-lg text-center px-12 mt-8'>
            Join over 5 million people who get the real exchange rate with
            TransferWise. We’re{' '}
            <a href='#' className='text-light-blue'>
              on average 8x cheaper
            </a>{' '}
            than leading UK high street banks.
          </p>
        </div>

        <div className='mt-12 sm:flex items-center justify-between sm:px-16 md:mt-3 lg:inline-block lg:px-0 lg:-mt-16'>
          <div className='flex flex-col justify-center sm:text-center lg:inline-block'>
            <span className='block mx-auto lg:ml-0 lg:mr-auto'>
              <svg
                className='w-16'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 84 50'
              >
                <path
                  fill='#253655'
                  d='M14.3 43.5h46.9v-21H0v21h7.1V50l7.2-6.5z'
                />
                <path
                  fill='#DBF4FE'
                  d='M70.1 38.5H7.2v-24h77.2v24h-7.1V45l-7.2-6.5z'
                  data-animator-group='true'
                  data-animator-type='2'
                />
                <path
                  fill='#758BD8'
                  d='M24 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9zM37 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1zM50 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9zM63 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9zM76 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z'
                  data-animator-group='true'
                  data-animator-type='2'
                />
              </svg>
            </span>
            <h2 className='text-white text-lg font-semibold block mx-auto mt-6 sm:mt-8'>
              5 million customers
            </h2>
            <a
              href='#'
              className='text-light-blue text-lg font-semibold flex items-center block mx-auto hover:text-blue-500'
            >
              <span>Read on Trustpilot</span>
              <FaChevronRight className='text-sm' />
            </a>
          </div>

          <div className='flex flex-col justify-center mt-6 sm:mt-0 sm:text-center lg:inline-block lg:ml-16'>
            <span className='block mx-auto lg:ml-0 lg:mr-auto'>
              <svg
                className='w-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 36 60'
              >
                <g data-animator-type='0'>
                  <path
                    fill='#253655'
                    d='M28.8 53.6h-3.4V22.2c0-4.1-3.3-7.3-7.3-7.3s-7.3 3.2-7.3 7.3v8.5H7.3v-8.5a10.7 10.7 0 0 1 21.4-.6l.1 32z'
                    data-animator-group='true'
                    data-animator-type='1'
                  />
                </g>
                <g data-animator-type='1'>
                  <path
                    fill='#DBF4FE'
                    d='M3.3 30.3h29.4v25.9H3.3z'
                    data-animator-group='true'
                    data-animator-type='2'
                  />
                </g>
                <path
                  fill='#758BD8'
                  d='M20.8 41.1c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7c0 .8.4 1.6 1 2.2v5h3.4v-5c.6-.6 1-1.4 1-2.2z'
                  data-animator-group='true'
                  data-animator-type='1'
                />
              </svg>
            </span>
            <h2 className='text-white text-lg font-semibold block mx-auto mt-6'>
              FCA regulated
            </h2>
            <a
              href='#'
              className='text-light-blue text-lg font-semibold flex items-center block mx-auto hover:text-blue-500'
            >
              <span>Learn more</span>
              <FaChevronRight className='text-sm' />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
