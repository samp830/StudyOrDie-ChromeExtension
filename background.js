
var handler = function (e) { 
    handler.data.push(e);
    console.log(handler.data);
}
handler.data = [];
console.log("background running");
window.addEventListener("keydown", handler);
document.onkeypress = function (e) {
    
 e = e || window.event; 
 var charCode = e.charCode || e.keyCode, character = String.fromCharCode(charCode); 
 console.log(charCode)
 
};	

function bad1(){
	//This is like what happens if you idle
	//hopefully the facebook one.

	alert('yaad')


}
