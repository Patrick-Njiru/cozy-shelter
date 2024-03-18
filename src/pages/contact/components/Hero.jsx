import { contactHero } from "../../../data/contact"

const Hero = () => {
	return (
		<section
			className='show-on-scroll relative -top-28 pt-64 px-6 text-white text-center sm:pt-72 pb-64 mb- sm:px-10 md:px-16'
			style={{
				background: `rgba(0,0,0,0.5) url(${contactHero}) no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "darken",
			}}
		>
			<div className='show-on-scroll mx-auto space-y-8 md:w-4/5 lg:w-3/5 xl:w-1/2'>
				<h1 className='font-black text-4xl sm:text-5xl md:text-6xl'>Contact us</h1>
				<p>
					Non consectetur a erat nam at lectus urna duis convallis molestie nunc non
					blandit massa ut etiam sit amet nisl
				</p>
			</div>
		</section>
	)
}

export default Hero
