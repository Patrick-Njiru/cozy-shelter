import { useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import ReviewCard from "./ReviewCard"
import { handleSlide } from "../../../../utils"
import { Heading } from "../../../../components"

const Reviews = ({ reviews }) => {
	const [leftClicks, setLeftClicks] = useState(2)
	const [rightClicks, setRightClicks] = useState(0)

	return (
		<section className='show-on-scroll mt-40 mb-20 sm:mt-52 sm:mb-24'>
			<Heading title='What out past clients say' />
			<div
				id='reviews-scroll-container'
				className='max-w-screen overflow-x-scroll flex items-center justify-start mt-8 px-6 sm:px-10 md:px-16'
			>
				{reviews.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</div>
			<div className='relative w-full px-6 top-[-400px] lg:-top-72 flex justify-between sm:px-10 md:px-16'>
				<button
					type='button'
					className={
						leftClicks == 2
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:scale-95"
					}
					onClick={() => handleSlide("left", "reviews", setLeftClicks, setRightClicks)}
				>
					<BsArrowLeft />
				</button>
				<button
					type='button'
					className={
						rightClicks == 2
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:scale-95"
					}
					onClick={() => handleSlide("right", "reviews", setRightClicks, setLeftClicks)}
				>
					<BsArrowRight />
				</button>
			</div>
			<div className='show-on-scroll flex flex-wrap justify-center space-x-4 mt-10 px-6 sm:px-10 sm:space-x-6 sm:space-y-0 md:px-16'>
				<NavLink
					to='/book'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4  mb-6  text-lg font-bold w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1 sm:px-10 sm:py-6 sm:mb-0'
				>
					Book now
				</NavLink>
				<NavLink
					to='/rooms'
					className='inline transition-all duration-500 ease-in-out bg-inherit text-black px-7 py-4 mb-6 text-lg w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6 sm:mb-0'
				>
					Explore Cabins
				</NavLink>
			</div>
		</section>
	)
}

Reviews.propTypes = { reviews: PropTypes.array.isRequired }

export default Reviews
