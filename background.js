chrome.runtime.onMessage.addListener(function(request) {
	if (request.greeting == "screamo")
	{
      screamo();
	}
})
