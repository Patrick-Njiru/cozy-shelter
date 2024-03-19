import { useContext } from "react"
import { NavLink } from "react-router-dom"
import blogsData from "../../../../../data/blog"
import { BlogContext } from "../../../../../App"
import PostCard from "../../../components/latest/PostCard"

const OtherPosts = () => {
	const { title } = useContext(BlogContext)

	return (
		<section className='show-on-scroll my-20 px-6 sm:px-10 md:px-16 sm:my-32 md:my-40'>
			<div className='flex flex-col space-y-6 justify-between flex-wrap sm:flex-row sm:space-y-0 sm:space-x-6 sm:items-center'>
				<h1 className='font-black text- text-2xl sm:text-3xl md:text-4xl'>Latest posts</h1>
				<NavLink
					to='/blog'
					className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-10 sm:py-6'
				>
					Browse All
				</NavLink>
			</div>
			<div className='flex flex-wrap mt-16 justify-between items-center'>
				{blogsData.latestPosts
					.filter((blog) => blog.title !== title)
					.slice(0, 2)
					.map((blog) => (
						<PostCard key={blog.id} {...blog} />
					))}
			</div>
		</section>
	)
}

export default OtherPosts
