import { NavLink } from "react-router-dom"
import { redBg } from "../../../data/home"

const Subscribe = () => {
	return (
		<section className='mt-40 px-6 text-white sm:mt-52 sm:px-10 md:px-16'>
			<div
				className='bg-gradient-to-b from-red-600 to bg-red-700 rounded-3xl p-8 sm:p-16 lg:p-24'
				style={{
					background: `url(${redBg}) no-repeat`,
					backgroundSize: "cover",
				}}
			>
				<div className='space-y-10 lg:w-3/5'>
					<h1 className='font-black text-3xl sm:text-4xl md:text-5xl'>
						Subscribe to our email newsletter for explorers!
					</h1>
					<div className='relative'>
						<input
							type='text'
							placeholder='Email address'
							className='transition-all duration-500 ease-in-out w-full h-[86px] ps-7 outline-none rounded-full text-gray-500 hover:scale-[99.5%]'
						/>
						<NavLink
							to='/rooms'
							className='transition-all duration-500 ease-in-out absolute inline bg-rose-500 text-white px-7 py-4 text-lg font-semibold w-fit rounded-full end-[0.5rem] top-1 border shadow-md hover:bg-rose-600 hover:top-0 sm:px-10 sm:py-6'
						>
							Subscribe
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Subscribe
