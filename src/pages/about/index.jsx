import { useEffect } from "react"
import { aboutData } from "../../data"
import { Hero, Locations, OurStory, ResortUniqueness, Video } from "./components"
import { animateOnScroll } from "../../utils"

const About = () => {
	useEffect(() => animateOnScroll())

	return (
		<main id='about'>
			{/* Hero */}
			<Hero />
			{/* Locations */}
			<Locations locations={aboutData.locations} />
			{/* Our Story */}
			<OurStory pics={aboutData.ourStory} />
			{/* What Makes us Different */}
			<ResortUniqueness resortUniqueness={aboutData.resortUniqueness} />
			{/* Resort Experience */}
			<Video />
		</main>
	)
}

export default About
