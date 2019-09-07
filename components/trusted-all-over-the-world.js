function TrustedAllOverTheWorld() {
  return (
    <section className='bg-dark-blue'>
      <div className='container mx-auto px-4 py-12'>
        <h2 className='text-white font-bold text-center text-3xl'>
          Trusted all over the world<span className='text-light-blue'>.</span>
        </h2>
        <p className='text-base text-white text-center mt-2 px-8 md:text-lg'>
          We move over £4 billion every month, and save people and businesses £4
          million in hidden fees every day.
        </p>
        <div className='offices mt-16'>
          <div className='mb-3'>
            <h2 className='text-white font-bold text-center text-3xl'>
              12 officies
            </h2>
            <p className='text-base text-white text-center mt-0 px-8 md:text-lg'>
              around the world
            </p>
          </div>
          <div className='mb-3'>
            <h2 className='text-white font-bold text-center text-3xl'>
              £4 billion
            </h2>
            <p className='text-base text-white text-center mt-0 px-8 md:text-lg'>
              sent every month
            </p>
          </div>
          <div className='mb-3'>
            <h2 className='text-white font-bold text-center text-3xl'>
              5 million
            </h2>
            <p className='text-base text-white text-center mt-0 px-8 md:text-lg'>
              customers
            </p>
          </div>
          <div className='mb-3'>
            <h2 className='text-white font-bold text-center text-3xl'>
              £1 billion
            </h2>
            <p className='text-base text-white text-center mt-0 px-8 md:text-lg'>
              saved by customers every year
            </p>
          </div>
        </div>
        <div className='mt-5 border-t-2 border-dark-blue'>
          <p className='text-base text-white text-center mt-2 px-8 md:text-lg'>
            We’re available in 59 countries, and we add new currencies all the
            time. If you think we should add a specific currency, let us know.
            Be the first to know when we add more by{' '}
            <a href='#' className='text-light-blue underline'>
              signing up to our mailing list
            </a>
          </p>
        </div>
        <div className='countries mt-3 sm:flex flex-wrap justify-between'>
          <a
            href='#'
            className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/europe-flag.jpg' alt='' />
            <span className='ml-6'>Europe</span>
          </a>
          <a
            href='#'
            className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/eng.png' alt='' />
            <span className='ml-6'>United Kingdom</span>
          </a>
          <a
            href='#'
            className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/india.png' alt='' />
            <span className='ml-6'>India</span>
          </a>
          <a
            href='#'
            className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/us.png' alt='' />
            <span className='ml-6'>United States</span>
          </a>
          <a
            href='#'
            className='hidden md:flex country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/brazil.jpg' alt='' />
            <span className='ml-6'>Brazil</span>
          </a>
          <a
            href='#'
            className='hidden md:flex country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
          >
            <img className='h-5 w-6' src='/static/australia.png' alt='' />
            <span className='ml-6'>Australia</span>
          </a>
        </div>
        <div className='flex justify-center items-center mt-4 sm:mt-8'>
          <a
            href='#'
            className='border border-light-blue rounded block py-3 px-6 text-light-blue text-bold text-base text-center hover:bg-light-blue hover:text-white'
          >
            See all routes we cover
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrustedAllOverTheWorld
