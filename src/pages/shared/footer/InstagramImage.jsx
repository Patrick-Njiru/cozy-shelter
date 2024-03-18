import { useState } from "react"
import PropTypes from "prop-types"

const InstagramImage = ({ image }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div className='relative w-[31%] m-[1%]'>
			<img src={image} alt='ig image' className='opacity-0 w-full' />
			<a
				href='https://www.instagram.com'
				target='_blank'
				className='transition-all duration-900 ease-ease-in-out rounded-xl w-100% h-full absolute top-0 start-0 end-0 bottom-0'
				style={{
					background: `url(${image}) no-repeat`,
					backgroundSize: `${isHovered ? "110% 110%" : "100% 100%"}`,
					backgroundPosition: "center center",
				}}
				onMouseOver={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			></a>
		</div>
	)
}

InstagramImage.propTypes = { image: PropTypes.any.isRequired }

export default InstagramImage
