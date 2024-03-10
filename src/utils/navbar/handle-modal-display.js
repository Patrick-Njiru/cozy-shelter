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

export default handleModalDisplay