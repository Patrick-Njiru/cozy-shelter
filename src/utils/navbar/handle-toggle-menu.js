const handleToggleMenu = () => {
	const mobileMenu = document.getElementById("mobile-menu")
	mobileMenu.classList.toggle("opacity-0")
	mobileMenu.classList.toggle("top-28")
	mobileMenu.classList.toggle("-top-96")
	document.getElementById("hamburger-btn").classList.toggle("open")
}

export default handleToggleMenu