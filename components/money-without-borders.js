function MoneyWithoutBorders() {
  return (
    <section class='py-16 bg-white md:bg-dark-blue'>
      <div class='container px-6 sm:px-4 lg:p-6 mx-auto'>
        <div class='flex flex-col md:flex-row md:justify-between'>
          <div class='w-full md:w-48%'>
            <h2 class='text-dark-blue md:text-white text-2xl md:text-4xl font-bold mb-3 text-center md:text-left'>
              We’re building money
              <br class='hidden md:inline-block' /> without borders
              <span class='text-blue-300'>.</span>
            </h2>
            <p class='text-dark-blue text-center md:text-left md:text-white text-base'>
              The world’s banking systems weren’t designed for people
              <br class='hidden md:inlin-block' /> without borders. That’s why
              we’re building a new one.
            </p>

            <div class='flex flex-col'>
              <ul class='mt-6 order-2 md:order-1'>
                <li class='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span class='text-light-blue'>1.</span> Be radically
                  transparent
                </li>
                <li class='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span class='text-light-blue'>2.</span> Charge as little as
                  possible
                </li>
                <li class='text-dark-blue md:text-white text-base pb-2 font-bold'>
                  <span class='text-light-blue'>3.</span> Make premium the new
                  normal
                </li>
              </ul>

              <button class='order-1 block md:w-1/2 md:order-2 bg-transparent border border-light-blue rounded px-6 py-2 text-light-blue hover:bg-light-blue mt-6 hover:text-white font-semibold'>
                Find out more
              </button>
            </div>
          </div>

          <div class='w-full mt-10 md:mt-0 md:w-48%'>
            {/* <img src='./assets/mwb.JPG' alt='' class='w-full' /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoneyWithoutBorders
