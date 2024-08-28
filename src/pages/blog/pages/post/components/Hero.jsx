import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Hero = ({ bg, title, category, date }) => {
	return (
		<section
			className='show-on-scroll relative -top-28 pt-64 pb-32 px-6 text-white bg-blend-darken sm:pt-96 sm:px-10 md:px-16'
			style={{
				backgroundColor: "rgba(0,0,0,0.4)",
				backgroundImage: `url(${bg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className='show-on-scroll space-y-8 lg:w-[850px]'>
				<div className='show-on-scroll flex items-center space-x-8'>
					<Link className='inline transition-all duration-500 ease-in-out bg-white text-black px-5 py-3 font-semibold w-fit rounded-full relative top-0  hover:-top-1 sm:text-lg'>
						{category}
					</Link>
					<p className='text-lg font-semibold'>{date}</p>
				</div>
				<h1
					id='blog-post_hero-title'
					className='show-on-scroll font-bold text-4xl sm:text-5xl md:text-6xl'
				>
					{title}
				</h1>
			</div>
		</section>
	)
}

Hero.propTypes = {
	bg: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
}

export default Hero
