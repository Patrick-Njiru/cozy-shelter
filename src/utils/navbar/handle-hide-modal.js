const handleHideModal = () => {
	// desktop modal
	document.getElementById("modal-web").classList.add("hidden")
	document.getElementById("modal-web").classList.remove("flex")
	document.getElementById("pages").classList.remove("modal-opened")
	// mobile
	document.getElementById("modal-mobile").classList.add("hidden")
	document.getElementById("modal-mobile").classList.remove("flex")
	document.getElementById("pages-mobile").classList.remove("modal-opened")
}

export default handleHideModal
