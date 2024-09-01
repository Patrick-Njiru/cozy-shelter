import { useEffect } from "react"
import { CabinCard } from "../../../components"
import { animateOnScroll } from "../../../utils"
import { useParams } from "react-router-dom"
import { roomsData } from "../../../data"
import { amenities } from "../../../data/rooms"

const AmenityRooms = () => {
	useEffect(() => animateOnScroll())

	const { amenityId } = useParams()
	const amenity = amenities.filter((amenity) => amenity.id == amenityId)[0]
	const roomsWithAmenity = roomsData.cabins.filter((cabin) => cabin.amenities.includes(amenity))

	return (
		<main className='px-6 sm:px-10 md:px-16'>
			<section className='show-on-scroll pt-20 pb-4 text-center mx-auto space-y-6 lg:w-1/2'>
				<h1 className='show-on-scroll font-black text-4xl sm:text-5xl md:text-6xl'>
					Rooms with <span className='capitalize'>{amenity.title}</span>
				</h1>
				<p className='show-on-scroll text-lg text-gray-600'>
					Non consectetur a erat nam at lectus urna duis convallis molestie nunc non
					blandit massa ut etiam sit amet nisl.
				</p>
			</section>
			{/* Rooms */}
			<section className='show-on-scroll mb-48 mt-10 flex flex-wrap justify-between'>
				{roomsWithAmenity.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} page='rooms-category' />
				))}
			</section>
		</main>
	)
}

export default AmenityRooms
