import { Heading } from "../../../components"
import { videoImg } from "../../../data/about"

const Video = () => {
	return (
		<section className='bg-neutral-50 bg-opacity-50 px-6 py-20 mt-20 sm:px-10 sm:py-40 sm:mt-40'>
			<h1 className='text-red-500 text-center font-bold mb-4 text-xl sm:text-2xl md:text-3xl'>
				Explore our experience
			</h1>
			<Heading title="Watch how's a day at one of our resorts" description='' />
			<img src={videoImg} alt='resort video' className='rounded-3xl size-full mt-12' />
		</section>
	)
}

export default Video
