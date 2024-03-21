const handleSlide = (direction, section, addClicks, reduceClicks) => {
	// const [setLeftClicks, setRightClicks] = setClicks
	const cabins = document.getElementById("cabins-scroll-container"),
		reviews = document.getElementById("reviews-scroll-container"),
		locations = document.getElementById("locations-scroll-container")

	if (section == "cabins") {
		if (window.innerWidth >= 1024) {
			addClicks((prev) => prev + 1.5)
			reduceClicks((prev) => prev - 1.5)
		} else if (window.innerWidth <= 1024) {
			addClicks((prev) => prev + 1)
			reduceClicks((prev) => prev - 1)
		}
		if (window.innerWidth >= 640) {
			return direction == "left"
				? (cabins.scrollLeft -= 400)
				: (cabins.scrollLeft += 400)
		}
		return direction == "left"
			? (cabins.scrollLeft -= 320)
			: (cabins.scrollLeft += 320)
	}
	if (section == "reviews") {
		if (window.innerWidth >= 768) {
			addClicks((prev) => prev + 1)
			reduceClicks((prev) => prev - 1)
			return direction == "left"
				? (reviews.scrollLeft -= (window.innerWidth * 60) / 100)
				: (reviews.scrollLeft += (window.innerWidth * 60) / 100)
		} else if (window.innerWidth >= 640 && window.innerWidth < 768) {
			addClicks((prev) => prev + 2 / 3)
			reduceClicks((prev) => prev - 2 / 3)
			return direction == "left"
				? (reviews.scrollLeft -= (window.innerWidth * 90) / 100)
				: (reviews.scrollLeft += (window.innerWidth * 90) / 100)
		}
		addClicks((prev) => prev + 2 / 3)
		reduceClicks((prev) => prev - 2 / 3)
		return direction == "left"
			? (reviews.scrollLeft -= (window.innerWidth * 85) / 100)
			: (reviews.scrollLeft += (window.innerWidth * 85) / 100)
	}
	if (section == "locations") {
		if (window.innerWidth >= 640) {
			addClicks((prev) => prev + 2)
			reduceClicks((prev) => prev - 2)
			return direction == "left"
				? (locations.scrollLeft -= 500)
				: (locations.scrollLeft += 500)
		}

		addClicks((prev) => prev + 1.5)
		reduceClicks((prev) => prev - 1.5)

		return direction == "left"
			? (locations.scrollLeft -= (window.innerWidth * 95) / 100)
			: (locations.scrollLeft += (window.innerWidth * 95) / 100)
	}
}

export default handleSlide
