import { CabinCard } from "../components"
import homeData from "../data/home"

const RoomsCategory = () => {
	return (
		<main className='px-6 sm:px-10 md:px-16'>
			<section className='pt-20 pb-4 text-center mx-auto space-y-6 lg:w-1/2'>
				<h1 className='font-black text-4xl sm:text-5xl md:text-6xl'>Rooms with WiFi</h1>
				<p className='text-lg text-gray-600'>
					Non consectetur a erat nam at lectus urna duis convallis molestie nunc non
					blandit massa ut etiam sit amet nisl.
				</p>
			</section>
			{/* Rooms */}
			<section className='mb-48 mt-10 flex flex-wrap justify-between'>
				{homeData.cabins
					.filter(
						(cabin) => cabin.title.includes("Duplex") || cabin.title.includes("Family")
					)
					.map((cabin) => (
						<CabinCard key={cabin.id} {...cabin} page='rooms-category' />
					))}
			</section>
		</main>
	)
}

export default RoomsCategory
