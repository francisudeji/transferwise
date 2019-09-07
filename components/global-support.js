function GlobalSupport() {
  return (
    <section className=''>
      <div className='container mx-auto px-4 py-12'>
        <div className='wrapper md:flex justify-between items-center'>
          <div className='wrapper-left'>
            <h1 className='text-dark-blue font-bold text-3xl text-center md:text-5xl md:text-left md:leading-tight md:pr-16'>
              Global support in a range of languages
              <span className='text-light-blue'>.</span>
            </h1>
            <p className='text-dark-blue text-base md:text-lg text-center md:text-left mt-4 md:pr-16'>
              We don’t do complicated, automated systems. We have offices around
              the world, full of people ready to help you. Whenever you need it.
            </p>
            <a
              href='#'
              className='text-light-blue mt-4 text-base font-bold bg-tranparent border border-light-blue text-center px-6 py-3 block mx-auto w-auto hover:bg-light-blue hover:text-white md:inline-block md:mt-6 md:text-lg'
            >
              Find out more
            </a>
          </div>
          <div className='wrapper-right mt-8 md:mt-0'>
            <div className='img-container w-auto md:ml-auto'>
              <img
                className='w-2/3 block relative ml-8 z-10'
                src='/static/support.jpg'
                alt=''
              />
              <svg
                className='block mx-auto -mt-24 z-0'
                fill='#FFA600'
                xmlns='http://www.w3.org/2000/svg'
                width='160'
                height='160'
              >
                <circle cx='80' cy='80' r='80' />
              </svg>
              <img
                className='w-2/4 block relative ml-auto mr-8 z-10 -mt-24 sm:-mt-32'
                src='/static/city.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalSupport
