import { NavLink, useParams } from "react-router-dom"
import PropTypes from "prop-types"

const PagesModal = ({ view }) => {
	const { roomId, amenityId, postId } = useParams()

	if (view == "web") {
		return (
			<div
				id='modal-web'
				className='hidden absolute flex-col p-6 bg-white text-black rounded-lg top-30 end-48 w-60 z-10 space-y-4'
			>
				<h1 className='font-bold'> Pages </h1>
				<NavLink to='/' className='transition-all duration-200 hover:text-red-500'>
					Home
				</NavLink>
				<NavLink to='about' className='transition-all duration-200 hover:text-red-500'>
					About
				</NavLink>
				<NavLink to='blog' className='transition-all duration-200 hover:text-red-500'>
					Blog
				</NavLink>
				<NavLink
					to={`/blog/${postId || 1}`}
					className='transition-all duration-200 hover:text-red-500'
				>
					Blog Post
				</NavLink>
				<NavLink to='contact' className='transition-all duration-200 hover:text-red-500'>
					Contact
				</NavLink>
				<NavLink to='rooms' className='transition-all duration-200 hover:text-red-500'>
					Rooms
				</NavLink>
				<NavLink
					to={`/rooms/${roomId || 1}`}
					className='transition-all duration-200 hover:text-red-500'
				>
					Room Single
				</NavLink>
				<NavLink
					to={`/amenities/${amenityId || 1}/rooms-with-amenity`}
					className='transition-all duration-200 hover:text-red-500'
				>
					Rooms Category
				</NavLink>
			</div>
		)
	}

	return (
		<div
			id='modal-mobile'
			className='hidden flex-col p-6 bg-white text-black rounded-lg space-y-3'
		>
			<h1 className='font-bold'> Pages </h1>
			<NavLink to='/' className='transition-all duration-200 hover:text-red-500'>
				Home
			</NavLink>
			<NavLink to='about' className='transition-all duration-200 hover:text-red-500'>
				About
			</NavLink>
			<NavLink to='blog' className='transition-all duration-200 hover:text-red-500'>
				Blog
			</NavLink>
			<NavLink
				to={`/blog/${postId || 1}`}
				className='transition-all duration-200 hover:text-red-500'
			>
				Blog Post
			</NavLink>
			<NavLink to='contact' className='transition-all duration-200 hover:text-red-500'>
				Contact
			</NavLink>
			<NavLink to='rooms' className='transition-all duration-200 hover:text-red-500'>
				Rooms
			</NavLink>
			<NavLink
				to={`/rooms/${roomId || 1}`}
				className='transition-all duration-200 hover:text-red-500'
			>
				Room Single
			</NavLink>
			<NavLink
				to={`/amenities/${amenityId || 1}/rooms-with-amenity`}
				className='transition-all duration-200 hover:text-red-500'
			>
				Rooms Category
			</NavLink>
		</div>
	)
}

PagesModal.propTypes = { view: PropTypes.string.isRequired }

export default PagesModal
