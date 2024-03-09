import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Activities = ({ activities }) => {
	return (
		<section className='mt-52 px-16'>
			<div className='mx-auto space-y-6 mb-8 md:w-1/2'>
				<h1 className='text-center text-4xl font-extrabold'>Explore our activities</h1>
				<p className='text-gray-500 text-center font-medium'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
					deleniti distinctio placeat temporibus!
				</p>
			</div>
			<div className='flex flex-wrap space-x-4 justify-evenly items-center text-white'>
				{activities.map((activity) => (
					<div
						key={activity.id}
						className='w-96 flex flex-col justify-end rounded-3xl'
						style={{
							background: `rgba(0,0,0,0.3) url(${activity.img}) no-repeat`,
							backgroundSize: "100% auto",
						}}
					>
						<div className='my-48'></div>
						<div className='space-y-3 mb-10 px-8'>
							<h1 className='text-4xl font-bold'>{activity.title}</h1>
							<p className='font-boold'>
								Sagittis, facilisis mauris sed vitae habitant dolor sit.
							</p>
						</div>
					</div>
				))}
			</div>
			<NavLink
				to='/activities'
				className='block mt-16 mx-auto transition-all duration-500 ease-in-out bg-white px-10 py-6 text-lg font-medium w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
			>
				More activities
			</NavLink>
		</section>
	)
}

Activities.propTypes = { activities: PropTypes.array.isRequired }

export default Activities
