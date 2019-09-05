function SendingMoney() {
  return (
    <section>
      <div className='container mx-auto pb-16'>
        <div>
          <h2 className='text-dark-blue text-lg text-center font-semibold py-5 border border-t-dark-blue'>
            Sending 1,000.00 GBP with
          </h2>
          <ul>
            <li className='bg-dark-blue flex justify-between items-center py-6 px-5 border border-b-dark-blue'>
              <img
                className='h-5'
                src='/static/transferwise-white.svg'
                alt=''
              />
              <div>
                <span className='text-white text-lg font-semibold block text-right'>
                  425,853.80 NGN
                </span>
                <span className='text-dark-green text-lg font-semibold block text-right'>
                  Save up to 2,751.47 NGN
                </span>
              </div>
            </li>

            <li className='flex justify-between items-center py-6 px-5 border border-b-dark-blue'>
              <img className='h-6' src='/static/western-union.svg' alt='' />
              <div>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  425,224.20 NGN
                </span>
                <span className='text-dark-red text-sm font-semibold block text-right'>
                  - 629.60 NGN
                </span>
              </div>
            </li>
            <li className='flex justify-between items-center py-6 px-5 border border-b-dark-blue'>
              <img className='h-5' src='/static/barclays.svg' alt='' />
              <div>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  424,924.40 NGN
                </span>
                <span className='text-dark-red text-sm font-semibold block text-right'>
                  - 929.40 NGN
                </span>
              </div>
            </li>
            <li className='flex justify-between items-center py-6 px-5 border border-b-dark-blue'>
              <img className='h-5' src='/static/moneygram.svg' alt='' />
              <div>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  424,538.90 NGN
                </span>
                <span className='text-dark-red text-lg font-semibold block text-right'>
                  - 1,314.90 NGN
                </span>
              </div>
            </li>
            <li className='flex justify-between items-center py-6 px-5 border border-b-dark-blue'>
              <img className='h-5' src='/static/world-remit.svg' alt='' />
              <div>
                <span className='text-dark-blue text-lg font-semibold block text-right'>
                  423,102.33 NGN
                </span>
                <span className='text-dark-red text-lg font-semibold block text-right'>
                  - 2,751.47 NGN
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SendingMoney
