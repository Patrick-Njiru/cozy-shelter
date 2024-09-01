import { Route, Routes } from "react-router-dom"
import { BiUpArrowAlt } from "react-icons/bi"
import {
	About,
	Blog,
	Footer,
	Home,
	Navbar,
	Error404,
	Post,
	Rooms,
	AmenityRooms,
	Cabin,
	Contact,
} from "./pages"
import CartModal from "./pages/shared/navbar/components/CartModal"

const App = () => {
	return (
		<main>
			<Navbar />
			<CartModal />
			<Routes>
				<Route exact path='' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='blog' element={<Blog />} />
				<Route path='blog/:postId' element={<Post />} />
				<Route path='contact' element={<Contact />} />
				<Route path='rooms' element={<Rooms />} />
				<Route path='rooms/:roomId' element={<Cabin />} />
				<Route path='amenities/:amenityId/rooms-with-amenity' element={<AmenityRooms />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
			<Footer />
			{/* Link to Top */}
			<a href='#' className='scroll-up fixed bottom-4 end-4 z-40 rounded-full p-2 group'>
				<div className='absolute start-0 end-0 top-0 bottom-0 rotating-link border-red-600 border-4 border-dotted rounded-full'></div>
				<BiUpArrowAlt className='transition duration-200  text-4xl text-white bg-black rounded-full group-hover:text-red-600 group-hover:bg-transparent' />
			</a>
		</main>
	)
}

export default App
