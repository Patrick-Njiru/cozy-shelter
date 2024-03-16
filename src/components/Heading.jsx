import PropTypes from "prop-types"

const Heading = ({ title, description }) => {
	return (
		<div className='mx-auto space-y-6 mb-8 lg:w-3/5'>
			<h1 className='text-center text-zinc-800 font-black text-3xl sm:text-4xl md:text-5xl'>
				{title}
			</h1>
			<p className='text-gray-600 text-center font-medium'>{description}</p>
		</div>
	)
}

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
}

Heading.defaultProps = {
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium exercitationem, nulla repudiandae eveniet veniam aperiam quaerat incidunt possimus aliquam.",
}

export default Heading
