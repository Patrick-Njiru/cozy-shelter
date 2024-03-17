import { NavLink } from "react-router-dom"
import { whiteLogo } from "../../../../../data"

const BookRoom = () => {
	return (
		<div
			id='book-room'
			className='h-fit top-4 bottom-0 rounded-3xl bg-white text-black p-10 px-7 border shadow-2xl text-lg min-w-[300px] lg:sticky lg:w-[35%] xl:px-10'
		>
			<h3 className='font-bold text-xl md:text-2xl'>Reservate room</h3>
			<p className='text-gray-600 my-4'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus architecto ducimus
				voluptate.
			</p>
			<p className='my-4'>
				<span className='text-gray-600 font-medium'>From</span>
				<br />
				<span className='font-bold text-xl me-1 sm:text-2xl md:text-3xl'>$ 399.00 USD</span>
				<span className='text-gray-600 text-xl'>/night</span>
			</p>
			<p className='h-0.5 bg-gray-200 w-full my-10'></p>
			<div className='flex space-x-4 justify-between my-4'>
				<div className='space-y-6 w-3/5'>
					<h5>Location</h5>
					<select
						name='location'
						id='location'
						className='rounded-full py-6 ps-3 border shadow w-full outline outline-red-500 outline-0 hover:outline-1'
					>
						<option value='default' defaultChecked>
							Select location
						</option>
						<option value='Revelstoke Mountain'>Revelstoke Mountain</option>
						<option value='Umatilla National Forest'>Umatilla National Forest</option>
						<option value='Cleveland National Forest'>Cleveland National Forest</option>
					</select>
				</div>
				<div className='space-y-6 w-2/5'>
					<h5>Nights</h5>
					<input
						type='number'
						min='1'
						defaultValue='1'
						className='border shadow rounded-full w-full py-6 px-5'
					/>
				</div>
			</div>
			<button className='block w-full transition-all duration-500 ease-in-out text-center bg-white px-7 py-4 text-lg font-semibold rounded-full relative top-0 border shadow hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'>
				Add to Cart
			</button>
			<div className='flex justify-between items-center my-10'>
				<p className='w-2/5 h-0.5 bg-gray-300'></p>
				<p className='w-1/5 text-center'>OR</p>
				<p className='w-2/5 h-0.5 bg-gray-300'></p>
			</div>
			<NavLink
				to='/rooms/room-single'
				className='block w-full transition-all duration-500 ease-in-out text-center bg-black text-white px-7 py-4 text-lg font-semibold rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
			>
				<img src={whiteLogo} alt='logo' className='inline me-3' />
				Book on Airbnb
			</NavLink>
		</div>
	)
}

export default BookRoom
