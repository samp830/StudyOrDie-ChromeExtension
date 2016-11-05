var divs = document.getElementsByTagName("iframe");
var handler = function (e) { 
    handler.data.push(e);
    console.log("success");
    console.log(handler.data);
}
handler.data = [];
window.addEventListener("keydown", handler,true);
document.addEventListener("keydown", handler,true);
var divs = document.getElementsByTagName("iframe");
for(var i = 0; i < divs.length; i++){
	console.log(divs[i])
	console.log("changing")
   divs[i].sandbox = 'allow-scripts'
   divs[i].addEventListener('keydown', handler, true);
   
   console.log(divs[i])}

console.log("background running")
console.log("testingsdfakj")

console.log("Here");
document.onkeypress = function (e) {
    console.log("suces");
    // use e.keyCode
};

console.log("onloaded")


  
   

