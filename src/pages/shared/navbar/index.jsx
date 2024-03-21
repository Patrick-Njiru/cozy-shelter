import { NavLink } from "react-router-dom"
import DesktopMenu from "./components/layouts/DesktopMenu"
import MobileMenu from "./components/layouts/MobileMenu"
import { handleToggle } from "../../../utils"
import { booked, logo } from "../../../data"

const Navbar = () => {
	return (
		<header className='relative top-7 z-10 start-0 end-0'>
			<nav className='bg-white border shadow rounded-full w-11/12 mx-auto py-5 px-5 xl:ps-8'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<NavLink
						to='/'
						className='transition-all duration-500 ease-in-out group flex space-x-3 hover:scale-95 hover:opacity-70'
					>
						<img src={logo} alt='logo' className='hidden text-black h-8 sm:block' />
						<h1 className='font-black text-xl sm:text-2xl md:text-3xl'>
							<span className='text-black'>Cozy</span>
							<span className='text-red-600'>Shelter</span>
						</h1>
					</NavLink>
					{/* Desktop Menu */}
					<DesktopMenu />

					<div className='me-3 space-x-3 sm:space-x-8 sm:me-6 flex xl:hidden'>
						{/* Hamburger Button */}
						<button
							type='button'
							id='hamburger-btn'
							className='group relative mt-2 w-8 space-y-3'
							onClick={() => handleToggle("menu")}
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
						{/* Cart */}
						<button
							className='group relative transition-all duration-500 hover:text-gray-600'
							onClick={() => handleToggle("cart")}
						>
							<img src={booked} alt='cart' className='hover:opacity-70' />
							<sub className='transition-all duration-500 absolute -start-1 w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
								0
							</sub>
						</button>
					</div>
				</div>
			</nav>
			{/* Mobile Menu */}
			<MobileMenu />
		</header>
	)
}

export default Navbar
