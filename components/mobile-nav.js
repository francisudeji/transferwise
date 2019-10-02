import { FaTimes, FaGlobe, FaChevronRight } from 'react-icons/fa'

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <nav
      className='block h-full z-20 flex flex-col bg-dark-blue fixed w-full top-0 md:hidden'
      style={{
        height: '100%',
        transition: 'all 0.5s ease-in-out',
        left: isOpen ? '0' : '-100%'
      }}
    >
      <div className='w-full h-full flex flex-col justify-between pt-4 pb-2 px-6'>
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
          <ul className='pl-1 pt-3 block w-full'>
            <li className='border-t border-b border-gray-800'>
              <a
                href='#'
                className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Money transfer</span>
                <FaChevronRight className='text-light-blue' />
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
                <FaChevronRight className='text-light-blue' />
              </a>
            </li>
            <li className='border-t border-b border-gray-800'>
              <a
                href='#'
                className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Business</span>
                <FaChevronRight className='text-light-blue' />
              </a>
            </li>
            <li className='border-t border-b border-gray-800'>
              <a
                href='#'
                className='flex items-center justify-between text-white font-semibold text-base py-5 hover:text-light-blue'
              >
                <span>Help</span>
                <FaChevronRight className='text-light-blue' />
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
                <FaChevronRight className='text-light-blue' />
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <a
            href='#'
            className='block w-full text-white text-base font-semibold text-center py-4 hover:text-light-blue'
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
  )
}

export default MobileNav
