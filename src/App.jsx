import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { About, Blog, Footer, Home, Navbar, Error404, BlogPost } from "./pages"
import blogPostData from "./data/blog-post"

export const BlogContext = createContext()

const App = () => {
	const [selectedPost, setSelectedPost] = useState("glamping")
	
	return (
		<BlogContext.Provider
			value={{
				title: blogPostData[selectedPost].title,
				date: blogPostData[selectedPost].date,
				category: blogPostData[selectedPost].category,
				background: blogPostData[selectedPost].bgImg,
				content: blogPostData[selectedPost].mainContent,
			}}
		>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog-post' element={<BlogPost />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
			<Footer />
		</BlogContext.Provider>
	)
}

export default App
