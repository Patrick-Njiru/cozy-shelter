import { useEffect } from "react"
import { Subscribe } from "../../components"
import { homeData } from "../../data"
import { Activities, Cabins, Experiences, Hero, OurUniqueness, Reviews } from "./components"
import { animateOnScroll } from "../../utils"

const Home = () => {
	useEffect(() => {
		animateOnScroll()
	})

	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Cabins */}
			<Cabins cabins={homeData.cabins} />
			{/* Experiences */}
			<Experiences experiences={homeData.experiences} />
			{/* Recharge */}
			<Subscribe purpose='recharge' />
			{/* Activities */}
			<Activities activities={homeData.activities} />
			{/* What Makes Us Different */}
			<OurUniqueness uniqueness={homeData.uniqueness} />
			{/* Client Reviews */}
			<Reviews reviews={homeData.reviews} />
		</main>
	)
}

export default Home
