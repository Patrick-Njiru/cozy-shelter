import { useEffect } from "react"
import { About, BookRoom, Gallery, Hero } from "./components"
import { animateOnScroll } from "../../../../utils"
import { useParams } from "react-router-dom"
import { roomsData } from "../../../../data"

const Cabin = () => {
	useEffect(() => animateOnScroll())

	const { roomId } = useParams()
	const roomDetails = roomsData.cabins.filter((room) => room.id == roomId)[0]

	return (
		<main>
			{/* Hero */}
			<Hero img={roomDetails.img} title={roomDetails.title} />
			{/* Main */}
			<div className='relative space-y-8 justify-between items-start px-6 sm:px-10 md:px-16 lg:space-y-0 lg:flex'>
				{/* About */}
				<About
					guests={roomDetails.rooms.guests}
					bedrooms={roomDetails.rooms.bedrooms}
					amenities={roomDetails.amenities}
				/>
				{/* Book Room Side Form */}
				<BookRoom price={roomDetails.price} />
			</div>
			{/* Gallery */}
			<div className='relative'>
				<Gallery />
			</div>
		</main>
	)
}

export default Cabin
