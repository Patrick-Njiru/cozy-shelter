import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const OurUniqueness = ({ uniqueness }) => {
	return (
		<section className='mt-28 bg-neutral-50'>
			<div className='px-16 pt-40 flex items-center space-x-6 relative'>
				<div className='w-3/5 flex flex-wrap justify-evenly items-start'>
					{uniqueness.map((img, i) =>
						i == 0 ? (
							<img
								src={img}
								key={i}
								alt='cabin'
								className='w-80 h-[360px] rounded-2xl mb-4'
							/>
						) : i == 1 ? (
							<img src={img} key={i} alt='cabin' className='w-80 h-60 rounded-2xl' />
						) : i == 2 ? (
							<img src={img} key={i} alt='cabin' className='w-80 h-80 rounded-2xl' />
						) : (
							<img
								key={i}
								src={img}
								alt='cabin'
								className='w-80 h-[435px] rounded-2xl relative -top-28'
							/>
						)
					)}
				</div>
				<div className='w-2/5 space-y-6'>
					<h1 className='text-4xl font-extrabold'>What makes use different?</h1>
					<p className='text-gray-500 text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel quo quae
						ipsam esse voluptates quia eos molestias, odio nam.
						<span className='block h-0.5 w-full bg-gray-200 my-10'></span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, excepturi
						unde amet dolor a rerum veniam fugit quisquam architecto officia, nihil qui
						maiores doloremque tempore obcaecati veritatis aut placeat eveniet
						consectetur possimus earum totam hic.
					</p>
					<NavLink
						to='/about'
						className='block mt-16 transition-all duration-500 ease-in-out bg-white px-10 py-6 text-lg font-medium w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
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
