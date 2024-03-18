import { useEffect } from "react"
import PropTypes from "prop-types"
import { aboutData } from "../../data"
import { Hero, Locations, OurStory, ResortUniqueness, Video } from "./components"

const About = ({ setScrollAnimation }) => {
	useEffect(() => {
		setScrollAnimation()
	})

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

About.propTypes = { setScrollAnimation: PropTypes.func.isRequired }

export default About
