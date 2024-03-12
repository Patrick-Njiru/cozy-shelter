import { aboutBg } from "../../../data/about"
import { BiChevronDown } from "react-icons/bi"
import handleScrollPageDown from "../../../utils/handle-scroll-page-down"

const Hero = () => {
	return (
		<section
			id='about-hero'
			className='min-h-screen h-fit relative -top-28 pt-52 px-6 text-white text-center md:py-64 sm:px-10 md:px-16'
			style={{
				background: `rgba(0,0,0,0.6) url(${aboutBg}) no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "bottom center",
				backgroundBlendMode: "darken",
			}}
		>
			<div className='mx-auto lg:w-3/5 xl:w-1/2'>
				<h1 className='font-black text-4xl my-8 sm:text-5xl md:text-6xl'>
					About our resorts
				</h1>
				<p>
					Inventore iure non beatae unde, laborum corrupti corporis dolorum fuga harum
					provident quisquam, sint possimus officiis eveniet.
				</p>
				<button
					type='button'
					className=' transition-all duration-500 delay-0 group rounded-full size-24 border mt-10 hover:size-[5.7rem]'
					onClick={() => handleScrollPageDown()}
				>
					<BiChevronDown className='about-hero-btn text-6xl mx-auto' />{" "}
				</button>
			</div>
		</section>
	)
}

export default Hero
