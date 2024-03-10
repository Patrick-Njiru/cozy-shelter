export const handleScroll = (direction, section) => {
	const container1 = document.getElementById("scroll-container"),
		container2 = document.getElementById("scroll-container-2")

	container1.style.scrollBehavior = "smooth"
	container2.style.scrollBehavior = "smooth"

	if (section == "cabins") {
		if (window.innerWidth >= 640) {
			return direction == "left"
				? (container1.scrollLeft -= 400)
				: (container1.scrollLeft += 400)
		}
		return direction == "left" ? (container1.scrollLeft -= 320) : (container1.scrollLeft += 320)
	}

	if (section == "reviews") {
		if (window.innerWidth >= 768) {
			return direction == "left"
				? (container2.scrollLeft -= (window.innerWidth * 65) / 100)
				: (container2.scrollLeft += (window.innerWidth * 65) / 100)
		} else if (window.innerWidth >= 640) {
			return direction == "left"
				? (container2.scrollLeft -= (window.innerWidth * 90) / 100)
				: (container2.scrollLeft += (window.innerWidth * 90) / 100)
		}
		return direction == "left"
			? (container2.scrollLeft -= (window.innerWidth * 85) / 100)
			: (container2.scrollLeft += (window.innerWidth * 85) / 100)
	}
}
