import { useEffect } from "react"
import PropTypes from "prop-types"
import { About, BookRoom, Gallery, Hero } from "./components"

const RoomSingle = ({ setScrollAnimation }) => {
	useEffect(() => {
		setScrollAnimation()
	})

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

RoomSingle.propTypes = { setScrollAnimation: PropTypes.func.isRequired }

export default RoomSingle
