import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import CabinCard from "../../../components/CabinCard"
import { handleScroll } from "../../../functions/handleScroll"

const Cabins = ({ cabins }) => {
	return (
		<section className='mt-28'>
			<div className='flex justify-between flex-wrap items-center px-16'>
				<h1 className='font-extrabold text-4xl'>Explore our cabins</h1>
				<NavLink
					to='/rooms'
					className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-7 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
				>
					Browse All
				</NavLink>
			</div>
			<div
				id='scroll-container'
				className='transition-all duration-1000 ease-in-out max-w-screen overflow-hidden h-fit flex items-center justify-start pt-8 ps-16'
			>
				{cabins.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} />
				))}
			</div>
			<div className='absolute start-[3rem] end-[3rem] top-[1660px]  flex items-center justify-between'>
				<button
					id='cabin-scroll-left'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:p-4 disabled:bg-gray-400 disabled:hover:p-5 disabled:cursor-not-allowed'
					onClick={() => handleScroll("left", "cabins")}
				>
					<BsArrowLeft />
				</button>
				<button
					id='cabin-scroll-right'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:p-4 disabled:bg-gray-400 disabled:hover:p-5 disabled:cursor-not-allowed'
					onClick={() => handleScroll("right", "cabins")}
				>
					<BsArrowRight />
				</button>
			</div>
		</section>
	)
}

Cabins.propTypes = { cabins: PropTypes.array.isRequired }

export default Cabins
