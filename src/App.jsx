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
import { roomsData } from "./data"

export const NavigationContext = createContext()

const App = () => {
	const [selectedPost, setSelectedPost] = useState("glamping")
	const [selectedRoomID, setSelectedRoomID] = useState(1)
	const [selectedAmenity, setSelectedAmenity] = useState("wifi")
	const navigate = useNavigate()

	localStorage.setItem("selectedPost", selectedPost)
	localStorage.setItem("roomID", selectedRoomID)
	localStorage.setItem("amenity", selectedAmenity)

	const post = blogPostData[localStorage.getItem("selectedPost")],
		cabin = roomsData.cabins.filter((cabin) => cabin.id == localStorage.getItem("roomID"))[0],
		amenity = localStorage.getItem("amenity")

	const handleNavigation = (requirement, destination) => {
		if (destination == "blogPost") {
			setSelectedPost(requirement)
			localStorage.removeItem("selectedPost")
			localStorage.setItem("selectedPost", selectedPost)
			navigate("/blog/blog-post/")
		}
		if (destination == "room") {
			setSelectedRoomID(requirement)
			localStorage.removeItem("roomID")
			localStorage.setItem("roomID", selectedRoomID)
			navigate("/rooms/room")
		}
		if (destination == "roomsCategory") {
			setSelectedAmenity(requirement)
			localStorage.removeItem("amenity")
			localStorage.setItem("amenity", selectedAmenity)
			navigate("/rooms/rooms-category")
		}
	}

	return (
		<NavigationContext.Provider value={{ post, cabin, amenity, handleNavigation }}>
			<Navbar />
			<CartModal />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/rooms' element={<Rooms />} />
				<Route path='/rooms/room' element={<RoomSingle />} />
				<Route path='/rooms/rooms-category' element={<RoomsCategory />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/blog-post' element={<BlogPost />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
			<Footer />
			{/* Link to Top */}
			<a href='#' className='scroll-up fixed bottom-4 end-4 z-40 rounded-full p-2 group'>
				<div className='absolute start-0 end-0 top-0 bottom-0 rotating-link border-red-600 border-4 border-dotted rounded-full'></div>
				<BiUpArrowAlt className='transition duration-200  text-4xl text-white bg-black rounded-full group-hover:text-red-600 group-hover:bg-transparent' />
			</a>
		</NavigationContext.Provider>
	)
}

export default App
