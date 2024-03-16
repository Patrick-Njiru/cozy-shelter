import PropTypes from "prop-types"

const OurStory = ({pics}) => {
	return (
		<section className='bg-neutral-50 space-y-10 mt-20 py-20 px-6 sm:px-10 md:px-16 sm:py-40 sm:mt-40'>
			<div className='flex flex-col space-y-8 justify-between items-center md:flex-row md:space-y-0'>
				<div className='md:w-[45%] space-y-6'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl font-black'>How we started</h1>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis
						placeat aliquam inventore magni et possimus reiciendis repellat atque error
						nam molestias, eius in minima ut sunt expedita odio sit assumenda. Rerum
						esse id dolores cupiditate suscipit atque, quas porro, magnam doloribus
						autem aspernatur iste. Adipisci aliquid, placeat quibusdam accusamus
						incidunt voluptatum sit.
					</p>
				</div>
				<div className='md:w-[45%] space-y-6'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl font-black'>Our Story</h1>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis
						placeat aliquam inventore magni et possimus reiciendis repellat atque error
						nam molestias, eius in minima ut sunt expedita odio sit assumenda. Rerum
						esse id dolores cupiditate suscipit atque, quas porro, magnam doloribus
						autem aspernatur iste. Adipisci aliquid, placeat quibusdam accusamus
						incidunt voluptatum sit.
					</p>
				</div>
			</div>
			<div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6'>
				<img
					src={pics[0]}
					alt='our-story-1'
					className='rounded-xl sm:w-[42%]'
				/>
				<div className='space-y-6 sm:w-[55%]'>
					<div className='flex justify-between'>
						<img
							src={pics[1]}
							alt='our-story-2'
							className='w-[48%] rounded-xl'
						/>
						<img
							src={pics[2]}
							alt='our-story-3'
							className='w-[48%] rounded-xl'
						/>
					</div>
					<img src={pics[3]} alt='our-story-4' className='rounded-xl' />
				</div>
			</div>
		</section>
	)
}

OurStory.propTypes = { pics: PropTypes.array.isRequired}


export default OurStory
