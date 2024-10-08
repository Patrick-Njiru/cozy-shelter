import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { BiLocationPlus } from "react-icons/bi"
import { Heading } from "../../../components"
import { locationsImg } from "../../../data/about"

const Locations = ({ locations }) => {
	return (
		<section id='locations' className='px-6 sm:px-10 md:px-16 md:mt-24'>
			<Heading title='Meet our locations' />
			<div className='show-on-scroll flex flex-col justify-between space-y-6 items-center lg:flex-row lg:space-x-4 lg:space-y-0'>
				<div className='space-y-6'>
					{locations.map((location) => (
						<div
							key={location.id}
							className='show-on-scroll space-y-6 p-10 pe-20 border rounded-xl shadow-md sm:w-96 md:w-[27rem] lg:pe-10 lg:w-96'
						>
							<h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>
								{location.title}
							</h1>
							<div className='flex items-start space-x-4'>
								<BiLocationPlus className='text-red-500 w-8 text-xl' />
								<p className='text-gray-600'>{location.address}</p>
							</div>
						</div>
					))}
				</div>
				<img
					src={locationsImg}
					alt='locations'
					className='show-on-scroll lg:w-3/5 xl:w-[65%]'
				/>
			</div>
			<Link
				to='locations'
				className='show-on-scroll block mx-auto mt-20 transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
			>
				More Locations
			</Link>
		</section>
	)
}

Locations.propTypes = { locations: PropTypes.array.isRequired }

export default Locations
