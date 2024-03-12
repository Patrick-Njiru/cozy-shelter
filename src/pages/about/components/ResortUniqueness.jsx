import PropTypes from "prop-types"
import { FeaturesShortDescription, Heading } from "../../../components"

const ResortUniqueness = ({ resortUniqueness }) => {
	return (
		<section className='px-6 sm:px-10 md:px-16 mt-40 sm:mt-52'>
			<Heading title='What makes our resorts different?' />
			<div className='flex flex-wrap justify-between'>
				<FeaturesShortDescription features={resortUniqueness} page='about' />
			</div>
		</section>
	)
}

ResortUniqueness.propTypes = { resortUniqueness: PropTypes.array.isRequired }

export default ResortUniqueness
