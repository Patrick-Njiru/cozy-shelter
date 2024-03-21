import { useState } from "react"
import PropTypes from "prop-types"
import PostCard from "./PostCard"

const Latest = ({ latestPosts }) => {
	const [posts, setPosts] = useState(latestPosts)

	return (
		<section className='mt-40 px-6 sm:mt-52 sm:px-10 md:px-16'>
			<div className='show-on-scroll flex flex-col space-y-6 justify-between flex-wrap lg:flex-row lg:space-y-0 lg:items-center'>
				<h1 className='font-black text-2xl text- sm:text-3xl md:text-4xl'>Latest Posts</h1>
				<div className='space-x-4 md:space-x-6'>
					<button
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-5 py-3 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
						onClick={() => setPosts(latestPosts)}
					>
						All
					</button>
					<button
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-5 py-3 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
						onClick={() =>
							setPosts(
								latestPosts.filter((post) => post.details.category == "Articles")
							)
						}
					>
						Articles
					</button>
					<button
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-5 py-3 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
						onClick={() =>
							setPosts(
								latestPosts.filter((post) => post.details.category == "Resources")
							)
						}
					>
						Resources
					</button>
					<button
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-5 py-3 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
						onClick={() =>
							setPosts(latestPosts.filter((post) => post.details.category == "News"))
						}
					>
						News
					</button>
				</div>
			</div>
			<div className='flex flex-wrap mt-16 justify-between items-center'>
				{posts.map((post) => (
					<PostCard key={post.id} {...post} from='blogs' />
				))}
			</div>

			<div className='my-12 mb-32 sm:mb-32px md:mb-48 text-center'>
				<button className='show-on-scroll transition-all duration-500 ease-in-out relative inline bg-red-500 text-white px-7 py-4 text-lg font-semibold w-fit rounded-full end-[0.5rem] top-1 border shadow-md hover:bg-red-600 hover:top-0 sm:px-10 sm:py-6'>
					More
				</button>
			</div>
		</section>
	)
}

Latest.propTypes = { latestPosts: PropTypes.array.isRequired }

export default Latest
