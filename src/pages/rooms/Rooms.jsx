import { useEffect } from "react"
import { CabinCard } from "../../components"
import roomsData, { roomsHero } from "../../data/rooms"
import { animateOnScroll } from "../../utils"

const Rooms = () => {
	useEffect(() => {
		animateOnScroll()
	})

	return (
		<main>
			{/* Hero */}
			<section
				className='show-on-scroll relative -top-28 pt-64 pb-40 text-white text-center px-6 sm:px-10 md:px-16'
				style={{
					background: `rgba(0,0,0,0.7) url(${roomsHero}) no-repeat`,
					backgroundSize: "cover",
					backgroundPosition: "bottom center",
					backgroundBlendMode: "darken",
				}}
			>
				<div className='mx-auto space-y-6 lg:w-1/2'>
					<h1 className='show-on-scroll font-black text-4xl sm:text-5xl md:text-6xl'>
						Rooms
					</h1>
					<p className='show-on-scroll text-lg'>
						Non consectetur a erat nam at lectus urna duis convallis molestie nunc non
						blandit massa ut etiam sit amet nisl.
					</p>
				</div>
			</section>
			{/* Rooms */}
			<section className='show-on-scroll mb-48 mt-10 flex flex-wrap justify-between px-6 sm:px-10 md:px-16'>
				{roomsData.cabins.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} page='rooms' />
				))}
			</section>
		</main>
	)
}

export default Rooms
