import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Experiences = ({ experiences }) => {
	return (
		<section className='mt-52 px-16'>
			<div className='space-y-6 mx-auto md:w-1/2'>
				<h1 className='text-center text-4xl font-extrabold mb-4'>
					Come and Enjoy a one of a kind experience
				</h1>
				<p className='text-gray-500 text-center'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div className='flex flex-wrap justify-evenly items-center mt-8'>
				{experiences.map((experience) => (
					<div key={experience.id} className='w-96 flex my-10 space-x-6'>
						<img src={experience.img} alt='' className='size-24 w-36 rounded-full' />
						<div className='space-y-3'>
							<h1 className='text-3xl font-semibold'>{experience.title}</h1>
							<p className='text-gray-500'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				))}
				<div className='flex justify-center flex-wrap space-x-4 mt-10'>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:bg-red-600  hover:-top-1'
					>
						Explore rooms
					</NavLink>
					<NavLink
						to='/about'
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-6 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
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
