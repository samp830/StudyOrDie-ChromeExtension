

chrome.runtime.onMessage.addListener(function(request) {
	if (request.greeting == "screamo")
	{
		chrome.tabs.create({ url: "https://static.pexels.com/photos/27714/pexels-photo-27714-large.jpg" });
	}
	if (request.greeting == "faceo")
	{
		chrome.tabs.create({ url: "https://www.facebook.com/messages"})
	}
})
