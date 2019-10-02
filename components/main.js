import { useEffect, useState } from 'react'
import { FaChevronDown, FaLock, FaChevronRight, FaPlay } from 'react-icons/fa'
import axios from 'axios'
import Dropdown from './dropdown'

function Main() {
  const [isFromOpen, setIsFromOpen] = useState(false)
  const [isToOpen, setIsToOpen] = useState(false)
  const [from, setFrom] = useState('GBP')
  const [to, setTo] = useState('NGN')
  const [fromAmount, setFromAmount] = useState('1000')
  const [toAmount, setToAmount] = useState(0)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [fromInvalidMessage, setFromInvalidMessage] = useState(null)
  const [toInvalidMessage, setToInvalidMessage] = useState(null)

  const ENDPOINT = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=2a610471886565c805c8`

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        const rate = Number(data[`${from}_${to}`])
        setExchangeRate(rate)
        setToAmount(formatToMoney(parseFloat(fromAmount) * rate))
      })
      .catch(err => {
        console.log({ err })
      })
  }, [from, to])

  const formatToMoney = num =>
    parseFloat(num)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  const formatToNumber = num =>
    String(num).replace(/[a-zA-Z-=!@`*\/ ,\t]+/g, '')

  const currencies = [
    {
      name: 'Popular currencies'
    },
    {
      name: 'Euro',
      code: 'EUR',
      flag: 'europe-flag.jpg'
    },
    {
      name: 'British pound',
      code: 'GBP',
      flag: 'eng.png'
    },
    {
      name: 'Indian rupee',
      code: 'INR',
      flag: 'india.png'
    },
    {
      name: 'United States dollar',
      code: 'USD',
      flag: 'us.png'
    },
    {
      name: 'All currencies'
    },
    {
      name: 'Argentine peso',
      code: 'ARS',
      flag: 'ARS.png'
    },
    {
      name: 'Australian dollar',
      code: 'AUD',
      flag: 'AUD.png'
    },
    {
      name: 'Bulgarian lev',
      code: 'BGN',
      flag: 'BGN.png'
    },
    {
      name: 'Brazilian real',
      code: 'BRL',
      flag: 'brazil.jpg'
    },
    {
      name: 'Canadian dollar',
      code: 'CAD',
      flag: 'CAD.png'
    },
    {
      name: 'Swiss franc',
      code: 'CHF',
      flag: 'CHF.png'
    },
    {
      name: 'Nigerian naira',
      code: 'NGN',
      flag: 'ngn.png'
    },
    {
      name: 'Czech koruna',
      code: 'CZK',
      flag: 'CZK.png'
    },
    {
      name: 'Danish krone',
      code: 'DKK',
      flag: 'DKK.png'
    },
    {
      name: 'Hong Kong dollar',
      code: 'HKD',
      flag: 'HKD.png'
    },
    {
      name: 'Croatian kuna',
      code: 'HRK',
      flag: 'HRK.png'
    },
    {
      name: 'Hungarian forint',
      code: 'HUF',
      flag: 'HUF.png'
    },

    {
      name: 'Japanese yen',
      code: 'JPY',
      flag: 'JPY.png'
    },
    {
      name: 'Malaysian ringgit',
      code: 'MYR',
      flag: 'MYR.png'
    },
    {
      name: 'Norwegian krone',
      code: 'NOK',
      flag: 'NOK.png'
    },
    {
      name: 'New Zealand dollar',
      code: 'NZD',
      flag: 'NZD.png'
    },
    {
      name: 'Polish złoty',
      code: 'PLN',
      flag: 'PLN.png'
    },
    {
      name: 'Romanian leu',
      code: 'RON',
      flag: 'RON.png'
    },
    {
      name: 'Swedish krona',
      code: 'SEK',
      flag: 'SEK.png'
    },
    {
      name: 'Singapore dollar',
      code: 'SGD',
      flag: 'SGD.png'
    },
    {
      name: 'Turkish lira',
      code: 'TRY',
      flag: 'TRY.png'
    }
  ]

  return (
    <>
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
                  <span className='h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue hover:text-white'>
                    <FaPlay className='text-dark-blue text-xs hover:text-light-blue' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3 hover:text-white'>
                    See how we send money
                  </span>
                </button>
              </div>
            </div>

            <div className='right-pane lg:w-1/3'>
              <form className='mt-4 md:mt-8 lg:mt-0 relative'>
                <div
                  className={`relative rounded mt-4 ${fromInvalidMessage !==
                    null && 'border border-red-500'} `}
                >
                  <div className='flex overflow-hidden relative'>
                    <div className='flex flex-col flex-1'>
                      <span
                        className={`block bg-white text-base text-dark-blue pt-2 pl-3 ${fromInvalidMessage !==
                          null && 'text-red-600'}`}
                      >
                        You send
                      </span>
                      <div className='relative'>
                        <input
                          type='text'
                          className='bg-white w-full text-dark-blue font-semibold outline-none text-2xl px-3 pt-1 pb-2'
                          value={
                            Object.is(NaN, fromAmount) === true
                              ? '0'
                              : fromAmount
                          }
                          onChange={e => {
                            const num = formatToNumber(e.target.value)
                            if (num <= 1) {
                              setFromInvalidMessage(
                                `The smallest amount you can send is 1.03 ${from}.`
                              )
                            }
                            if (num > 1 && num <= 2) {
                              setFromInvalidMessage(
                                `Open a borderless account and add funds to instantly pay for your transfers.`
                              )
                            }
                            if (num >= 2) {
                              setFromInvalidMessage(null)
                            }
                            setFromAmount(num)
                          }}
                          onKeyUp={e => {
                            setToAmount(
                              formatToMoney(
                                formatToNumber(
                                  String(fromAmount) * exchangeRate
                                )
                              )
                            )
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type='button'
                      className='text-white w-32 text-xl bg-dark-blue font-semibold px-3 flex justify-between items-center'
                      onClick={e => setIsFromOpen(true)}
                    >
                      <img
                        className='hidden w-6 sm:inline-block'
                        src={`/static/${
                          currencies[
                            currencies.findIndex(c => c.code === from)
                          ]['flag']
                        }`}
                        alt=''
                      />
                      <span className='ml-3'>{from}</span>
                      <FaChevronDown className='text-light-blue ml-3' />
                    </button>
                  </div>
                  {fromInvalidMessage !== null && (
                    <div className='relative text-red-600 w-full px-4 py-2  bg-red-100 font-normal'>
                      {fromInvalidMessage}
                    </div>
                  )}
                  {isFromOpen && (
                    <div
                      className='fixed bg-white h-50vh md:h-120 w-full p-3 overflow-y-scroll overflow-x-hidden rounded-sm left-0 z-50 sm:absolute sm:top-0 sm:right-0 sm:left-auto sm:w-5/6'
                      style={{
                        bottom: isFromOpen && '0',
                        transition: 'all 0.5s ease-in-out'
                      }}
                      onBlur={e => setIsFromOpen(false)}
                    >
                      <Dropdown
                        onChange={selection => {
                          setFrom(selection.code)
                          setIsFromOpen(false)
                        }}
                        items={currencies}
                        initialHighlightedIndex={currencies.findIndex(
                          c => c.code === from
                        )}
                      />
                    </div>
                  )}
                </div>

                <div className='flex rounded overflow-hidden mt-4'>
                  <ul className='block w-full px-3'>
                    <li className='flex items-center'>
                      <span className='h-6 w-6 inline-block rounded-full bg-dark-blue flex justify-center items-center text-center'>
                        <span className='flex justify-center items-center inline-block text-base text-white font-semibold text-center'>
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
                            <a
                              href='#'
                              className='bg-dark-blue block py-2 px-2'
                            >
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
                            <a
                              href='#'
                              className='bg-dark-blue block py-4 px-3'
                            >
                              <div>
                                <span className='block text-white text-base'>
                                  Low cost transfer{' '}
                                  <span className='text-gray-200 font-100'>
                                    5.73{from} fee
                                  </span>
                                </span>
                                <span className='block text-gray-200 font-100'>
                                  Send money from your bank account
                                </span>
                              </div>
                            </a>
                          </div>
                          <div>
                            <a
                              href='#'
                              className='bg-dark-blue block py-4 px-3'
                            >
                              <div>
                                <span className='block text-white text-base'>
                                  Low cost transfer{' '}
                                  <span className='text-gray-200 font-100'>
                                    5.73{from} fee
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
                      <span className='text-sm text-gray-300 ml-5'>
                        994.27 {from}
                      </span>

                      <span className='text-sm text-gray-300 ml-3'>
                        Amount we'll convert
                      </span>
                    </li>
                    <li className='flex items-center mt-3'>
                      <span className='h-6 w-6 inline-block rounded-full bg-dark-blue flex items-center justify-center text-center'>
                        <span className='h-full w-full flex items-center justify-center inline-block text-base text-white font-semibold text-center'>
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
                <div
                  className={`relative rounded mt-4 ${toInvalidMessage !==
                    null && 'border border-red-500'} `}
                >
                  <div className='flex rounded overflow-hidden mt-4 relative'>
                    <div className='flex flex-col flex-1'>
                      <span
                        className={`block bg-white text-base text-dark-blue pt-2 pl-3 ${fromInvalidMessage !==
                          null && 'text-red-600'}`}
                      >
                        Recipient gets
                      </span>
                      <div className='relative'>
                        <input
                          type='text'
                          className='bg-white w-full text-dark-blue font-semibold outline-none text-2xl px-3 pt-1 pb-2'
                          value={
                            Object.is(NaN, toAmount) === true ? '0' : toAmount
                          }
                          onChange={e => {
                            const num = formatToNumber(e.target.value)
                            if (num <= 1) {
                              setToInvalidMessage(
                                `The smallest amount you can send is 1.03 ${to}.`
                              )
                            }
                            if (num > 1 && num <= 2) {
                              setToInvalidMessage(
                                `Open a borderless account and add funds to instantly pay for your transfers.`
                              )
                            }
                            if (num >= 2) {
                              setToInvalidMessage(null)
                            }
                            setToAmount(num)
                          }}
                          onKeyUp={e => {
                            setFromAmount(
                              formatToMoney(
                                formatToNumber(String(toAmount) / exchangeRate)
                              )
                            )
                          }}
                        />
                        <FaLock className='text-gray-400 text-xl z-10 absolute right-0 top-0 mr-4' />
                      </div>
                    </div>
                    <button
                      type='button'
                      className='text-white w-32 text-xl bg-dark-blue font-semibold px-3 flex justify-center items-center'
                      onClick={e => setIsToOpen(true)}
                    >
                      <img
                        className='hidden w-6 sm:inline-block'
                        src={`/static/${
                          currencies[currencies.findIndex(c => c.code === to)][
                            'flag'
                          ]
                        }`}
                        alt=''
                      />
                      <span className='ml-3'>{to}</span>
                      <FaChevronDown className='text-light-blue ml-3' />
                    </button>
                  </div>
                  {toInvalidMessage !== null && (
                    <div className='relative text-red-600 w-full px-4 py-2  bg-red-100 font-normal'>
                      {toInvalidMessage}
                    </div>
                  )}
                  {isToOpen && (
                    <div
                      className='fixed bg-white h-50vh md:h-120 w-full p-3 overflow-y-scroll overflow-x-hidden rounded-sm left-0 z-50 sm:absolute sm:top-0 sm:right-0 sm:left-auto sm:w-5/6'
                      style={{
                        bottom: isToOpen && '0',
                        transition: 'all 0.5s ease-in-out'
                      }}
                      onBlur={() => setIsToOpen(false)}
                    >
                      {console.log(currencies.findIndex(c => c.code === to))}
                      <Dropdown
                        onChange={selection => {
                          setTo(selection.code)
                          setIsToOpen(false)
                        }}
                        items={currencies}
                        initialHighlightedIndex={currencies.findIndex(
                          c => c.code === to
                        )}
                      />
                    </div>
                  )}
                </div>

                <div className='flex items-center mt-8'>
                  <div className='w-1/2 text-center'>
                    <span className='text-base text-gray-300 block md:text-lg'>
                      You can save vs banks
                    </span>
                    <span className='text-base text-white font-semibold block md:text-lg md:font-bold'>
                      2.17 {from}
                    </span>
                  </div>
                  <div className='w-1/2 text-center'>
                    <span className='text-base text-gray-300 block md:text-lg'>
                      Should arrive
                    </span>
                    <span className='text-base text-white font-semibold block md:text-lg md:font-bold'>
                      in 10 hours
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
    </>
  )
}

export default Main
