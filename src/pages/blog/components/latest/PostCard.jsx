import PropTypes from "prop-types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PostCard = ({ img, details }) => {
	const [isHovered, setisHovered] = useState(false)
	const navigate = useNavigate()

	return (
		<div
			className='transition-all duration-300 ease-in-out group border shadow-lg rounded-xl cursor-pointer mt-4 mb-8 md:w-[48%]'
			onClick={() => {
				navigate("/blog/blog-post")
			}}
			onMouseOver={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}
		>
			<div className='relative w-full'>
				<img src={img} alt={details.title} className=' opacity-0 w-full rounded-2xl' />
				<div
					className='transition-all duration-300 delay-0 ease-in-out absolute start-0 end-0 top-0 bottom-0 rounded-t-xl p-6'
					style={{
						background: `url(${img}) no-repeat`,
						backgroundPosition: "bottom center",
						backgroundSize: `${isHovered ? "110% 110%" : "100% 100%"}`,
					}}
				>
					<div className='flex justify-end'>
						<h4 className='text-lg bg-white rounded-full p-5 py-3 w-fit font-bold h-1/5'>
							{details.category}
						</h4>
					</div>
				</div>
			</div>
			<div className='space-y-5 px-8 py-12 sm:h-[380px] lg:h-auto'>
				<p className='text-lg text-gray-600'>{details.date}</p>
				<h1 className='font-bold text-2xl group-hover:text-red-500'> {details.title}</h1>
				<p className='text-lg text-gray-600'>{details.description}</p>
			</div>
		</div>
	)
}

PostCard.propTypes = { img: PropTypes.any.isRequired, details: PropTypes.object.isRequired }

export default PostCard
