import { useEffect } from "react"
import PropTypes from "prop-types"

const Error404 = ({ setScrollAnimation }) => {
	useEffect(() => {
		setScrollAnimation()
	})

	return (
		<div className='relative top-[-20vh] bottom-0 pt-72 h-[110vh] text-rose-600 font-bold text-5xl text-center px-16 bg-neutral-200'>
			The page you are looking for does not yet exist!
		</div>
	)
}

Error404.propTypes = { setScrollAnimation: PropTypes.func.isRequired }

export default Error404
