import PropTypes from "prop-types"

const InstagramImage = ({ image }) => {
	return (
		<div className='relative w-[31%] m-[1%]'>
			<a href='#instagram' className='inline-block rounded-xl overflow-hidden group'>
				<img
					src={image}
					alt='ig image'
					className='transition-all duration-500 ease-in-out object-cover group-hover:scale-110'
				/>
			</a>
		</div>
	)
}

InstagramImage.propTypes = { image: PropTypes.any.isRequired }

export default InstagramImage
