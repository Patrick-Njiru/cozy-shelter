import { useEffect } from "react"
import { Hero, Latest, Trending } from "./components"
import blogsData from "../../data/blog"
import { Subscribe } from "../../components"
import { animateOnScroll } from "../../utils"

const Blogs = () => {
	useEffect(() => animateOnScroll())

	return (
		<div>
			{/* Hero */}
			<Hero />
			{/* Top Blogs and Resources */}
			<Trending trending={blogsData.trending} />
			{/* Subscribe */}
			<Subscribe />
			{/* Latest Posts */}
			<Latest latestPosts={blogsData.latestPosts} />
		</div>
	)
}

export default Blogs
