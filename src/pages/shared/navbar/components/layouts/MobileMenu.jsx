import { NavLink } from "react-router-dom"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import PagesModal from "../PagesModal"
import { handleModalDisplay } from "../../../../../utils"

const MobileMenu = () => {
	return (
		<div
			id='mobile-menu'
			className='transition-all duration-1000 ease-in-out -z-10 opacity-0 absolute -top-96 start-0 end-0'
		>
			<div className='flex flex-col w-11/12 mx-auto p-8 rounded-3xl text-xl xl:hidden bg-white'>
				<NavLink to='/' className='my-2 transition-all duration-200 hover:text-red-500'>
					Home
				</NavLink>
				<NavLink
					to='/about'
					className='my-2 transition-all duration-200 hover:text-red-500'
				>
					About
				</NavLink>
				<NavLink to='/blog' className='my-2 transition-all duration-200 hover:text-red-500'>
					Blog
				</NavLink>
				<div
					id='pages-mobile'
					className='mt-2  transition-all duration-200 hover:text-red-500'
					onClick={() => handleModalDisplay('toggle')}
					onMouseOver={() => handleModalDisplay('show')}
					onMouseLeave={() => handleModalDisplay('hide')}
				>
					Pages
					<button type='button'>
						<BiCaretDown className='caret-down' />
						<BiCaretUp className='caret-up' />
					</button>
					<PagesModal view='mobile' />
				</div>

				<NavLink
					to='/rooms/room'
					className='book-btn transition-all duration-500 ease-in-out mt-4 bg-red-500 text-white px-5 py-3 font-bold text-base w-fit rounded-full hover:bg-red-600 hover:mt-3 hover:mb-1 sm:text-lg'
				>
					Book now
				</NavLink>
			</div>
		</div>
	)
}

export default MobileMenu
