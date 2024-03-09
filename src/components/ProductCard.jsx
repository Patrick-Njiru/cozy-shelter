import PropTypes from "prop-types"
import { BiBed } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { NavLink, useNavigate } from "react-router-dom"

const ProductCard = ({ title, img }) => {
	const navigate = useNavigate()
	return (
		<div
			className='transition-all duration-300 ease-in-out relative group top-0 border shadow-lg rounded-xl h-5/6 min-w-96 hover:-top-4 cursor-pointer'
			onClick={() => {
				navigate("/rooms-single")
			}}
		>
			<div
				id='product-card-bg'
				className='product-card-bg transition-all duration-300 ease-in-out h-60 rounded-t-xl'
				style={{
					background: `url(${img}) no-repeat`,
					backgroundPosition: "bottom center",
					backgroundSize: "cover",
				}}
			></div>
			<div className='space-y-5 p-6'>
				<h1 className='font-bold text-2xl'> {title}</h1>
				<p className='text-gray-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<div className='flex items-center space-x-4'>
					<p className='rounded-full border p-2'>
						<BsPerson className='inline me-1 text-xl' /> 4 guests
					</p>
					<p className='rounded-full border p-2'>
						<BiBed className='inline me-1 text-xl' /> 2 Bedrooms
					</p>
				</div>
				<span className='block w-full bg-slate-200 h-0.5'></span>
				<div className='pt-3 flex justify-between items-center'>
					<p>
						<span className='text-2xl font-bold'>$150</span>
						<span className='text-gray-500 font-light text-lg'>/night</span>
					</p>
					<NavLink
						to='/book'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full hover:bg-red-600  hover:-top-1'
					>
						Book now
					</NavLink>
				</div>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.any.isRequired,
}

export default ProductCard
