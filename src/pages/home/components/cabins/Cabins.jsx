import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import CabinCard from "./CabinCard"
import { handleSlide } from "../../../../utils"

const Cabins = ({ cabins }) => {
	return (
		<section className='mt-16 sm:mt-28'>
			<div className='flex flex-col space-y-6 justify-between flex-wrap px-6 sm:px-10 sm:flex-row sm:space-y-0 sm:space-x-6 sm:items-center md:px-16'>
				<h1 className='font-black text-3xl sm:text-4xl md:text-5xl'>Explore our cabins</h1>
				<NavLink
					to='/rooms'
					className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
				>
					Browse All
				</NavLink>
			</div>
			<div
				id='scroll-container'
				className='transition-all duration-1000 ease-in-out max-w-screen overflow-x-scroll flex items-center justify-start pt-8 px-6 sm:px-10 md:px-16'
			>
				{cabins.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} />
				))}
			</div>
			<div className='relative px-5 w-full flex justify-between top-[-370px] sm:px-9 md:px-12'>
				<button
					type="button"
					id='cabin-scroll-left'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:bg-red-600 sm:text-3xl'
					onClick={() => handleSlide("left", "cabins")}
				>
					<BsArrowLeft />
				</button>
				<button
					type="button"
					id='cabin-scroll-right'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:bg-red-600 sm:text-3xl'
					onClick={() => handleSlide("right", "cabins")}
				>
					<BsArrowRight />
				</button>
			</div>
		</section>
	)
}

Cabins.propTypes = { cabins: PropTypes.array.isRequired }

export default Cabins