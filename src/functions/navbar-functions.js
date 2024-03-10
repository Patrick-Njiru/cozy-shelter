const handleMenuToggle = () => {
	const mobileMenu = document.getElementById("mobile-menu")
	mobileMenu.classList.toggle("opacity-0")
	mobileMenu.classList.toggle("top-28")
	mobileMenu.classList.toggle("-top-96")
	document.getElementById("hamburger-btn").classList.toggle("open")
}

const handleModalDisplay = () => {
	// desktop modal
	document.getElementById("modal-web").classList.toggle("hidden")
	document.getElementById("modal-web").classList.toggle("flex")
	document.getElementById("pages").classList.toggle("modal-opened")
	// mobile modal
	document.getElementById("modal-mobile").classList.toggle("hidden")
	document.getElementById("modal-mobile").classList.toggle("flex")
	document.getElementById("pages-mobile").classList.toggle("modal-opened")
}

const handleMouseOver = () => {
	// desktop modal
	document.getElementById("modal-web").classList.remove("hidden")
	document.getElementById("modal-web").classList.add("flex")
	document.getElementById("pages").classList.add("modal-opened")
}

const handleMouseLeave = () => {
	// desktop modal
	document.getElementById("modal-web").classList.add("hidden")
	document.getElementById("modal-web").classList.remove("flex")
	document.getElementById("pages").classList.remove("modal-opened")
	// mobile
	document.getElementById("modal-mobile").classList.add("hidden")
	document.getElementById("modal-mobile").classList.remove("flex")
	document.getElementById("pages-mobile").classList.remove("modal-opened")
}

export { handleMenuToggle, handleModalDisplay, handleMouseLeave, handleMouseOver }
