function navToggle() {
	if (document.getElementById("nav").classList=="nav active") {
		document.getElementById("nav").classList.remove("active");
		document.getElementById("nav_toggle").classList.remove("active");
	} else {
		document.getElementById("nav").classList.add("active");
		document.getElementById("nav_toggle").classList.add("active");
	}
}