import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BiBed } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { NavigationContext } from "../App"

const CabinCard = ({ id, img, title, description, price, rooms, page }) => {
	const [isHovered, setisHovered] = useState(false)
	const { handleNavigation } = useContext(NavigationContext)

	return (
		<div
			className={
				page !== "home"
					? "show-on-scroll transition-all duration-500 ease-in-out relative group top-0 border shadow-lg rounded-2xl cursor-pointer my-6 w-full hover:-top-4 md:w-[48%] lg:w-[31.5%]"
					: "transition-all duration-500 ease-in-out relative group top-0 border shadow-lg rounded-2xl cursor-pointer me-9 z-10 h-5/6 min-w-[300px] sm:min-w-96 hover:-top-4"
			}
			onMouseOver={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}
			onClick={() => handleNavigation(id, "room")}
		>
			{page !== "home" ? (
				<div className='relative w-full h-fit'>
					<img src={img} alt={title} className='block w-full h-auto opacity-0' />
					<div
						className='transition-all duration-500 delay-0 ease-in-out rounded-t-xl absolute start-0 end-0 top-0 bottom-0'
						style={{
							background: `url(${img}) no-repeat`,
							backgroundPosition: "bottom center",
							backgroundSize: `${isHovered ? "110% 110%" : "100% 100%"}`,
						}}
					></div>
				</div>
			) : (
				<div
					className='transition-all duration-500 delay-0 ease-in-out h-60 rounded-t-xl'
					style={{
						background: `url(${img}) no-repeat`,
						backgroundPosition: "bottom center",
						backgroundSize: `${isHovered ? "110% 110%" : "100% 100%"}`,
					}}
				></div>
			)}
			<div className='space-y-5 p-6'>
				<h1 className='font-bold text-2xl group-hover:text-red-500'> {title}</h1>
				<p className='text-gray-400'>{description}</p>
				<div className='flex items-center space-x-4'>
					<p className='rounded-full border p-2'>
						<BsPerson className='inline me-1 text-xl' /> {rooms.guests}
					</p>
					<p className='rounded-full border p-2'>
						<BiBed className='inline me-1 text-xl' /> {rooms.bedrooms}
					</p>
				</div>
				<span className='block w-full bg-slate-200 h-0.5'></span>
				<div className='pt-3 flex justify-between items-center'>
					<p>
						<span className='text-2xl font-bold'>${price}</span>
						<span className='text-gray-600 font-light text-lg'>/night</span>
					</p>
					<NavLink
						to='/rooms/room'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full hover:bg-red-600  hover:-top-1'
					>
						Book now
					</NavLink>
				</div>
			</div>
		</div>
	)
}

CabinCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.any.isRequired,
	description: PropTypes.string,
	price: PropTypes.number.isRequired,
	rooms: PropTypes.object.isRequired,
	page: PropTypes.string,
}

CabinCard.defaultProps = { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }

export default CabinCard
