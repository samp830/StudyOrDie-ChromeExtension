
var handler = function (e) { 
    handler.data.push(e);
}
document.addEventListener("keydown", handler,true);
handler.data = [];
window.addEventListener("keydown", handler);


/////////
var n=0;

document.onkeypress = function (e) {
 e = e || window.event; 
 var charCode = e.charCode || e.keyCode, character = String.fromCharCode(charCode); 
 console.log(charCode)
 n++;
 //console.log(n);
};
function ifloop(){
console.log(changeInfo.status)
if (n< 10){
	screamo();
}
n=0;

}
var ding = window.setInterval(ifloop,15000);


function bad1(){
	//This is like what happens if you idle
	//hopefully the facebook one.

	alert('yaad')


}
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
  
   

