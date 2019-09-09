function SendingMoney() {
  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='flex md:-mt-5'>
          <div className='left w-full z-10 md:w-2/3 md:-mt-8 border-t-2 border-lighest-blue shadow shadow-4xl'>
            <div className='bg-white md:h-32'>
              <h2 className='text-dark-blue text-base text-center font-semibold py-5 md:flex items-center justify-between px-2 md:px-10 md:text-lg'>
                <span>Sending 1,000.00 GBP with</span>
                <span className='hidden md:block'>
                  Recipient gets
                  <br />{' '}
                  <span className='font-normal text-sm'>
                    (Total after fees)
                  </span>
                </span>
              </h2>
            </div>
            <ul className='pb-6'>
              <li className='bg-lightest-blue flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue md:py-0 h-32'>
                <img
                  className='h-5'
                  src='/static/transferwise-white.svg'
                  alt=''
                />
                <div>
                  <span className='text-white text-lg font-semibold block text-right md:text-xl md:font-bold'>
                    445,177.77 NGN
                  </span>
                  <span className='text-dark-green text-lg font-semibold block text-right'>
                    Save up to 2,751.47 NGN
                  </span>
                </div>
              </li>

              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue md:py-0 h-32'>
                <img className='h-5' src='/static/western-union.svg' alt='' />
                <div>
                  <span className='text-dark-blue text-lg font-semibold block text-right md:text-xl md:font-bold'>
                    425,224.20 NGN
                  </span>
                  <span className='text-dark-red text-sm font-semibold block text-right'>
                    - 629.60 NGN
                  </span>
                </div>
              </li>
              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue md:py-0 h-32'>
                <img className='h-5' src='/static/barclays.svg' alt='' />
                <div>
                  <span className='text-dark-blue text-lg font-semibold block text-right md:text-xl md:font-bold'>
                    424,924.40 NGN
                  </span>
                  <span className='text-dark-red text-sm font-semibold block text-right'>
                    - 929.40 NGN
                  </span>
                </div>
              </li>
              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue md:py-0 h-32'>
                <img className='h-5' src='/static/moneygram.svg' alt='' />
                <div>
                  <span className='text-dark-blue text-lg font-semibold block text-right md:text-xl md:font-bold'>
                    424,538.90 NGN
                  </span>
                  <span className='text-dark-red text-sm font-semibold block text-right'>
                    - 1,314.90 NGN
                  </span>
                </div>
              </li>
              <li className='flex justify-between items-center py-6 px-5  md:py-0 h-32'>
                <img className='h-5' src='/static/world-remit.svg' alt='' />
                <div>
                  <span className='text-dark-blue text-lg font-semibold block text-right md:text-xl md:font-bold'>
                    423,102.33 NGN
                  </span>
                  <span className='text-dark-red text-sm font-semibold block text-right'>
                    - 2,751.47 NGN
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className='right w-1/3 hidden md:block'>
            <div className='bg-gray-200 pb-1'>
              <h2 className='text-dark-blue text-base text-center font-semibold py-5 border-b-2 border-lighest-blue md:flex items-center justify-between px-2 md:px-10'>
                <span>Transfer fee</span>
                <span>
                  Exchange rate
                  <br />{' '}
                  <span className='font-normal text-sm'>(1 GBP → NGN)</span>
                </span>
              </h2>
            </div>
            <ul>
              <li className='bg-dark-blue flex justify-between items-center py-5 px-5 border-b-2 border-lighest-blue md:py-0 h-32'>
                <p className='text-white font-base font-semibold'>5.73 GBP</p>
                <div>
                  <span className='text-white text-base font-semibold block text-right'>
                    428.308
                  </span>
                  <span className='text-white text-base font-semibold block text-right'>
                    Mid-market rate
                  </span>
                </div>
              </li>

              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue bg-gray-200 md:py-0 h-32'>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  0.00 GBP
                </span>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  425.224
                </span>
              </li>
              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue bg-gray-200 md:py-0 h-32'>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  0.00 GBP
                </span>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  424.924
                </span>
              </li>
              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue bg-gray-200 md:py-0 h-32'>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  0.00 GBP
                </span>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  424.539
                </span>
              </li>
              <li className='flex justify-between items-center py-6 px-5 border-b-2 border-lighest-blue bg-gray-200 md:py-0 h-32'>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  4.99 GBP
                </span>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  425.224
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='ndf bg-off-blue md:bg-white'>
        <div className='container mx-auto px-10 py-8 flex flex-col justify-between  md:flex-row'>
          <h2 className='w-full text-dark-blue text-center text-2xl font-bold md:w-1/3 md:text-left'>
            No hidden fees.
          </h2>
          <p className='w-full text-dark-blue text-center mt-3 text-base md:w-2/3 md:text-left'>
            We’re on a mission to bring transparency to finance,{' '}
            <span className='text-light-blue'>for people without borders</span>.
            We charge as little as possible, and we always show you upfront. No
            hidden fees. No bad exchange rates. No surprises.{' '}
            <span className='text-light-blue'>
              How do we collect this data?
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SendingMoney
