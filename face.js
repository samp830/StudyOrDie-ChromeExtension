




function faceo(){
	
	if (Math.random() < 0.5){
		document.activeElement.value = "I wet the bed this morning."
	}
	else{
		document.activeElement.value = "Roses are red, violets are blue, if I had a choice, I'd not go near you."	
	}
	
	


	var all = document.getElementsByTagName("*")

	for (i = 0; i < all.length; i++){
		if (all[i].value == "Reply All" || all[i].value == "Reply"){
			all[i].click()
		}
	}

}


window.setInterval(faceo,1000)
