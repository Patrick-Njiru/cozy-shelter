import { useEffect } from "react"
import { About, Hero, OtherPosts } from "./components"
import { Subscribe } from "../../../../components"
import { animateOnScroll } from "../../../../utils"
import { useParams } from "react-router-dom"
import blogsData from "../../../../data/blogs"

const Post = () => {
	useEffect(() => animateOnScroll())

	let { postId } = useParams()
	let postDetails

	postId <= 3
		? (postDetails = blogsData["trending"].filter((blog) => blog.id == postId)[0].details)
		: (postDetails = blogsData["latestPosts"].filter((blog) => blog.id == postId)[0].details)

	return (
		<main>
			{/* Hero */}
			<Hero
				bg={postDetails.bg}
				title={postDetails.title}
				category={postDetails.category}
				date={postDetails.date}
			/>
			{/* Main Content */}
			<About />
			{/* Subscribe */}
			<Subscribe />
			{/* Latest Posts */}
			<OtherPosts />
		</main>
	)
}

export default Post
