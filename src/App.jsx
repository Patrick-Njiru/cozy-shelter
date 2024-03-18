import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import {
	About,
	Blog,
	Footer,
	Home,
	Navbar,
	Error404,
	BlogPost,
	Rooms,
	RoomsCategory,
	RoomSingle,
	Contact,
} from "./pages"
import blogPostData from "./data/blog-post"
import observer from "./utils/animate-on-scroll"
import { BiUpArrowAlt } from "react-icons/bi"

export const BlogContext = createContext()

const App = () => {
	const [selectedPost, setSelectedPost] = useState("glamping")

	const setScrollAnimation = () => {
		const hiddenElements = document.querySelectorAll(".show-on-scroll")
		return hiddenElements.forEach((el) => observer.observe(el))
	}
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
				<Route exact path='/' element={<Home setScrollAnimation={setScrollAnimation} />} />
				<Route path='/rooms' element={<Rooms setScrollAnimation={setScrollAnimation} />} />
				<Route
					path='/rooms/rooms-category'
					element={<RoomsCategory setScrollAnimation={setScrollAnimation} />}
				/>
				<Route
					path='/rooms/room-single'
					element={<RoomSingle setScrollAnimation={setScrollAnimation} />}
				/>
				<Route path='/about' element={<About setScrollAnimation={setScrollAnimation} />} />
				<Route path='/blog' element={<Blog setScrollAnimation={setScrollAnimation} />} />
				<Route
					path='/blog/blog-post'
					element={<BlogPost setScrollAnimation={setScrollAnimation} />}
				/>
				<Route
					path='/contact'
					element={<Contact setScrollAnimation={setScrollAnimation} />}
				/>
				<Route path='*' element={<Error404 setScrollAnimation={setScrollAnimation} />} />
			</Routes>
			<Footer />
			<a href='#' className='scroll-up fixed bottom-4 end-4 z-40 rounded-full p-2 group'>
				<div className='absolute start-0 end-0 top-0 bottom-0 rotating-link border-red-600 border-4 border-dotted rounded-full'></div>
				<BiUpArrowAlt className='transition duration-200  text-4xl text-white bg-black rounded-full group-hover:text-red-600 group-hover:bg-transparent' />
			</a>
		</BlogContext.Provider>
	)
}

export default App
