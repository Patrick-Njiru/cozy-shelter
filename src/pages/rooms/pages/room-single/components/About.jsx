import { BiBath, BiBed } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { roomsData } from "../../../../../data"

const About = () => {
	return (
		<div id="room-about" className='leading-loose space-y-6 w-full lg:w-3/5'>
			<div className='flex items-center flex-wrap space-x-4 mb-6'>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BsPerson className='text-2xl' />
					<p>8 Guests</p>
				</div>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BiBed className='text-2xl' />
					<p>4 Bedrooms</p>
				</div>
				<div className='flex items-center text-lg space-x-3 border p-4 rounded-full my-4'>
					<BiBath className='text-2xl' />
					<p>2 Bathrooms</p>
				</div>
			</div>
			<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>About the cabin</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor
				amet, nascetur quam ornare proin platea diam amet sed fringilla.
			</p>
			<div>
				<li>Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.</li>
				<li>Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.</li>
				<li>Porta lorem mollis aliquam ut porttitor leo a diam.</li>
				<li>Pellentesque elit eget gravida cum sociis natoque penatibus et magni.</li>
			</div>
			<p>
				Pulvinar mattis nunc sed blandit libero cursus turpis massa tincidunt dui ut tellus
				molestie nunc non blandit massa enim nec dui nunc netus et malesuada fames aliquam
				vestibulum morbi blandit cursus risus at ultrices mi tempus scelerisque purus semper
				eget duis at tellus in mollis nunc sed id semper risus.
			</p>
			<p>
				Tempus quam pellentesque nec nam aliquam sem et tortor duis convallis convallis
				tellus id interdum sit amet nisl purus in mollis nulla facilisi morbi tempus iaculis
				urna id volutpat tincidunt vitae semper quis lectus nulla.
			</p>
			{/* Amenities */}
			<h1
				className='text-2xl sm:text-3xl md:text-4xl 
      font-bold'
			>
				Room Amenities
			</h1>
			<div className='flex flex-wrap min-w-[300px]'>
				{Object.entries(roomsData.roomSingle.amenities).map((entry) => (
					<div
						key={entry[0]}
						className='flex space-x-6 w-1/2 md:w-1/3 my-6 text-lg text-gray-600'
					>
						<img src={entry[1]} alt={entry[0]} />
						<p>{entry[0]}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default About
