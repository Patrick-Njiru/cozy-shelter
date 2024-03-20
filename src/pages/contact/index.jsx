import { useEffect } from "react"
import { Contacts, FAQs, Form, Hero, OurLocations } from "./components"
import { animateOnScroll } from "../../utils"

const Contact = () => {
	useEffect(() => animateOnScroll())

	return (
		<main>
			{/* Hero */}
			<Hero />
			{/* Form */}
			<Form />
			{/* Contacts */}
			<Contacts />
			{/* Our Locations */}
			<OurLocations />
			{/* FAQs */}
			<FAQs />
		</main>
	)
}

export default Contact
