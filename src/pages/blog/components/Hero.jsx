import { BiSearch } from "react-icons/bi"

const Hero = () => {
	return (
		<section className='flex flex-col space-y-6 justify-between pt-32 px-6 sm:px-10 md:flex-row md:space-x-6 md:space-y-0 md:items-center md:px-16'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black md:w-1/2'>
				Blog & Resources
			</h1>
			<div className='group relative w-[430px] max-w-full md:w-1/2 lg:w-[430px]'>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Search the blog'
					className='w-full border rounded-full p-4 shadow transition-all duration-500 outline-red-500 group-hover:border-red-500'
				/>
				<BiSearch className='cursor-pointer text-2xl absolute end-3 bottom-4 transition-all duration-500 hover:opacity-50 group-hover:text-red-500' />
			</div>
		</section>
	)
}

export default Hero
