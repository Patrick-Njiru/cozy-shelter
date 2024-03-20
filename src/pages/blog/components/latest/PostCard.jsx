import PropTypes from "prop-types"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BlogContext } from "../../../../App"

const PostCard = ({ img, details, postKey }) => {
	const [isHovered, setisHovered] = useState(false)
	const { navigateToBlogPost } = useContext(BlogContext)

	return (
		<div
			className='show-on-scroll transition-all duration-500 ease-in-out group border shadow-lg rounded-xl cursor-pointer mt-4 mb-8 md:w-[48%]'
			onClick={() => {
				navigateToBlogPost(postKey)
			}}
			onMouseOver={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}
		>
			<div className='relative w-full'>
				<img src={img} alt={details.title} className=' opacity-0 w-full rounded-2xl' />
				<div
					className='transition-all duration-500 delay-0 ease-in-out absolute start-0 end-0 top-0 bottom-0 rounded-t-xl p-6'
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

PostCard.propTypes = {
	img: PropTypes.any.isRequired,
	details: PropTypes.object.isRequired,
	postKey: PropTypes.string.isRequired,
}

export default PostCard
