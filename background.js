

chrome.runtime.onMessage.addListener(function(request) {
	if (request.greeting == "screamo")
	{
		chrome.tabs.create({ url: "Http://akk.li/pics/anne.jpg" });
	}
})
