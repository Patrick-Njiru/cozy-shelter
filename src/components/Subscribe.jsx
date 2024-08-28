import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { redBg } from "../data/home"

const Subscribe = ({ purpose }) => {
	const type = purpose || "primary"

	return (
		<section className='show-on-scroll mt-40 px-6 text-white sm:mt-52 sm:px-10 md:px-16'>
			<div
				className='bg-gradient-to-b from-red-600 to bg-red-700 rounded-3xl p-8 sm:p-16 lg:p-24'
				style={{
					background: `url(${redBg}) no-repeat`,
					backgroundSize: "cover",
				}}
			>
				{type == "primary" ? (
					<div className='space-y-10 lg:w-3/5'>
						<h1 className='font-black text-3xl sm:text-4xl md:text-5xl'>
							Subscribe to our email newsletter for explorers!
						</h1>
						<div className='relative flex flex-col items-center space-y-4 sm:space-y-0 sm:block'>
							<input
								type='text'
								placeholder='Email address'
								className='transition-all duration-500 ease-in-out w-full ps-7 outline-none rounded-full text-gray-600 h-16 hover:scale-[99.5%] sm:h-[86px]'
							/>
							<button className='transition-all duration-500 ease-in-out relative bg-white text-rose-500 w-full inline px-7 py-4 text-lg font-semibold border rounded-full top-1 shadow-md hover:top-0 sm:absolute sm:bg-rose-500 sm:hover:bg-rose-600 sm:text-white sm:px-10 sm:py-6 sm:end-[0.5rem] sm:w-fit'>
								Subscribe
							</button>
						</div>
					</div>
				) : (
					<div className='space-y-6 lg:w-3/5'>
						<h1 className='font-black text-3xl sm:text-4xl md:text-5xl'>
							Recharge your energies in one of our forest cabins
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
							tempore omnis repudiandae facilis voluptatum, atque, corporis esse culpa
							veritatis hic sit dolore similique ullam harum.
						</p>
						<div className='flex flex-col space-y-6 justify-center items-center sm:flex-row sm:space-x-4 sm:space-y-0'>
							<Link
								to='/rooms'
								className='inline transition-all duration-500 ease-in-out bg-white text-red-600 px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 hover:text-black hover:-top-1 sm:px-10 sm:py-6'
							>
								Explore rooms
							</Link>
							<Link
								to='/about'
								className='inline transition-all duration-500 ease-in-out bg-inherit text-white px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-white hover:text-black hover:-top-1 sm:px-10 sm:py-6'
							>
								About us
							</Link>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

Subscribe.propTypes = { purpose: PropTypes.string }

export default Subscribe
