import { useEffect } from "react"
import PropTypes from "prop-types"
import { Contacts, FAQs, Form, Hero, OurLocations } from "./components"

const Contact = ({ setScrollAnimation }) => {
	useEffect(() => {
		setScrollAnimation()
	})

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

Contact.propTypes = { setScrollAnimation: PropTypes.func.isRequired }

export default Contact
