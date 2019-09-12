import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='py-32 bg-lightest-blue'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col md:flex-row text-base border-b-2 border-gray-600 pb-6'>
          <div className='block md:hidden w-full text-center mb-6 md:text-left md:w-23%'>
            <a
              href='#'
              className='font-normal text-white text-2xl flex justify-center'
            >
              <img src='/static/tw.svg' className='h-5 w-5' alt='' />{' '}
              TransferWise
            </a>
          </div>

          <div className='mb-6 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <p className='text-gray-200 text-sm'>Company and team</p>
            <ul className='mt-4'>
              <li>
                <a href='#' className='text-white hover:text-gray-400 text-sm'>
                  Company and team
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-400 text-sm'>
                  News and blog
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-400 text-sm'>
                  Press
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-400 text-sm'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-400 text-sm'>
                  Affiliates and partnerships
                </a>
              </li>
            </ul>
          </div>

          <div className='mb-6 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <p className='text-white text-sm'>Help and support</p>
            <ul className='mt-4'>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Help center
                </a>
              </li>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Mid-market rate
                </a>
              </li>
            </ul>
          </div>

          <div className='mb-6 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <p className='text-white text-sm'>Learn more</p>
            <ul className='mt-4'>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Send money abroad
                </a>
              </li>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Swifts/BIC codes
                </a>
              </li>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Currency converter
                </a>
              </li>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Rate alerts
                </a>
              </li>
              <li>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  Compare exchange rates
                </a>
              </li>
            </ul>
          </div>

          <div className='w-full text-center md:text-left md:w-23%'>
            <p className='text-white text-sm'>Follow us</p>
            <ul className='mt-4 flex justify-center md:justify-start'>
              <li className='mr-4'>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  <FaFacebookSquare className='text-2xl' />
                </a>
              </li>
              <li className='mr-4'>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  <FaTwitter className='text-2xl' />
                </a>
              </li>
              <li className='mr-4'>
                <a href='#' className='text-white text-sm hover:text-gray-400'>
                  <FaInstagram className='text-2xl' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col md:flex-row border-light-blue pb-6 mt-10'>
          <div className='hidden md:inline-block lg:flex w-full text-center md:text-left md:w-23%'>
            {/* <img
              src='./assets/transferwise-logo.png'
              className=''
              style='height: 20px'
            /> */}
            <a
              href='#'
              className='font-normal hover:text-gray-400 text-white text-xl tracking-tight'
            >
              TransferWise
            </a>
          </div>
          <div className='mb-3 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <a
              href='#'
              className='font-normal hover:text-gray-400 text-white font-bold text-base'
            >
              Legal
            </a>
          </div>
          <div className='mb-3 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <a
              href='#'
              className='font-normal hover:text-gray-400 text-white font-bold text-base'
            >
              Privacy Policy
            </a>
          </div>
          <div className='mb-3 md:mb-0 w-full text-center md:text-left md:w-23%'>
            <a
              href='#'
              className='font-normal hover:text-gray-400 text-white font-bold text-base'
            >
              Country site map
            </a>
          </div>
        </div>

        <div className='text-gray-600 text-sm text-center pb-2 my-10'>
          <p className='block mb-6'>© TransferWise Ltd 2019</p>
          <p className='block'>
            TransferWise is authorised by the Financial Conduct Authority under
            the Electronic Money Regulations 2011, Firm Reference{' '}
            <span className='text-gray-300'>900507</span>, for the issuing of
            electronic money.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
