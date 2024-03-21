import { useContext } from "react"
import { NavigationContext } from "../../../../../App"

const Hero = () => {
	const { img, title } = useContext(NavigationContext).cabin

	return (
		<section
			className='show-on-scroll relative -top-28 text-white pb-8 pt-[250px] px-6 sm:pt-96 sm:pb-16 md:pt-[450px] md:pb-20 sm:px-10 md:px-16'
			style={{
				background: `rgba(0,0,0,0.5) url(${img}) no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "darken",
			}}
		>
			<div className='space-y-6 md:w-[650px] lg:w-[590px]'>
				<h1 className='show-on-scroll font-black text-4xl sm:text-5xl md:text-6xl'>
					{title}
				</h1>
				<p className='show-on-scroll text-lg'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus earum
					assumenda esse ab reiciendis! Obcaecati sapiente fugit dolorum.
				</p>
			</div>
		</section>
	)
}

export default Hero
