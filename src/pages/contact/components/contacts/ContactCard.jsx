import React from "react"
import PropTypes from "prop-types"

const ContactCard = ({ icon, purpose, contact }) => {
	return (
		<div className='transition-all duration-500 ease-in-out relative top-0 group flex flex-col space-y-5 items-center mx-auto my-6 space-x-6 max-w-full hover:-top-2 hover:text-red-600 sm:flex-row sm:space-y-0 sm:w-80 md:w-[45%] lg:w-1/3'>
			<img src={icon} alt={purpose} className='h-16 sm:h-20' />
			<div>
				<p className='transition-all duration-500 ease-in-out text-center text-gray-600 font-medium group-hover:text-red-600 sm:text-start md:text-lg'>
					{purpose}
				</p>
				<p className='font-bold md:text-lg'>{contact}</p>
			</div>
		</div>
	)
}

ContactCard.propTypes = {
	icon: PropTypes.any.isRequired,
	purpose: PropTypes.string.isRequired,
	contact: PropTypes.string.isRequired,
}

export default ContactCard
