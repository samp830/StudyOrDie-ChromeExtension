var handler = function (e) { 
    handler.data.push(e);
    console.log("success")
    console.log(handler.data);
}
handler.data = [];
console.log("background running")
console.log("testingsdfakj")
window.addEventListener("keydown", handler)
document.addEventListener("keydown", handler)
console.log("Here")