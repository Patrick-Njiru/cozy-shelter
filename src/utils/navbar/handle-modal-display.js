const handleModalDisplay = (action) => {
	if (action == "toggle") {
		// desktop modal
		document.getElementById("modal-web").classList.toggle("hidden")
		document.getElementById("modal-web").classList.toggle("flex")
		document.getElementById("pages").classList.toggle("modal-opened")
		// mobile modal
		document.getElementById("modal-mobile").classList.toggle("hidden")
		document.getElementById("modal-mobile").classList.toggle("flex")
		document.getElementById("pages-mobile").classList.toggle("modal-opened")
	}
	if (action == "show") {
		// desktop modal
		document.getElementById("modal-web").classList.remove("hidden")
		document.getElementById("modal-web").classList.add("flex")
		document.getElementById("pages").classList.add("modal-opened")
		// mobile modal
		document.getElementById("modal-mobile").classList.remove("hidden")
		document.getElementById("modal-mobile").classList.add("flex")
		document.getElementById("pages-mobile").classList.add("modal-opened")
	}
	if (action == "hide") {
		// desktop modal
		document.getElementById("modal-web").classList.add("hidden")
		document.getElementById("modal-web").classList.remove("flex")
		document.getElementById("pages").classList.remove("modal-opened")
		// mobile
		document.getElementById("modal-mobile").classList.add("hidden")
		document.getElementById("modal-mobile").classList.remove("flex")
		document.getElementById("pages-mobile").classList.remove("modal-opened")
	}
}

export default handleModalDisplay
