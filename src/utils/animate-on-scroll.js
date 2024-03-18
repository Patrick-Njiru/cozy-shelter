const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? entry.target.classList.add("show")
			: entry.target.classList.remove("show")
	})
})

export default observer
