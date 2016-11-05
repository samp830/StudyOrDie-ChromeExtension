
var handler = function (e) { 
    handler.data.push(e);
    console.log(handler.data);
}
handler.data = [];
console.log("background running");
window.addEventListener("keydown", handler);
document.onkeypress = function (e) {
    console.log("suces");
    // use e.keyCode
};

function bad1(){
	//This is like what happens if you idle
	//hopefully the facebook one.

	alert('yaad')


}
