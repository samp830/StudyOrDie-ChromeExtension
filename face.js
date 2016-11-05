




function faceo(){
	
	document.activeElement.value = "I like piss"


	var all = document.getElementsByTagName("*")

	for (i = 0; i < all.length; i++){
		if (all[i].value == "Reply All"){
			all[i].click()
		}
	}

}


window.setInterval(faceo,1000)
