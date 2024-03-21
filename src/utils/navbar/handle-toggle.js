const handleToggle = (item) => {
	if (item == "menu") {
		const mobileMenu = document.getElementById("mobile-menu")
		mobileMenu.classList.toggle("opacity-0")
		mobileMenu.classList.toggle("top-28")
		mobileMenu.classList.toggle("-top-96")
		document.getElementById("hamburger-btn").classList.toggle("open")
	}
	if (item == "cart") {
		const cart = document.getElementById("cart")
		cart.classList.toggle("hidden")
		cart.classList.toggle("flex")
	}
}

export default handleToggle
