const handleShowModal = () => {
	// desktop modal
	document.getElementById("modal-web").classList.remove("hidden")
	document.getElementById("modal-web").classList.add("flex")
	document.getElementById("pages").classList.add("modal-opened")
}

export default handleShowModal