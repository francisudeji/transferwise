import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function TrustedAllOverTheWorld() {
	const mapboxApiAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
	const viewport = {
		width: '100%',
		height: '650px',
		latitude: 0,
		longitude: 0,
		zoom: 1,
	};

	const [selectedPlace, setSelectedPlace] = useState(null);

	const places = [
		{ name: 'India', latitude: 20.5937, longitude: 78.9629 },
		{ name: 'Europe', latitude: 54.526, longitude: 15.2551 },
		{ name: 'South Korea', latitude: 35.9078, longitude: 127.7669 },
		{ name: 'Ukraine', latitude: 48.3794, longitude: 31.1656 },
		{ name: 'United States', latitude: 37.0902, longitude: -95.7129 },
		{ name: 'Sweden', latitude: 60.1282, longitude: 18.6435 },
		{ name: 'Hungary', latitude: 47.1625, longitude: 19.5033 },
		{ name: 'United Kingdom', latitude: 55.3781, longitude: 3.436 },
	];

	useEffect(() => {
		let interval;
		const randomize = () => {
			interval = setInterval(
				() =>
					setSelectedPlace(places[Math.floor(Math.random() * places.length)]),
				7000
			);
		};

		randomize();

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='bg-dark-blue'>
			<div className='container px-4 py-12 mx-auto'>
				<h2 className='text-3xl font-bold text-center text-white md:text-4xl'>
					Trusted all over the world<span className='text-light-blue'>.</span>
				</h2>
				<p className='px-8 mt-2 text-base text-center text-white md:text-lg'>
					We move over £4 billion every month, and save people and businesses £4
					million in hidden fees every day.
				</p>
				<div className='mt-16 offices md:flex md:justify-between'>
					<div className='mb-3 md:w-1/2 lg:w-23%'>
						<h2 className='text-3xl font-bold text-center text-white md:text-4xl'>
							12 officies
						</h2>
						<p className='px-8 mt-0 text-base text-center text-white md:text-lg'>
							around the world
						</p>
					</div>
					<div className='mb-3 md:w-1/2 lg:w-23%'>
						<h2 className='text-3xl font-bold text-center text-white md:text-4xl'>
							£4 billion
						</h2>
						<p className='px-8 mt-0 text-base text-center text-white md:text-lg'>
							sent every month
						</p>
					</div>
					<div className='mb-3 md:w-1/2 lg:w-23%'>
						<h2 className='text-3xl font-bold text-center text-white md:text-4xl'>
							5 million
						</h2>
						<p className='px-8 mt-0 text-base text-center text-white md:text-lg'>
							customers
						</p>
					</div>
					<div className='mb-3 md:w-1/2 lg:w-23%'>
						<h2 className='text-3xl font-bold text-center text-white md:text-4xl'>
							£1 billion
						</h2>
						<p className='px-8 mt-0 text-base text-center text-white md:text-lg'>
							saved by customers every year
						</p>
					</div>
				</div>
				<ReactMapGL
					{...viewport}
					mapboxApiAccessToken={mapboxApiAccessToken}
					mapStyle='mapbox://styles/desales/ck0tum4zx13un1co6jj5pan74'
				>
					{places.map((p) => (
						<Marker
							key={p.latitude}
							latitude={p.latitude}
							longitude={p.longitude}
						>
							<button
								onClick={(e) => {
									e.preventDefault();
									setSelectedPlace(p);
								}}
								className='w-3 h-3 rounded-full bg-marker-blue'
								aria-labelledby='Map marker'
							></button>
						</Marker>
					))}

					{selectedPlace !== null && (
						<Popup
							latitude={selectedPlace.latitude}
							longitude={selectedPlace.longitude}
							anchor='right'
							closeButton={false}
						>
							<div>
								<span className='block font-bold text-dark-blue'>
									15.25 GBP to {selectedPlace.name}
								</span>
								<span className='block text-xs text-dark-blue'>
									Saved 10.34 GBP
								</span>
							</div>
						</Popup>
					)}
				</ReactMapGL>

				<div className='mt-5 border-t-2 border-dark-blue'>
					<p className='px-8 mt-2 text-base text-center text-white md:text-lg'>
						We’re available in 59 countries, and we add new currencies all the
						time. If you think we should add a specific currency, let us know.
						Be the first to know when we add more by{' '}
						<a href='#' className='underline text-light-blue'>
							signing up to our mailing list
						</a>
					</p>
				</div>
				<div className='flex-wrap justify-between mt-3 countries sm:flex'>
					<a
						href='#'
						className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/europe-flag.jpg' alt='' />
						<span className='ml-6'>Europe</span>
					</a>
					<a
						href='#'
						className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/eng.png' alt='' />
						<span className='ml-6'>United Kingdom</span>
					</a>
					<a
						href='#'
						className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/india.png' alt='' />
						<span className='ml-6'>India</span>
					</a>
					<a
						href='#'
						className='country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/us.png' alt='' />
						<span className='ml-6'>United States</span>
					</a>
					<a
						href='#'
						className='hidden md:flex country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/brazil.jpg' alt='' />
						<span className='ml-6'>Brazil</span>
					</a>
					<a
						href='#'
						className='hidden md:flex country bg-lightest-blue py-4 px-6 rounded flex items-center w-full text-white font-semibold text-lg hover:text-light-blue sm:w-48% md:w-31% mt-3'
					>
						<img className='w-6 h-5' src='/static/australia.png' alt='' />
						<span className='ml-6'>Australia</span>
					</a>
				</div>
				<div className='flex items-center justify-center mt-4 sm:mt-8'>
					<a
						href='#'
						className='block px-6 py-3 text-base text-center border rounded border-light-blue text-light-blue text-bold hover:bg-light-blue hover:text-white'
					>
						See all routes we cover
					</a>
				</div>
			</div>
		</section>
	);
}

export default TrustedAllOverTheWorld;
