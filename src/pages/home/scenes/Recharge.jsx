import { NavLink } from "react-router-dom"
import { redBg } from "../../../data/home-data"

const Recharge = () => {
  return (
    <section className='mt-52 px-16 text-white'>
				<div
					className=' bg-gradient-to-b from-red-600 to bg-red-700 rounded-3xl p-24'
					style={{
						background: `url(${redBg}) no-repeat`,
						backgroundSize: "100% 100%",
					}}
				>
					<div className='space-y-6 md:w-3/5'>
						<h1 className='text-5xl font-bold'>
							Recharge your energies in one of out forest cabins
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
							tempore omnis repudiandae facilis voluptatum, atque, corporis esse culpa
							veritatis hic sit dolore similique ullam harum.
						</p>
						<div className='flex flex-wrap space-x-4 mt-10'>
							<NavLink
								to='/rooms'
								className='inline transition-all duration-500 ease-in-out bg-white text-red-600 px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:text-black hover:-top-1'
							>
								Explore rooms
							</NavLink>
							<NavLink
								to='/about'
								className='inline transition-all duration-500 ease-in-out bg-inherit text-white px-10 py-6 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-white hover:text-black hover:-top-1'
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