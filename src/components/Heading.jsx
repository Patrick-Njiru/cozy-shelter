import PropTypes from "prop-types"

const Heading = ({ title, description }) => {
	return (
		<div className='show-on-scroll mx-auto space-y-6 mb-8 lg:w-4/5 xl:w-[70%]'>
			<h1 className='text-center text-zinc-700 font-black text-2xl sm:text-3xl md:text-4xl'>
				{title}
			</h1>
			<p className='show-on-scroll text-gray-600 text-center font-medium'>
				{!description || description == "1"
					? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas	deleniti distinctio placeat temporibus!"
					: description == "2"
					? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium exercitationem, nulla repudiandae eveniet veniam aperiam quaerat incidunt possimus aliquam."
					: description}
			</p>
		</div>
	)
}

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
}

export default Heading
