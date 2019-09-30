import FloatingImages from '../components/floating-images'

function MoneyWithoutBorders() {
  return (
    <section className='py-16 bg-white md:bg-dark-blue'>
      <div className='container px-6 sm:px-4 lg:p-6 mx-auto relative'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='w-full md:w-48%'>
            <h2 className='text-dark-blue md:text-white text-2xl md:text-4xl font-bold mb-3 text-center md:text-left'>
              We’re building money
              <br className='hidden md:inline-block' /> without borders
              <span className='text-blue-300'>.</span>
            </h2>
            <p className='text-dark-blue text-center md:text-left md:text-white text-base'>
              The world’s banking systems weren’t designed for people
              <br className='hidden md:inlin-block' /> without borders. That’s
              why we’re building a new one.
            </p>

            <div className='flex flex-col'>
              <ul className='mt-6 order-2 md:order-1'>
                <li className='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span className='text-light-blue'>1.</span> Be radically
                  transparent
                </li>
                <li className='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span className='text-light-blue'>2.</span> Charge as little
                  as possible
                </li>
                <li className='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span className='text-light-blue'>3.</span> Make premium the
                  new normal
                </li>
              </ul>

              <button className='order-1 block md:w-1/2 md:order-2 bg-transparent border border-light-blue rounded px-6 py-2 text-light-blue hover:bg-light-blue mt-6 hover:text-white font-semibold'>
                Find out more
              </button>
            </div>
          </div>

          <FloatingImages />
        </div>
      </div>
    </section>
  )
}

export default MoneyWithoutBorders
