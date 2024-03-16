import { Subscribe } from "../../components"
import { Content, Hero, OtherPosts } from "./components"

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
