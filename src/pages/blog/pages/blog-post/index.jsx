import { Content, Hero, OtherPosts } from "./components"
import { Subscribe } from "../../../../components"

const BlogPost = () => {
	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Main Content */}
			<Content />
			{/* Subscribe */}
			<Subscribe />
			{/* Latest Posts */}
			<OtherPosts />
		</main>
	)
}

export default BlogPost
