import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const TrendingBlogCard = ({ id, img, details }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Link
			to={`/blog/${id}`}
			className='flex flex-col space-y-6 group justify-between md:space-x-5 cursor-pointer w-full md:items-center md:space-y-0 md:flex-row'
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='relative md:w-1/2 lg:w-[49%]'>
				<img src={img} alt={details.title} className=' opacity-0 w-full rounded-2xl' />
				<div
					className='transition-all duration-600 ease-ease-in-out rounded-2xl absolute start-0 end-0 top-0 bottom-0'
					style={{
						background: `rgba(0,0,0,0.4) url(${img}) no-repeat`,
						backgroundSize: isHovered ? "110% 110%" : "100% 100%",
						backgroundPosition: "center",
					}}
				></div>
			</div>
			<div className='space-y-4 transition-all duration-600 ease-ease-in-out group-hover:text-red-500 md:w-1/2 lg:w-[48%]'>
				<p>{details.date}</p>
				<p className='font-bold text-xl sm:text-2xl'>{details.title}</p>
				<button className='text-lg bg-white rounded-full p-5 py-3 w-fit font-bold z-10 h-1/5 border-2 text-black'>
					{details.category}
				</button>
			</div>
		</Link>
	)
}

TrendingBlogCard.propTypes = {
	id: PropTypes.number.isRequired,
	img: PropTypes.any.isRequired,
	details: PropTypes.object.isRequired,
}

export default TrendingBlogCard
