import { NavLink } from "react-router-dom"
import { redBg } from "../../../data/home-data"

const Recharge = () => {
  return (
    <section className='mt-40 px-6 text-white sm:mt-52 sm:px-10 md:px-16'>
				<div
					className='bg-gradient-to-b from-red-600 to bg-red-700 rounded-3xl p-8 sm:p-16 lg:p-24'
					style={{
						background: `url(${redBg}) no-repeat`,
						backgroundSize: "cover",
					}}
				>
					<div className='space-y-6 lg:w-3/5'>
						<h1 className='font-black text-3xl sm:text-4xl md:text-5xl'>
							Recharge your energies in one of our forest cabins
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
							tempore omnis repudiandae facilis voluptatum, atque, corporis esse culpa
							veritatis hic sit dolore similique ullam harum.
						</p>
						<div className='flex flex-col space-y-6 justify-center items-center sm:flex-row sm:space-x-4 sm:space-y-0'>
							<NavLink
								to='/rooms'
								className='inline transition-all duration-500 ease-in-out bg-white text-red-600 px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 hover:text-black hover:-top-1 sm:px-10 sm:py-6'
							>
								Explore rooms
							</NavLink>
							<NavLink
								to='/about'
								className='inline transition-all duration-500 ease-in-out bg-inherit text-white px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-white hover:text-black hover:-top-1 sm:px-10 sm:py-6'
							>
								About us
							</NavLink>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Recharge