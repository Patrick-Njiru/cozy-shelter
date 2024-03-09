export const handleScroll = (direction, section) => {
	const container1 = document.getElementById("scroll-container"),
		container2 = document.getElementById("scroll-container-2")

	container1.style.scrollBehavior = "smooth"
	container2.style.scrollBehavior = "smooth"

	if (section == "cabins") {
		if (direction == "left") container1.scrollLeft -= 450
		if (direction == "right") container1.scrollLeft += 450
		return
	} else if (section == "reviews") {
		if (direction == "left") container2.scrollLeft -= 840
		if (direction == "right") container2.scrollLeft += 840
		return
	}
}
