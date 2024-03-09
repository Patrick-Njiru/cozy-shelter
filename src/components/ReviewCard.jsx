import PropTypes from "prop-types"

const ReviewCard = ({ user, location, headline, profilePic }) => {
	return (
		<div
			key={user + location}
			className='flex justify-between p-20 pb-10 px-16 me-9 space-x-6 border shadow-lg rounded-3xl'
		>
			<img src={profilePic} alt='profile' className='min-w-72 h-72 rounded-full' />
			<div className='space-y-6 min-w-96 text-lg'>
				<q className='font-bold text-2xl'>{headline}</q>
				<p className='text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium,
					quo soluta omnis itaque porro? Vel fugiat dolorum atque fugit numquam deleniti
					magnam blanditiis.
				</p>
				<div>
					<p className='font-bold'>{user}</p>
					<p className='text-gray-500'>{location}</p>
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
