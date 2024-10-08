import PropTypes from "prop-types"
import { BiBath, BiBed } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { Link } from "react-router-dom"

const About = ({ guests, bedrooms, amenities }) => {
	return (
		<div id='room-about' className='leading-loose space-y-6 w-full lg:w-3/5'>
			<div className='show-on-scroll flex items-center flex-wrap space-x-4 mb-6'>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BsPerson className='text-2xl' />
					<p>{guests}</p>
				</div>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BiBed className='text-2xl' />
					<p>{bedrooms}</p>
				</div>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BiBath className='text-2xl' />
					<p>2 Bathrooms</p>
				</div>
			</div>
			<h1 className='show-on-scroll text- text-2xl sm:text-3xl md:text-4xl font-bold'>
				About the cabin
			</h1>
			<p className='show-on-scroll'>
				Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor
				amet, nascetur quam ornare proin platea diam amet sed fringilla.
			</p>
			<div className='show-on-scroll'>
				<li>Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.</li>
				<li>Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.</li>
				<li>Porta lorem mollis aliquam ut porttitor leo a diam.</li>
				<li>Pellentesque elit eget gravida cum sociis natoque penatibus et magni.</li>
			</div>
			<p className='show-on-scroll'>
				Pulvinar mattis nunc sed blandit libero cursus turpis massa tincidunt dui ut tellus
				molestie nunc non blandit massa enim nec dui nunc netus et malesuada fames aliquam
				vestibulum morbi blandit cursus risus at ultrices mi tempus scelerisque purus semper
				eget duis at tellus in mollis nunc sed id semper risus.
			</p>
			<p className='show-on-scroll'>
				Tempus quam pellentesque nec nam aliquam sem et tortor duis convallis convallis
				tellus id interdum sit amet nisl purus in mollis nulla facilisi morbi tempus iaculis
				urna id volutpat tincidunt vitae semper quis lectus nulla.
			</p>
			{/* Amenities */}
			<h1
				className='show-on-scroll text- text-2xl sm:text-3xl md:text-4xl 
      font-bold'
			>
				Room Amenities
			</h1>
			<div className='show-on-scroll flex flex-wrap min-w-[300px]'>
				{amenities.map((amenity) => (
					<Link
						to={`/amenities/${amenity.id || 1}/rooms-with-amenity`}
						key={amenity.id}
						className='flex space-x-6 w-1/2 md:w-1/3 my-6 text-lg text-gray-600 cursor-pointer'
					>
						<img src={amenity.img} alt={amenity.title} />
						<p>{amenity.title}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

About.propTypes = {
	guests: PropTypes.string.isRequired,
	bedrooms: PropTypes.string.isRequired,
	amenities: PropTypes.array.isRequired,
}

export default About
