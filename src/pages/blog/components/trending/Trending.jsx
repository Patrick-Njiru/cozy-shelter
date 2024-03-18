import { useState } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import TrendingBlogCard from "./TrendingBlogCard"

const Trending = ({ trending }) => {
	const [isHovered, setIsHovered] = useState(false)
	const navigate = useNavigate()

	return (
		<section className='px-6 sm:px-10 md:px-16 mt-10'>
			<div className='flex flex-col space-y-6 items-start lg:space-x-6 lg:space-y-0 lg:flex-row'>
				<div
					className='relative rounded-3xl cursor-pointer lg:w-[45%] lg:h-screen'
					onMouseOver={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={() => navigate("/blog/blog-post")}
				>
					<img src={trending[0].img} alt='woodcabin' className='opacity-0 size-full' />

					<div
						className='absolute rounded-3xl bg-blend-darken start-0 end-0 top-0 bottom-0 transition-all duration-600 ease-ease-in-out p-6 py-8 pb-0'
						style={{
							background: `rgba(0,0,0,0.4) url(${trending[0].img}) no-repeat`,
							backgroundSize: isHovered ? "110% 110%" : "100% 100%",
							backgroundPosition: "center",
						}}
					>
						<div className='flex justify-end'>
							<h4 className='text-lg bg-white rounded-full p-5 py-3 w-fit font-bold h-1/5'>
								{trending[0].details.category}
							</h4>
						</div>
						<div className='flex h-4/5 items-end'>
							<div className='text-white space-y-3'>
								<p className='text-lg font-light'>{trending[0].details.date}</p>
								<p className='font-bold text-xl sm:text-2xl'>
									{trending[0].details.title}
								</p>
								<p className='text-lg font-light'>
									{trending[0].details.description}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-evenly space-y-6 lg:space-y-3 lg:h-screen lg:w-[52%]'>
					{trending
						.filter((blog) => blog.id > 1)
						.map((blog) => (
							<TrendingBlogCard key={blog.id} {...blog} />
						))}
				</div>
			</div>
		</section>
	)
}

Trending.propTypes = { trending: PropTypes.array.isRequired }

export default Trending
