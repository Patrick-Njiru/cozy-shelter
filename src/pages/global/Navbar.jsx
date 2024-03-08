import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { BiCaretDown, BiCaretUp, BiCart } from "react-icons/bi"
import PagesModal from "../scenes/PagesModal"

const Navbar = () => {
	const handleMenuToggle = () => {
		const mobileMenu = document.getElementById("mobile-menu")
		mobileMenu.classList.toggle("opacity-0")
		mobileMenu.classList.toggle("top-28")
		mobileMenu.classList.toggle("-top-96")
		document.getElementById("hamburger-btn").classList.toggle("open")
	}

	const handleModalDisplay = () => {
		// desktop modal
		document.getElementById("modal-web").classList.toggle("hidden")
		document.getElementById("modal-web").classList.toggle("flex")
		document.getElementById("pages").classList.toggle("modal-opened")
		// mobile modal
		document.getElementById("modal-mobile").classList.toggle("hidden")
		document.getElementById("modal-mobile").classList.toggle("flex")
		document.getElementById("pages-mobile").classList.toggle("modal-opened")
	}

	const handleMouseOver = () => {
		// desktop modal
		document.getElementById("modal-web").classList.remove("hidden")
		document.getElementById("modal-web").classList.add("flex")
		document.getElementById("pages").classList.add("modal-opened")
	}

	const handleMouseLeave = () => {
		// desktop modal
		document.getElementById("modal-web").classList.add("hidden")
		document.getElementById("modal-web").classList.remove("flex")
		document.getElementById("pages").classList.remove("modal-opened")
		// mobile
		document.getElementById("modal-mobile").classList.add("hidden")
		document.getElementById("modal-mobile").classList.remove("flex")
		document.getElementById("pages-mobile").classList.remove("modal-opened")
	}

	return (
		<header className='relative top-7 z-10 start-0 end-0'>
			<nav className='bg-white rounded-full w-11/12 mx-auto py-5 px-5 xl:ps-8'>
				<div className='flex justify-between items-center'>
					<NavLink to='/' className='flex space-x-3'>
						<img src='icon.jpg' alt='logo' className='h-8 hidden sm:block' />
						<h1 className='font-black text-xl md:text-3xl'>
							<span className=''>Cozy</span>
							<span className='text-red-800'>Shelter</span>
						</h1>
					</NavLink>
					{/* Desktop Menu */}
					<div className='hidden xl:block'>
						<div className='flex items-center space-x-6 text-xl me-4'>
							<NavLink to='/' className='transition-all duration-200 hover:text-red-500'>
								Home
							</NavLink>
							<NavLink to='/about' className='transition-all duration-200 hover:text-red-500'>
								About
							</NavLink>
							<NavLink to='/blog' className='transition-all duration-200 hover:text-red-500'>
								Blog
							</NavLink>
							<div
								id='pages'
								className='transition-all duration-200 hover:text-red-500'
								onClick={() => handleModalDisplay()}
								onMouseOver={() => handleMouseOver()}
								onMouseLeave={() => handleMouseLeave()}
							>
								Pages
								<button>
									<BiCaretDown className='caret-down' />
									<BiCaretUp className='caret-up' />
								</button>
								<PagesModal view='web' />
							</div>
							<NavLink to='/cart' className='transition-all duration-200 group relative hover:text-gray-500'>
								<BiCart className='text-4xl' />
								<sub className='absolute w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
									0
								</sub>
							</NavLink>
							<NavLink
								to='/book'
								className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full relative top-0 hover:bg-red-600  hover:-top-1'
							>
								Book now
							</NavLink>
						</div>
					</div>

					{/* Hamburger Button */}
					<div className='me-2 space-x-3 sm:space-x-8 sm:me-6 flex xl:hidden'>
						<button
							id='hamburger-btn'
							className='group relative mt-2 w-8 space-y-2 sm:space-y-3'
							onClick={() => handleMenuToggle()}
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
						<NavLink to='/cart' className='transition-all duration-200 hover:text-gray-500'>
							<BiCart className='group relative text-4xl' />
							<sub className='absolute bottom-6 w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
								0
							</sub>
						</NavLink>
					</div>
				</div>
			</nav>
			{/* Mobile Menu */}
			<div
				id='mobile-menu'
				className='transition-all duration-1000 ease-in-out -z-10 opacity-0 absolute -top-96 start-0 end-0'
			>
				<div className='flex flex-col w-11/12 mx-auto p-8 rounded-3xl text-xl xl:hidden bg-white'>
					<NavLink to='/' className='my-2 transition-all duration-200 hover:text-red-500'>
						Home
					</NavLink>
					<NavLink to='/about' className='my-2 transition-all duration-200 hover:text-red-500'>
						About
					</NavLink>
					<NavLink to='/blog' className='my-2 transition-all duration-200 hover:text-red-500'>
						Blog
					</NavLink>
					<div
						id="pages-mobile"
						className='mt-2  transition-all duration-200 hover:text-red-500'
						onClick={() => handleModalDisplay()}
						onMouseOver={() => handleMouseOver()}
						onMouseLeave={() => handleMouseLeave()}
					>
						Pages
						<button>
							<BiCaretDown className='caret-down' />
							<BiCaretUp className='caret-up' />
						</button>
						<PagesModal view='mobile' />
					</div>

					<NavLink
						to='/book'
						className='transition-all duration-500 ease-in-out mt-4 bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full hover:bg-red-600 hover:mt-3 hover:mb-1'
					>
						Book now
					</NavLink>
				</div>
			</div>
		</header>
	)
}

export default Navbar
