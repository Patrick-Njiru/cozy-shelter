import { useEffect } from "react"
import { Hero, Latest, Trending } from "./components"
import blogsData from "../../data/blogs"
import { Subscribe } from "../../components"
import { animateOnScroll } from "../../utils"

const Blogs = () => {
	useEffect(() => animateOnScroll())

	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Top Blogs and Resources */}
			<Trending trending={blogsData.trending} />
			{/* Subscribe */}
			<Subscribe />
			{/* Latest Posts */}
			<Latest latestPosts={blogsData.latestPosts} />
		</main>
	)
}

export default Blogs
