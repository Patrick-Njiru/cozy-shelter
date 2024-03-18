import { NavLink } from "react-router-dom"
import { homeHero } from "../../../data/home"

const Hero = () => {
	return (
		<section
			className='min-h-screen h-fit relative -top-28 py-64 px-6 text-white text-center sm:py-96 sm:px-10 md:px-16'
			style={{
				background: `rgba(0,0,0,0.6) url(${homeHero}) no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "bottom center",
				backgroundBlendMode: "darken",
			}}
		>
			<div className='mx-auto space-y-8 lg:w-3/5 xl:w-1/2'>
				<h1 className='font-black text-4xl sm:text-5xl md:text-6xl'>
					Recharge energies in our unique hotel
				</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore iure non
					beatae unde, laborum corrupti corporis dolorum fuga harum provident quisquam,
					sint possimus officiis eveniet.
				</p>
				<div className='flex flex-col items-center space-y-6 justify-center sm:flex-row sm:space-x-4 sm:space-y-0'>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4 font-bold w-fit rounded-full relative top-0 hover:bg-red-600  hover:-top-1 sm:text-lg sm:px-10 sm:py-6'
					>
						Explore rooms
					</NavLink>
					<NavLink
						to='/about'
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-7 py-4 font-semibold w-fit rounded-full relative top-0 hover:bg-red-600 hover:text-white hover:-top-1 sm:text-lg sm:px-10 sm:py-6'
					>
						About us
					</NavLink>
				</div>
			</div>
		</section>
	)
}

export default Hero
