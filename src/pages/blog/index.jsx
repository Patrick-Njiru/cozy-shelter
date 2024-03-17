import { Hero, Latest, Trending } from "./components"
import blogsData from "../../data/blog"
import { Subscribe } from "../../components"

const Blogs = () => {
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
