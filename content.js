
var n = 0

function iframeIndex(win) {
  win = win || window; 
  if (win.parent != win) {
    for (var i = 0; i < win.parent.frames.length; i++) {
      if (win.parent.frames[i] == win) { return i; }
    }
    throw Error("In a frame, but could not find myself");
  } else {
    return -1;
  }
}



if (parseInt(iframeIndex()) == 1){


	document.onkeypress = function (e) {
		n++;
		console.log(n)
	};


	function ifloop(){
		if (n < 10){
			if (Math.random() < 0.3){
				facebad()
			}
			else{
				screamo()
			}
		}
		n=0;

		console.log(n)
	}

	var ding = window.setInterval(ifloop,15000);



	var sy = 0;
	function screamo(){
		if (sy == 0){
			
			chrome.runtime.sendMessage({greeting: "screamo"}, function() {
				console.log("success");
			});
			
			sy=1;
			
			window.setTimeout(reset,14000);
		}
	}


	function reset(){
		sy = 0
	}

	function facebad(){
		
		chrome.runtime.sendMessage({greeting: "faceo"}, function() {
			console.log("success");
		});
			
	}

}




