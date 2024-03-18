import { useEffect } from "react"
import PropTypes from "prop-types"
import { About, Hero, OtherPosts } from "./components"
import { Subscribe } from "../../../../components"

const BlogPost = ({ setScrollAnimation }) => {
	useEffect(() => {
		setScrollAnimation()
	})

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

BlogPost.propTypes = { setScrollAnimation: PropTypes.func.isRequired }

export default BlogPost
