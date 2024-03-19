import { roomsData } from "../../../../../../data"
import GalleryImage from "./GalleryImage"

const Gallery = () => {
	return (
		<section className='show-on-scroll mt-20 py-20 px-6 space-y-12 bg-neutral-50 bg-opacity-50 sm:py-40 sm:mt-40 sm:px-10 md:px-16'>
			<div className='show-on-scroll flex flex-col space-y-6 justify-between flex-wrap sm:flex-row sm:space-y-0 sm:space-x-6 sm:items-center'>
				<h1 className='font-black text- text-2xl sm:text-3xl md:text-4xl'>Room gallery</h1>
				<a
					href='#book-room'
					className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:-top-1 sm:px-10 sm:py-6'
				>
					Book Room
				</a>
			</div>
			<div className='flex flex-wrap justify-between'>
				{roomsData.roomSingle.gallery.map((image, index) => (
					<GalleryImage key={index} image={image} />
				))}
			</div>
		</section>
	)
}

export default Gallery
