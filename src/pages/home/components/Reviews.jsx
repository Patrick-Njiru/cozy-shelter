import PropTypes from "prop-types"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { ReviewCard } from "../../../components"
import { handleSlide } from "../../../utils"

const Reviews = ({ reviews }) => {
	return (
		<section className='mt-40 sm:mt-52'>
			<div className='px-6 mx-auto space-y-6 mb-8 sm:px-10 md:px-16 lg:w-3/5'>
				<h1 className='text-center font-black text-3xl sm:text-4xl md:text-5xl'>
					What out past clients say
				</h1>
				<p className='text-gray-500 text-center font-medium'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div
				id='scroll-container-2'
				className='max-w-screen overflow-x-scroll flex items-center justify-start mt-8 px-6 sm:px-10 md:px-16'
			>
				{reviews.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</div>
			<div className='relative w-full px-6 top-[-400px] lg:-top-72 flex justify-between sm:px-10 md:px-16'>
				<button
					type="button"
					to='/book'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:p-4'
					onClick={() => handleSlide("left", "reviews")}
				>
					<BsArrowLeft />
				</button>
				<button
					type="button"
					to='/book'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:p-4'
					onClick={() => handleSlide("right", "reviews")}
				>
					<BsArrowRight />
				</button>
			</div>
			<div className='flex flex-wrap justify-center space-x-4 mt-10 px-6 sm:px-10 sm:space-x-6 sm:space-y-0 md:px-16'>
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
