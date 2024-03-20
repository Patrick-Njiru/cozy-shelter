import { useEffect } from "react"
import { About, Hero, OtherPosts } from "./components"
import { Subscribe } from "../../../../components"
import { animateOnScroll } from "../../../../utils"

const BlogPost = () => {
	useEffect(() => animateOnScroll())

	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Main Content */}
			<About />
			{/* Subscribe */}
			<Subscribe />
			{/* Latest Posts */}
			<OtherPosts />
		</main>
	)
}

export default BlogPost
