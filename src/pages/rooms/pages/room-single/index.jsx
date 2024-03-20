import { useEffect } from "react"
import { About, BookRoom, Gallery, Hero } from "./components"
import { animateOnScroll } from "../../../../utils"

const RoomSingle = () => {
	useEffect(() => animateOnScroll())

	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Main */}
			<div className='relative space-y-8 justify-between items-start px-6 sm:px-10 md:px-16 lg:space-y-0 lg:flex'>
				{/* About */}
				<About />
				{/* Book Room Side Card */}
				<BookRoom />
			</div>
			{/* Gallery */}
			<div className='relative'>
				<Gallery />
			</div>
		</main>
	)
}

export default RoomSingle
