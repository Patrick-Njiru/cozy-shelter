import PropTypes from "prop-types"
import { useState } from "react"
import { Link } from "react-router-dom"

const PostCard = ({ id, img, details, from }) => {
	const [isHovered, setisHovered] = useState(false)

	return (
		<Link
			to={`/blog/${id}`}
			className={
				from != "blogs"
					? "show-on-scroll transition-all duration-400 ease-in-out group border shadow-lg rounded-xl cursor-pointer mt-4 mb-8 md:w-[48%]"
					: "transition-all duration-400 ease-in-out group border shadow-lg rounded-xl cursor-pointer mt-4 mb-8 md:w-[48%]"
			}
			onMouseOver={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}
		>
			<div className='relative w-full rounded-t-2xl overflow-hidden'>
				<img
					src={img}
					alt={details.title}
					className={`
						object-cover transition-all duration-500 ease-in-out ${isHovered ? "scale-110" : ""}
					`}
				/>
				<div className='transition-all duration-400 delay-0 ease-in-out absolute start-0 end-0 top-0 bottom-0 rounded-t-xl p-6'>
					<div className='flex justify-end'>
						<h4 className='text-lg bg-white rounded-full p-5 py-3 w-fit font-bold h-1/5'>
							{details.category}
						</h4>
					</div>
				</div>
			</div>
			<div className='space-y-5 px-8 py-12 sm:h-[380px] lg:h-auto'>
				<p className='text-lg text-gray-600'>{details.date}</p>
				<h1 className='font-bold text-2xl group-hover:text-red-500'>{details.title}</h1>
				<p className='text-lg text-gray-600'>
					Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulia pariatur
				</p>
			</div>
		</Link>
	)
}

PostCard.propTypes = {
	id: PropTypes.number.isRequired,
	img: PropTypes.any.isRequired,
	details: PropTypes.object.isRequired,
	from: PropTypes.string,
}

export default PostCard
