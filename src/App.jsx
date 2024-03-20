import { createContext, useState } from "react"
import { BiUpArrowAlt } from "react-icons/bi"
import { Route, Routes, useNavigate } from "react-router-dom"
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
import { blogPostData } from "./data/blog"
import CartModal from "./pages/shared/navbar/components/CartModal"

export const BlogContext = createContext()

const App = () => {
	const [selectedPost, setSelectedPost] = useState("glamping")
	const navigate = useNavigate()

	localStorage.setItem("selectedPost", selectedPost)

	const post = blogPostData[localStorage.getItem("selectedPost")]

	const navigateToBlogPost = (title) => {
		setSelectedPost(title)
		localStorage.clear()
		localStorage.setItem("selectedPost", selectedPost)
		navigate("/blog/blog-post/")
	}

	return (
		<BlogContext.Provider value={{ post, navigateToBlogPost }}>
			<Navbar />
			<CartModal />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/rooms' element={<Rooms />} />
				<Route path='/rooms/rooms-category' element={<RoomsCategory />} />
				<Route path='/rooms/room-single' element={<RoomSingle />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/blog-post/' element={<BlogPost />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
			<Footer />
			{/* Link to Top */}
			<a href='#' className='scroll-up fixed bottom-4 end-4 z-40 rounded-full p-2 group'>
				<div className='absolute start-0 end-0 top-0 bottom-0 rotating-link border-red-600 border-4 border-dotted rounded-full'></div>
				<BiUpArrowAlt className='transition duration-200  text-4xl text-white bg-black rounded-full group-hover:text-red-600 group-hover:bg-transparent' />
			</a>
		</BlogContext.Provider>
	)
}

export default App
