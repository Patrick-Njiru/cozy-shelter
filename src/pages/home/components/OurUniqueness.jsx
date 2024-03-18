import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const OurUniqueness = ({ uniqueness }) => {
	return (
		<section className='show-on-scroll mt-20 py-20 px-6 bg-neutral-50 bg-opacity-50 sm:py-40 sm:px-10 sm:mt-40 md:px-16'>
			<div className='flex space-y-6 flex-col-reverse items-center lg:space-x-10 lg:space-y-0 lg:flex-row'>
				<div className='mt-8 w-full flex space-x-4 lg:mt-0 lg:w-[50vw]'>
					<div className='flex flex-col space-y-4 w-1/2'>
						<img
							src={uniqueness[0]}
							alt='what makes us different'
							className='show-on-scroll rounded-2xl lg:h-[53vh]'
						/>
						<img
							src={uniqueness[2]}
							alt='what makes us different'
							className='show-on-scroll rounded-2xl lg:h-[47vh]'
						/>
					</div>
					<div className='flex flex-col space-y-4 w-1/2'>
						<img
							src={uniqueness[1]}
							alt='what makes us different'
							className='show-on-scroll rounded-2xl lg:h-[40vh]'
						/>
						<img
							src={uniqueness[3]}
							alt='what makes us different'
							className='show-on-scroll rounded-2xl lg:h-[60vh]'
						/>
					</div>
				</div>
				<div className='space-y-6 lg:w-[40vw]'>
					<h1 className='show-on-scroll font-black text-zinc-700 text-2xl sm:text-3xl md:text-4xl'>
						What makes us different?
					</h1>
					<p className='show-on-scroll text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt
						inventore quam reiciendis fugiat autem exercitationem, ab alias, nulla rerum
						aperiam, ea mollitia veritatis sed.
						<span className='block h-0.5 w-full bg-gray-200 my-10'></span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa id
						corporis esse rerum minima libero perspiciatis voluptatibus odit quibusdam
						quisquam quia, culpa provident quo, maiores aspernatur dolore delectus sit.
						Sequi quo tempore ut inventore nobis commodi delectus!
					</p>
					<NavLink
						to='/about'
						className='show-on-scroll block transition-all duration-500 ease-in-out bg-white text-lg font-medium w-fit rounded-full relative top-0 border px-7 py-4 hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
					>
						About us
					</NavLink>
				</div>
			</div>
		</section>
	)
}

OurUniqueness.propTypes = { uniqueness: PropTypes.array.isRequired }

export default OurUniqueness
