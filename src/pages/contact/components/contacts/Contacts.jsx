import contactData from "../../../../data/contact"
import ContactCard from "./ContactCard"

const Contacts = () => {
	return (
		<section className='relative -top-44 flex flex-col space-y-10 flex-wrap justify-between px-6 sm:px-10 md:px-16 md:space-y-0 md:flex-row md:items-center'>
			{contactData.contacts.map((contactDetails) => (
				<ContactCard key={contactDetails.id} {...contactDetails} />
			))}
		</section>
	)
}

export default Contacts
