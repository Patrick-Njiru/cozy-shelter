import { NavLink, useParams } from "react-router-dom"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import PagesModal from "../PagesModal"
import { handleModalDisplay, handleToggle } from "../../../../../utils"
import booked from "../../../../../assets/booked-icon.svg"

const DesktopMenu = () => {
	const { roomId } = useParams()

	return (
		<div className='hidden xl:block'>
			<div className='flex items-center space-x-6 text-xl me-4'>
				<NavLink to='/' className='transition-all duration-200 hover:text-red-500'>
					Home
				</NavLink>
				<NavLink to='about' className='transition-all duration-200 hover:text-red-500'>
					About
				</NavLink>
				<NavLink to='blog' className='transition-all duration-200 hover:text-red-500'>
					Blog
				</NavLink>
				<div
					id='pages'
					className='transition-all duration-200 hover:text-red-500'
					onClick={() => handleModalDisplay("toggle")}
					onMouseOver={() => handleModalDisplay("show")}
					onMouseLeave={() => handleModalDisplay("hide")}
				>
					Pages
					<button type='button'>
						<BiCaretDown className='caret-down' />
						<BiCaretUp className='caret-up' />
					</button>
					<PagesModal view='web' />
				</div>
				<button
					className='transition-all duration-200 group relative hover:text-gray-600'
					onClick={() => handleToggle("cart")}
				>
					<img src={booked} alt='cart' className='hover:opacity-70' />
					<sub className='absolute -start-1 w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
						0
					</sub>
				</button>
				<NavLink
					to={`rooms/${roomId || 1}`}
					className='book-btn inline transition-all duration-500 ease-in-out bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1'
				>
					Book now
				</NavLink>
			</div>
		</div>
	)
}

export default DesktopMenu
