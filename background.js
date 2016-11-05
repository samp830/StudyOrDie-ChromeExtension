function reset(){
	rest = 0
}

var rest = 0

chrome.runtime.onMessage.addListener(function(request) {

	if (request.greeting == "screamo")
	{
		if (rest == 0){
			chrome.tabs.create({ url: "Http://akk.li/pics/anne.jpg" });
			rest = 1
			window.setTimeout(reset,10000)
		}
	}
})
