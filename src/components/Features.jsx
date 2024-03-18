import PropTypes from "prop-types"

const Features = ({ features, page }) => {
	const dynamicStyles = {
		container:
			page == "home"
				? "space-x-6 sm:w-[18rem] md:w-[19rem] lg:w-80 xl:w-1/3"
				: "flex-col justify-between space-y-4 md:items-center sm:flex-row sm:space-x-6 lg:w-[48%]",
		image: page == "home" ? "size-16 sm:size-20 md:size-24" : "size-40 md:size-52",
		nestedDiv: page == "home" ? "space-y-3" : "space-y-4",
		p: page == "home" ? null : "text-lg",
	}

	return (
		<>
			{features.map((feature) => (
				<div
					key={feature.id}
					className={"show-on-scroll flex my-10 md:items-center sm:flex-row " + dynamicStyles.container}
				>
					<img src={feature.img} alt={feature.title} className={dynamicStyles.image} />
					<div className={dynamicStyles.nestedDiv}>
						<h1 className='font-semibold text-xl sm:text-2xl md:text-3xl'>
							{feature.title}
						</h1>
						<p className={"text-gray-600 " + dynamicStyles.p}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
							explicabo.
						</p>
					</div>
				</div>
			))}
		</>
	)
}

Features.propTypes = {
	features: PropTypes.array.isRequired,
	page: PropTypes.string,
}

export default Features
