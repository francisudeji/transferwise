import Slider from 'react-slick'
import { FaPlay } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

function LongStoryPeople() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className='flex justify-center items-center mx-auto text-center mt-12'>
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`rounded-full bg-gray-500 flex items-center justify-center h-5 w-5 text-red-500 mx-2`}
      ></div>
    )
  }

  return (
    <section className='bg-gray-200'>
      <div className='container mx-auto px-2 py-16'>
        <h2 className='text-dark-blue font-bold text-center text-3xl lg:text-5xl'>
          For{' '}
          <span className='text-one-time-blue'>where’s home? Long story</span>{' '}
          people.
        </h2>
        <Slider {...settings}>
          <div className='slider mt-4 w-full relative'>
            <div className='slide mt-6'>
              <img
                className='relative md:w-3/4 lg:h-144 lg:object-cover lg:background-cover lg:w-1/2'
                src='/static/slide1.jpg'
                alt=''
              />
              <div className='bg-dark-blue relative p-6 md:z-10 md:w-3/4 md:-mt-40 md:ml-auto md:py-24 md:px-16 lg:w-1/2 lg:-mt-128 lg:mr-16'>
                <h2 className='text-white text-2xl font-semibold md:text-3xl md:font-bold'>
                  I’ve probably saved two or three thousand dollars, and I’ll
                  continue to save as I continue to use it.
                </h2>
                <p className='text-base text-white mt-4 font-semibold'>
                  Sophie, Sydney, Australia
                </p>
                <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mt-3'>
                  <span className='hidden sm:flex h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                    <FaPlay className='text-dark-blue text-xs' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3'>
                    See Sophie's story
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='slider mt-4 w-full relative'>
            <div className='slide mt-6'>
              <img
                className='relative md:w-3/4 lg:h-144 lg:object-cover lg:background-cover lg:w-1/2'
                src='/static/slide2.jpg'
                alt=''
              />
              <div className='bg-dark-blue relative p-6 md:z-10 md:w-3/4 md:-mt-40 md:ml-auto md:py-24 md:px-16 lg:w-1/2 lg:-mt-128 lg:mr-16'>
                <h2 className='text-white text-2xl font-semibold md:text-3xl md:font-bold'>
                  I’ve probably saved two or three thousand dollars, and I’ll
                  continue to save as I continue to use it.
                </h2>
                <p className='text-base text-white mt-4 font-semibold'>
                  Sophie, Sydney, Australia
                </p>
                <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mt-3'>
                  <span className='hidden sm:flex h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                    <FaPlay className='text-dark-blue text-xs' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3'>
                    See Sophie's story
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='slider mt-4 w-full relative'>
            <div className='slide mt-6'>
              <img
                className='relative md:w-3/4 lg:h-144 lg:object-cover lg:background-cover lg:w-1/2'
                src='/static/slide3.jpg'
                alt=''
              />
              <div className='bg-dark-blue relative p-6 md:z-10 md:w-3/4 md:-mt-40 md:ml-auto md:py-24 md:px-16 lg:w-1/2 lg:-mt-128 lg:mr-16'>
                <h2 className='text-white text-2xl font-semibold md:text-3xl md:font-bold'>
                  I’ve probably saved two or three thousand dollars, and I’ll
                  continue to save as I continue to use it.
                </h2>
                <p className='text-base text-white mt-4 font-semibold'>
                  Sophie, Sydney, Australia
                </p>
                <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mt-3'>
                  <span className='hidden sm:flex h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                    <FaPlay className='text-dark-blue text-xs' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3'>
                    See Sophie's story
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='slider mt-4 w-full relative'>
            <div className='slide mt-6'>
              <img
                className='relative md:w-3/4 lg:h-144 lg:object-cover lg:background-cover lg:w-1/2'
                src='/static/slide4.jpg'
                alt=''
              />
              <div className='bg-dark-blue relative p-6 md:z-10 md:w-3/4 md:-mt-40 md:ml-auto md:py-24 md:px-16 lg:w-1/2 lg:-mt-128 lg:mr-16'>
                <h2 className='text-white text-2xl font-semibold md:text-3xl md:font-bold'>
                  I’ve probably saved two or three thousand dollars, and I’ll
                  continue to save as I continue to use it.
                </h2>
                <p className='text-base text-white mt-4 font-semibold'>
                  Sophie, Sydney, Australia
                </p>
                <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mt-3'>
                  <span className='hidden sm:flex h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                    <FaPlay className='text-dark-blue text-xs' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3'>
                    See Sophie's story
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='slider mt-4 w-full relative'>
            <div className='slide mt-6'>
              <img
                className='relative md:w-3/4 lg:h-144 lg:object-cover lg:background-cover lg:w-1/2'
                src='/static/slide5.jpg'
                alt=''
              />
              <div className='bg-dark-blue relative p-6 md:z-10 md:w-3/4 md:-mt-40 md:ml-auto md:py-24 md:px-16 lg:w-1/2 lg:-mt-128 lg:mr-16'>
                <h2 className='text-white text-2xl font-semibold md:text-3xl md:font-bold'>
                  I’ve probably saved two or three thousand dollars, and I’ll
                  continue to save as I continue to use it.
                </h2>
                <p className='text-base text-white mt-4 font-semibold'>
                  Sophie, Sydney, Australia
                </p>
                <button className='flex items-center px-6 py-2 bg-transparent border border-light-blue mt-3'>
                  <span className='hidden sm:flex h-8 w-8 flex items-center justify-center text-center rounded-full bg-light-blue'>
                    <FaPlay className='text-dark-blue text-xs' />
                  </span>
                  <span className='text-light-blue text-lg font-semibold ml-3'>
                    See Sophie's story
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Slider>
        <article class='mt-12'>
          <div class='text-center'>
            <h3 class='text-dark-blue px-6 font-bold text-xl md:text-3xl'>
              TrustPilot score 9.1 out of 10, from 71,470 reviews
              <span class='text-blue-400'>.</span>
            </h3>
            <p class='text-dark-blue text-base mt-4 md:text-lg'>
              It’s your money. You can trust us to get it where it needs to be,
              but don’t take our word for it. Read our reviews at
              <span className='text-light-blue'>Trustpilot.com.</span>
            </p>
          </div>

          <div class='row flex flex-col md:flex-row flex-wrap justify-between mt-16'>
            <a class='mb-10 md:mb-0 w-full md:w-31%'>
              <svg
                class='mx-auto mb-6 tw-testimonial__rating'
                width='96'
                height='16'
              >
                <defs>
                  <clipPath id='horizClip100-5d672975f0186906181cb296'>
                    <rect x='0' y='0' width='100%' height='16'></rect>
                  </clipPath>
                </defs>
                <g clip-path='url(#horizClip100-5d672975f0186906181cb296)'>
                  <path
                    transform='translate(0, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(20, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(40, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(60, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(80, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                </g>
              </svg>
              <h3 class='text-dark-blue px-6 text-base md:text-lg font-bold text-center md:px-0'>
                Love the transparency, low fees, speed and ease of use.
              </h3>
              <p class='text-dark-blue text-sm font-bold text-center mt-4'>
                AWick
              </p>
              <small class='text-timestamp-blue block font-semibold text-sm text-center'>
                Published 4 hours ago
              </small>
            </a>
            <a class='mb-10 md:mb-0 w-full md:w-31%'>
              <svg
                class='mx-auto mb-6 tw-testimonial__rating'
                width='96'
                height='16'
              >
                <defs>
                  <clipPath id='horizClip100-5d672975f0186906181cb296'>
                    <rect x='0' y='0' width='100%' height='16'></rect>
                  </clipPath>
                </defs>
                <g clip-path='url(#horizClip100-5d672975f0186906181cb296)'>
                  <path
                    transform='translate(0, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(20, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(40, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(60, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(80, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                </g>
              </svg>
              <h3 class='text-dark-blue px-6 text-base md:text-lg font-bold text-center md:px-0'>
                Very fast and efficient. Reasonable rates compared to other
                platforms but yet offers the fastest transfer in…
              </h3>
              <p class='text-dark-blue text-sm font-bold text-center mt-4'>
                YONG LOONG TAN
              </p>
              <small class='text-timestamp-blue block font-semibold text-sm text-center'>
                Published 4 hours ago
              </small>
            </a>
            <a class='mb-10 md:mb-0 w-full md:w-31%'>
              <svg
                class='mx-auto mb-6 tw-testimonial__rating'
                width='96'
                height='16'
              >
                <defs>
                  <clipPath id='horizClip100-5d672975f0186906181cb296'>
                    <rect x='0' y='0' width='100%' height='16'></rect>
                  </clipPath>
                </defs>
                <g clip-path='url(#horizClip100-5d672975f0186906181cb296)'>
                  <path
                    transform='translate(0, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(20, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(40, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(60, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                  <path
                    transform='translate(80, 0)'
                    fill='#ffb600'
                    fill-rule='evenodd'
                    d='M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z'
                  ></path>
                </g>
              </svg>
              <h3 class='text-dark-blue px-6 text-base md:text-lg font-bold text-center md:px-0'>
                Finally the 21st century comes to wire transfers!! No more
                wasting time at bank branches!
              </h3>
              <p class='text-dark-blue text-sm font-bold text-center mt-4'>
                AMJ
              </p>
              <small class='text-timestamp-blue block font-semibold text-sm text-center'>
                Published 7 hours ago
              </small>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default LongStoryPeople
