import PropTypes from "prop-types"

const ReviewCard = ({ user, location, headline, profilePic }) => {
	return (
		<div className='flex flex-col space-y-6 justify-between items-center py-5 px-4 me-9 border shadow-lg rounded-3xl md:pt-10 md:py-10 md:px-8 lg:py-20 lg:px-1 lg:space-y-0 lg:flex-row lg:space-x-6'>
			<img
				src={profilePic}
				alt={user}
				className='rounded-full size-[200px] sm:self-start sm:size-[280px] md:size-[20vw]'
			/>
			<div className='space-y-6 w-[75vw] sm:w-[80vw] md:w-[50vw] lg:text-lg'>
				<q className='font-extrabold text-lg sm:text-xl md:text-2xl'>{headline}</q>
				<p className='text-gray-600'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium,
					quo soluta omnis itaque porro? Vel fugiat dolorum atque fugit numquam deleniti
					magnam blanditiis.
				</p>
				<div>
					<p className='font-bold'>{user}</p>
					<p className='text-gray-600'>{location}</p>
				</div>
			</div>
		</div>
	)
}

ReviewCard.propTypes = {
	user: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	profilePic: PropTypes.any.isRequired,
}

export default ReviewCard
