import PropTypes from "prop-types"
import { handleScroll } from "../../../functions/handleScroll"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { ReviewCard } from "../../../components"

const Reviews = ({ reviews }) => {
	return (
		<section className='mt-52'>
			<div className='mx-auto space-y-6 mb-8 md:w-1/2'>
				<h1 className='text-center text-4xl font-extrabold'>What out past clients say</h1>
				<p className='text-gray-500 text-center font-medium'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div
				id='scroll-container-2'
				className='reviews relative overflow-scroll h-fit flex items-center justify-start pt-8 ps-16'
			>
				{reviews.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</div>
			<div className='relative px-12 -top-72 flex items-center justify-between space-x-96'>
				<button
					to='/book'
					className='inline me-96 transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:p-4'
					onClick={() => handleScroll("left", "reviews")}
				>
					<BsArrowLeft />
				</button>
				<button
					to='/book'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:p-4'
					onClick={() => handleScroll("right", "reviews")}
				>
					<BsArrowRight />
				</button>
			</div>
			<div className='flex flex-wrap justify-center space-x-4 mt-10'>
				<NavLink
					to='/book'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1'
				>
					Book now
				</NavLink>
				<NavLink
					to='/rooms'
					className='inline transition-all duration-500 ease-in-out bg-inherit text-black px-10 py-6 text-lg w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
				>
					Explore Cabins
				</NavLink>
			</div>
		</section>
	)
}

Reviews.propTypes = { reviews: PropTypes.array.isRequired }

export default Reviews
