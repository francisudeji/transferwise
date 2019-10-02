import { useState } from 'react'
import {
  FaBars,
  FaGlobe,
  FaCheck,
  FaChevronDown,
  FaCaretUp,
  FaChevronRight
} from 'react-icons/fa'
import MobileNav from './mobile-nav'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-lightest-blue'>
      <div className='container mx-auto px-4 md:px-2'>
        <div className='flex justify-between items-center py-4 md:py-1'>
          <a href='#' className='text-xl flex items-center'>
            <button
              aria-label='Open Navigation'
              onClick={() => {
                setIsOpen(true)
              }}
              className='hover:cursor-pointer'
            >
              <FaBars className='text-light-blue mr-2 md:hidden' />
            </button>
            <img
              src='/static/tw.svg'
              className='hidden md:inline-block h-6 lg:h-4 lg:-mt-3'
              alt=''
            />
            <span className='text-white md:hidden lg:inline-block'>
              TransferWise
            </span>
          </a>
          <ul className='flex items-center'>
            <li className='relative dropdown-link mr-3 hidden md:inline-block relative'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Money transfer</span>
                <FaChevronDown className='hidden xl:inline-block text-white' />
              </a>
              <span
                style={{ width: '400px' }}
                className='dropdown rounded -mt-3 absolute z-50 bg-white right-0 top-1 mt-2 -mt-3 flex flex-col'
              >
                <FaCaretUp className='text-white -mt-2 absolute block right-0 mr-6' />
                <a href='#' className='block p-10'>
                  <img
                    src='/static/send-money.svg'
                    alt='Send money'
                    className='block'
                  />
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Send money</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-sm text-dark-blue'>
                    Make a one-off payment. You'll get the real exchange rate
                    with the low fee we're known for.
                  </p>
                </a>

                <a href='#' className='block p-10 bg-gray-200'>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Send large amounts</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1 pr-1'>About transferwise</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                </a>
              </span>
            </li>
            <li className='relative dropdown-link mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span className='flex items-center'>
                  <small className='text-xs bg-dark-green text-white rounded-full mr-2 px-3 py-1 hidden lg:inline-block'>
                    New
                  </small>
                  <span>Borderless Account </span>
                </span>
                <FaChevronDown className='hidden xl:inline-block text-white' />
              </a>
              <span
                style={{ width: '400px' }}
                className='dropdown rounded -mt-3 absolute z-50 bg-white right-0 mt-2 flex flex-col'
              >
                <FaCaretUp className='text-white -mt-2 absolute block -mt-2 right-0 mr-6' />
                <a href='#' className='block p-10'>
                  <img
                    src='/static/borderless.svg'
                    alt='Borderless'
                    className='block'
                  />
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Borderless account</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-sm text-dark-blue'>
                    Receive money from 30+ different countries. Send at the real
                    exchange rate, and spend with a free Mastercard.
                  </p>
                </a>

                <a href='#' className='block bg-gray-200 p-10'>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Pricing</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1 pr-1'>About transferwise</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                </a>
              </span>
            </li>
            <li className='relative dropdown-link mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Business</span>
                <FaChevronDown className='hidden xl:inline-block text-white' />
              </a>
              <span
                style={{ width: '400px' }}
                className='dropdown rounded -mt-3 absolute z-50 bg-white right-0 mt-2 flex flex-col'
              >
                <FaCaretUp className='text-white -mt-2 absolute block -mt-2 right-0 mr-6' />
                <a href='#' className='block p-10'>
                  <img
                    src='/static/business.svg'
                    alt='Business'
                    className='block'
                  />
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>TransferWise for Business</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-sm text-dark-blue'>
                    A free multi currency account to send, spend, and receive in
                    over 40 countries.
                  </p>
                </a>

                <a href='#' className='block bg-gray-200 p-10'>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Business Pricing</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Freelancers</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1'>Ecommerce</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1 pr-1'>Enterprise</span>
                    <FaChevronRight className='ml-2 text-xs text-light-blue' />
                  </p>
                </a>
              </span>
            </li>
            <li className='relative dropdown-link mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Help</span>
              </a>
            </li>
            <li className='relative dropdown-link mr-3 hidden xl:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span className='flex items-center'>
                  <FaGlobe className='text-gray-100' />
                  <span className='pl-1'>EN</span>
                </span>
                <FaChevronDown className='hidden xl:inline-block text-white' />
              </a>
              <span
                style={{ width: '400px' }}
                className='dropdown rounded -mt-3 absolute z-50 bg-white right-0 mt-2 flex flex-col'
              >
                <FaCaretUp className='text-white -mt-2 absolute block -mt-2 right-0 mr-6' />
                <a href='#' className='block p-10'>
                  <p className='text-dark-blue text-sm font-semibold flex items-center'>
                    <span className='pb-1 text-2xl text-dark-blue font-bold'>
                      Hello World <span className='text-light-blue'>.</span>
                    </span>
                  </p>
                </a>

                <ul
                  href='#'
                  className='flex flex-wrap justify-between bg-gray-200 p-10'
                >
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Deutsch
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-light-blue text-sm font-semibold flex items w-1/2 flex items-center'>
                    <a href='#' className='pb-1'>
                      English (UK)
                    </a>
                    <FaCheck className='text-light-blue ml-1' />
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      English (US)
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1 pr-1'>
                      Espanyol
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Français
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Italiano
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Magyar
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1 pr-1'>
                      Polski
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1 pr-1'>
                      Português
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Română
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Türkçe
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1'>
                      Русский
                    </a>
                  </li>
                  <li className='font-semibold mb-2 text-dark-blue text-sm font-semibold flex items w-1/2'>
                    <a href='#' className='pb-1 pr-1'>
                      日本語
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className='hidden md:inline-block'>
              <a href='#' className='text-white font-semibold px-4 py-1'>
                Log in
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-light-blue font-semibold rounded border border-light-blue px-4 py-2 hover:text-white hover:bg-light-blue'
              >
                Register
              </a>
            </li>
          </ul>
        </div>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}

export default Header
