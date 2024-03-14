const handleSlide = (direction, section, addClicks, reduceClicks) => {
	// const [setLeftClicks, setRightClicks] = setClicks
	const container1 = document.getElementById("scroll-container"),
		container2 = document.getElementById("scroll-container-2")

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
				? (container1.scrollLeft -= 400)
				: (container1.scrollLeft += 400)
		}
		return direction == "left" ? (container1.scrollLeft -= 320) : (container1.scrollLeft += 320)
	}
	if (section == "reviews") {
		if (window.innerWidth >= 768) {
			addClicks((prev) => prev + 1)
			reduceClicks((prev) => prev - 1)
			return direction == "left"
				? (container2.scrollLeft -= (window.innerWidth * 60) / 100)
				: (container2.scrollLeft += (window.innerWidth * 60) / 100)
		} else if (window.innerWidth >= 640 && window.innerWidth < 768) {
			addClicks((prev) => prev + 2 / 3)
			reduceClicks((prev) => prev - 2 / 3)
			return direction == "left"
				? (container2.scrollLeft -= (window.innerWidth * 90) / 100)
				: (container2.scrollLeft += (window.innerWidth * 90) / 100)
		}
		addClicks((prev) => prev + 2 / 3)
		reduceClicks((prev) => prev - 2 / 3)
		return direction == "left"
			? (container2.scrollLeft -= (window.innerWidth * 85) / 100)
			: (container2.scrollLeft += (window.innerWidth * 85) / 100)
	}
}

export default handleSlide
