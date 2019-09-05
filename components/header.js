import { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaCaretRight,
  FaCaretDown,
  FaGlobe
} from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-lightest-blue'>
      <div className='container mx-auto px-4 relative md:px-2'>
        <div className='flex justify-between items-center py-4 md:py-1'>
          <a href='#' className='text-xl flex items-center'>
            <button
              aria-label='Open Navigation'
              onClick={() => setIsOpen(true)}
              className='hover:cursor-pointer'
            >
              <FaBars className='text-light-blue mr-2 md:hidden' />
            </button>
            <span className='text-white md:hidden lg:inline-block'>
              TransferWise
            </span>
          </a>
          <ul className='flex items-center'>
            <li className='mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Money transfer</span>
                <FaCaretDown className='hidden xl:inline-block text-white' />
              </a>
            </li>
            <li className='mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span className='flex items-center'>
                  <small className='text-xs bg-dark-green text-white rounded-full mr-2 px-3 py-1 hidden lg:inline-block'>
                    New
                  </small>
                  <span className=''>Borderless Account </span>
                </span>
                <FaCaretDown className='hidden xl:inline-block text-white' />
              </a>
            </li>
            <li className='mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Business</span>
                <FaCaretDown className='hidden xl:inline-block text-white' />
              </a>
            </li>
            <li className='mr-3 hidden md:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Help</span>
                <FaCaretDown className='hidden xl:inline-block text-white' />
              </a>
            </li>
            <li className='mr-3 hidden xl:inline-block'>
              <a
                href='#'
                className='flex items-center text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span className='flex items-center'>
                  <FaGlobe className='text-gray-100' />
                  <span className='pl-1'>EN</span>
                </span>
                <FaCaretDown className='hidden xl:inline-block text-white' />
              </a>
            </li>
            <li className='hidden md:inline-block'>
              <a href='#' className='text-white font-semibold px-4 py-1'>
                Log in
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-light-blue font-semibold rounded border border-light-blue px-4 py-1 hover:text-white hover:bg-light-blue'
              >
                Register
              </a>
            </li>
          </ul>
        </div>

        {isOpen && (
          <nav
            ref={navRef}
            className='block h-full z-10 flex flex-col bg-dark-blue absolute w-full z-10 top-0 left-0 md:hidden'
            style={{ height: '100vh' }}
          >
            <div className='container mx-auto h-full flex flex-col justify-between p-4 '>
              <div>
                <a href='#' className='text-xl flex items-center'>
                  <button
                    aria-label='Close Navigation'
                    onClick={() => setIsOpen(false)}
                    className='hover:cursor-pointer md:hidden'
                  >
                    <FaTimes className='text-light-blue mr-2' />
                  </button>
                  <span className='text-white'>TransferWise</span>
                </a>
                <ul className='pl-1 pt-3'>
                  <li className='border-t border-b border-gray-800'>
                    <a
                      href='#'
                      className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
                    >
                      <span>Money transfer</span>
                      <FaCaretRight className='text-light-blue' />
                    </a>
                  </li>
                  <li className='border-t border-b border-gray-800'>
                    <a
                      href='#'
                      className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
                    >
                      <span>
                        Borderless Account{' '}
                        <small className='text-xs bg-dark-green text-white rounded-full ml-2 px-3 py-1'>
                          New
                        </small>
                      </span>
                      <FaCaretRight className='text-light-blue' />
                    </a>
                  </li>
                  <li className='border-t border-b border-gray-800'>
                    <a
                      href='#'
                      className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
                    >
                      <span>Business</span>
                      <FaCaretRight className='text-light-blue' />
                    </a>
                  </li>
                  <li className='border-t border-b border-gray-800'>
                    <a
                      href='#'
                      className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
                    >
                      <span>Help</span>
                      <FaCaretRight className='text-light-blue' />
                    </a>
                  </li>
                  <li className='border-t border-b border-gray-800'>
                    <a
                      href='#'
                      className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
                    >
                      <span className='flex items-center'>
                        <FaGlobe className='text-gray-100' />
                        <span className='pl-1'>EN</span>
                      </span>
                      <FaCaretRight className='text-light-blue' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <a
                  href='#'
                  className='block w-full text-white text-base font-semibold text-center py-4'
                >
                  Log in
                </a>
                <a
                  href='#'
                  className='block w-full text-white text-base font-semibold text-center text-light-blue rounded border border-light-blue py-3 mt-1 mb-2 hover:text-white hover:bg-light-blue'
                >
                  Register
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
