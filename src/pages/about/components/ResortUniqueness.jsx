import PropTypes from "prop-types"
import { Features, Heading } from "../../../components"

const ResortUniqueness = ({ resortUniqueness }) => {
	return (
		<section className='show-on-scroll px-6 mt-40 sm:px-10 sm:mt-52 md:px-16 '>
			<Heading title='What makes our resorts different?' />
			<div className='flex flex-wrap justify-between'>
				<Features features={resortUniqueness} page='about' />
			</div>
		</section>
	)
}

ResortUniqueness.propTypes = { resortUniqueness: PropTypes.array.isRequired }

export default ResortUniqueness
