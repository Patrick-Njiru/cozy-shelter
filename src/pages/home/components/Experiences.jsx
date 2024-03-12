import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { FeaturesShortDescription } from "../../../components"

const Experiences = ({ experiences }) => {
	return (
		<section className='mt-32 px-6 sm:mt-52 sm:px-10 md:px-16'>
			<div className='space-y-6 mx-auto lg:w-3/5 xl:w-1/2'>
				<h1 className='text-center text-3xl font-black sm:text-4xl md:text-5xl'>
					Come and Enjoy a one of a kind experience
				</h1>
				<p className='text-gray-500 text-center'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div className='flex flex-wrap justify-evenly items-center mt-6'>
				<FeaturesShortDescription features={experiences} page='home' />
				<div className='flex justify-center flex-wrap space-x-4 mt-10'>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4 font-bold w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1 sm:text-lg sm:px-10 sm:py-6'
					>
						Explore rooms
					</NavLink>
					<NavLink
						to='/about'
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-7 py-4 font-semibold w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1 sm:text-lg sm:px-10 sm:py-6'
					>
						About us
					</NavLink>
				</div>
			</div>
		</section>
	)
}

Experiences.propTypes = { experiences: PropTypes.array.isRequired }

export default Experiences