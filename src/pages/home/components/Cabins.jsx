import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { handleSlide } from "../../../utils"
import { CabinCard } from "../../../components"

const Cabins = ({ cabins }) => {
	const [leftClicks, setLeftClicks] = useState(6)
	const [rightClicks, setRightClicks] = useState(0)

	return (
		<section className='mt-16 sm:mt-28'>
			<div className='show-on-scroll flex flex-col space-y-6 justify-between flex-wrap px-6 sm:px-10 sm:flex-row sm:space-y-0 sm:space-x-6 sm:items-center md:px-16'>
				<h1 className='font-black text- text-2xl sm:text-3xl md:text-4xl'>
					Explore our cabins
				</h1>
				<Link
					to='rooms'
					className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
				>
					Browse All
				</Link>
			</div>
			<div
				id='cabins-scroll-container'
				className='show-on-scroll transition-all duration-1000 ease-in-out max-w-screen overflow-x-scroll flex items-center justify-start pt-8 px-6 sm:px-10 md:px-16'
			>
				{cabins.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} page='home' />
				))}
			</div>
			<div className='show-on-scroll relative px-5 w-full flex justify-between top-[-370px] sm:px-9 md:px-12'>
				<button
					type='button'
					className={
						leftClicks == 6
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:scale-95 hover:bg-red-600 sm:text-3xl"
					}
					onClick={() => handleSlide("left", "cabins", setLeftClicks, setRightClicks)}
				>
					<BsArrowLeft />
				</button>
				<button
					type='button'
					className={
						rightClicks == 6
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:scale-95 hover:bg-red-600 sm:text-3xl"
					}
					onClick={() => handleSlide("right", "cabins", setRightClicks, setLeftClicks)}
				>
					<BsArrowRight />
				</button>
			</div>
		</section>
	)
}

Cabins.propTypes = { cabins: PropTypes.array.isRequired }

export default Cabins
