const animateOnScroll = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			entry.isIntersecting
				? entry.target.classList.add("show")
				: entry.target.classList.remove("show")
		})
	})
	const hiddenElements = document.querySelectorAll(".show-on-scroll")
	return hiddenElements.forEach((el) => observer.observe(el))
}

export default animateOnScroll
