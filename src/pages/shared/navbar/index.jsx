import { NavLink } from "react-router-dom"
import { BiCart } from "react-icons/bi"
import DesktopMenu from "./components/layouts/DesktopMenu"
import MobileMenu from "./components/layouts/MobileMenu"
import { handleToggleMenu } from "../../../utils"

const Navbar = () => {
	return (
		<header className='relative top-7 z-10 start-0 end-0'>
			<nav className='bg-white border shadow rounded-full w-11/12 mx-auto py-5 px-5 xl:ps-8'>
				<div className='flex justify-between items-center'>
					<NavLink to='/' className='flex space-x-3'>
						<img src='icon.jpg' alt='logo' className='h-8 hidden sm:block' />
						<h1 className='font-black text-xl md:text-3xl'>
							<span className=''>Cozy</span>
							<span className='text-red-800'>Shelter</span>
						</h1>
					</NavLink>
					{/* Desktop Menu */}
					<DesktopMenu />

					{/* Hamburger Button + Cart */}
					<div className='me-3 space-x-3 sm:space-x-8 sm:me-6 flex xl:hidden'>
						<button
							id='hamburger-btn'
							className='group relative mt-2 w-8 space-y-3'
							onClick={() => handleToggleMenu()}
						>
							<span
								id='top-line'
								className='transition-all duration-500 ease-in-out bg-black h-1 w-inherit block group-hover:bg-gray-800'
							></span>
							<span
								id='bottom-line'
								className='transition-all duration-500 ease-in-out bg-black h-1 w-inherit block group-hover:bg-gray-800'
							></span>
						</button>
						<NavLink
							to='/cart'
							className='transition-all duration-200 hover:text-gray-500'
						>
							<BiCart className='group relative text-4xl' />
							<sub className='absolute bottom-6 w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
								0
							</sub>
						</NavLink>
					</div>
				</div>
			</nav>
			{/* Mobile Menu */}
			<MobileMenu />
		</header>
	)
}

export default Navbar
