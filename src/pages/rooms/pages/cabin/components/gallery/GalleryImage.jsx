import PropTypes from "prop-types"

const GalleryImage = ({ image }) => {
	return (
		<a
			href='#instagram'
			target='_blank'
			className='show-on-scroll inline-block relative mx-auto my-6 rounded-xl overflow-hidden sm:w-[47%] lg:w-[23%]'
		>
			<img
				src={image}
				alt='ig image'
				className='object-cover transition-all duration-500 ease-in-out hover:scale-110'
			/>
		</a>
	)
}

GalleryImage.propTypes = { image: PropTypes.any.isRequired }

export default GalleryImage
