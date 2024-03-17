import homeData, { roomsBg } from "../../../../data/home"
import CabinCard from "../../components/cabins/CabinCard"

const index = () => {
	return (
		<main className=''>
			{/* Hero */}
			<section
				className='relative -top-28 pt-64 pb-40 text-white text-center px-6 sm:px-10 md:px-16'
				style={{
					background: `rgba(0,0,0,0.7) url(${roomsBg}) no-repeat`,
					backgroundSize: "cover",
					backgroundPosition: "bottom center",
					backgroundBlendMode: "darken",
				}}
			>
				<div className='mx-auto space-y-6 lg:w-1/2'>
					<h1 className='font-black text-4xl sm:text-5xl md:text-6xl'>Rooms</h1>
					<p className='text-lg'>
						Non consectetur a erat nam at lectus urna duis convallis molestie nunc non
						blandit massa ut etiam sit amet nisl.
					</p>
				</div>
			</section>
			{/* Rooms */}
			<section className='mb-48 mt-10 flex flex-wrap justify-between px-6 sm:px-10 md:px-16'>
				{homeData.cabins.map((cabin) => (
					<CabinCard key={cabin.id} {...cabin} page='rooms' />
				))}
			</section>
		</main>
	)
}

export default index
