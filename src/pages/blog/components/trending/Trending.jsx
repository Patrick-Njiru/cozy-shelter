import PropTypes from "prop-types"
import TrendingBlogCard from "./TrendingBlogCard"
import { Link } from "react-router-dom"

const Trending = ({ trending }) => {
	return (
		<section className='show-on-scroll px-6 sm:px-10 md:px-16 mt-10'>
			<div className='flex flex-col space-y-6 items-start lg:space-x-6 lg:space-y-0 lg:flex-row'>
				<Link
					to={`/blog/${trending[0].id}`}
					className='relative rounded-3xl cursor-pointer group overflow-hidden lg:w-[45%] lg:h-screen'
				>
					<img
						src={trending[0].img}
						alt='woodcabin'
						className='object-cover h-full transition-all duration-500 ease-in-out group-hover:scale-110'
					/>
					<div className='absolute rounded-3xl bg-blend-darken start-0 end-0 top-0 bottom-0 transition-all duration-600 ease-ease-in-out p-6 py-8 pb-0 bg-black bg-opacity-40'>
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
				</Link>
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
