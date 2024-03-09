import { NavLink } from "react-router-dom"
import { homeBg } from "../../../data/home-data"

const Hero = () => {
	return (
		<section
			className='min-h-screen h-fit relative -top-28 py-96 px-16 text-white text-center'
			style={{
				background: `rgba(0,0,0,0.6) url(${homeBg}) no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "bottom center",
				backgroundBlendMode: "darken",
			}}
		>
			<div className='mx-auto space-y-8 md:w-1/2'>
				<h1 className='text-6xl font-semibold'>Recharge energies in our unique hotel</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore iure non
					beatae unde, laborum corrupti corporis dolorum fuga harum provident quisquam,
					sint possimus officiis eveniet.
				</p>
				<div className='flex justify-center flex-wrap space-x-4'>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative my-4 top-0 hover:bg-red-600  hover:-top-1'
					>
						Explore rooms
					</NavLink>
					<NavLink
						to='/about'
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-6 text-lg font-semibold w-fit rounded-full relative my-4 top-0 hover:bg-red-600 hover:text-white hover:-top-1'
					>
						About us
					</NavLink>
				</div>
			</div>
		</section>
	)
}

export default Hero
