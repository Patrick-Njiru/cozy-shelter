import PropTypes from "prop-types"
import { BiChevronRight } from "react-icons/bi"

const QuestionAccordion = ({ question }) => {
	return (
		<div className='group relative border shadow-md space-y-6 rounded-2xl p-6 py-10 my-6 md:p-10 md:w-[48%] h-fit'>
			<div className='flex justify-between items-start space-x-6'>
				<h3 className='font-bold text-lg sm:text-xl md:text-2xl'>{question}</h3>
				<button className='tranisiton duration-500 ease-linear bg-gray-600 bg-opacity-20 rounded-full	group-hover:rotate-90 group-hover:bg-red-500'>
					<BiChevronRight className='transition duration-500 ease-linear text-4xl opacity-50 rounded-full md:text-5xl group-hover:text-white group-hover:opacity-100' />
				</button>
			</div>
			<div className='transition-all duration-500 ease-in-out text-gray-600 opacity-0 h-0 mb-0 group-hover:opacity-100 group-hover:h-24 sm:group-hover:h-16 md:group-hover:h-24 lg:group-hover:10px lg:text-lg'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
				euismod dictum egestas orci netus feugiat ut egestas ut.
			</div>
		</div>
	)
}

QuestionAccordion.propTypes = {
	question: PropTypes.string.isRequired,
}

export default QuestionAccordion
