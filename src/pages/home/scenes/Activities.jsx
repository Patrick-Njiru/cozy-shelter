import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Activities = ({ activities }) => {
	return (
		<section className='mt-40 px-6 sm:px-10 sm:mt-52 md:px-16'>
			<div className='mx-auto space-y-6 mb-8 lg:w-3/5'>
				<h1 className='text-center font-black text-3xl sm:text-4xl md:text-5xl'>Explore our activities</h1>
				<p className='text-gray-500 text-center font-medium'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div className='flex flex-wrap space-x-4 justify-evenly items-center text-white'>
				{activities.map((activity) => (
					<div
						key={activity.id}
						className='w-96 flex flex-col justify-end rounded-3xl bg-blend-darken my-6'
						style={{
							background: `rgba(0,0,0,0.3) url(${activity.img}) no-repeat`,
							backgroundSize: "cover",
						}}
					>
						<div className='my-36 md:my-48'></div>
						<div className='space-y-3 mb-10 px-8'>
							<h1 className='font-extrabold text-2xl sm:text-3xl md:text-4xl'>{activity.title}</h1>
							<p className='font-boold'>
								Sagittis, facilisis mauris sed vitae habitant dolor sit.
							</p>
						</div>
					</div>
				))}
			</div>
			<NavLink
				to='/activities'
				className='block mt-16 mx-auto transition-all duration-500 ease-in-out bg-white  text-lg font-medium w-fit rounded-full relative top-0 border py-4 px-7 hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
			>
				More activities
			</NavLink>
		</section>
	)
}

Activities.propTypes = { activities: PropTypes.array.isRequired }

export default Activities
