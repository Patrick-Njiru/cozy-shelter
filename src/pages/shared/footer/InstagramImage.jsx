import { useState } from "react"
import PropTypes from "prop-types"

const InstagramImage = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false)
  
	return (
		<a
			href='https://www.instagram.com'
			target='_blank'
			className='w-[30%] m-[1%] transition-all duration-800 rounded-xl h-[110px]'
			style={{
				background: `url(${image}) no-repeat`,
				backgroundSize: `${isHovered ? "115% 115%" : "100% 100%"}`,
			}}
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		></a>
	)
}

InstagramImage.propTypes = { image: PropTypes.any.isRequired }

export default InstagramImage
