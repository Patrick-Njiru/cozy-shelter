import contactHero from "../assets/contact/contact-hero-bg.webp"
import cleveland from "../assets/contact/cleveland.webp"
import plumas from "../assets/contact/plumas.webp"
import revelstoke from "../assets/contact/revelstoke-mountain.webp"
import umatilla from "../assets/contact/umatilla.webp"
import email from "../assets/contact/email-contact-icon.svg"
import phone from "../assets/contact/phone-contact-icon.svg"
import reservation from "../assets/contact/reservation-contact-icon.svg"

const contactData = {
	contacts: [
		{
			id: 1,
			icon: email,
			purpose: "Have questions?",
			contact: "contact@rental.com",
		},
		{
			id: 2,
			icon: phone,
			purpose: "Give us a call",
			contact: "(414) 840 - 4078",
		},
		{
			id: 3,
			icon: reservation,
			purpose: "Make a reservation",
			contact: "reservation@rental.com",
		},
	],
	ourLocations: [
		{
			id: 1,
			title: "Reveltoke Mountain",
			img: revelstoke,
			location: "Britihs Columbia, Canada",
		},
		{
			id: 2,
			title: "Umatilla National Forest",
			location: "Oregon, USA",
			img: umatilla,
		},
		{
			id: 3,
			title: "Cleveland National Forest",
			location: "California, USA",
			img: cleveland,
		},
		{
			id: 4,
			title: "Plumas National Forest",
			location: "California, USA",
			img: plumas,
		},
	],
	fAQs: [
		"Do you offer a discount for staying in your resorts for long periods?",
		"Can I book a hotel room by telephone or email?",
		"How do I know that my reservation is confirmed?",
		"What are the check-in and check-out times of the hotel?",
		"What happens if I want to cancel my room reservation?",
		"Do you offer a discount for staying in your resorts for long periods?",
	],
}

export { contactHero }
export default contactData
