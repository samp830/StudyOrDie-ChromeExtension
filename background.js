function addEventHandler(oNode, sEvt, fFunc, bCapture){
var handler = function (e) { 
    handler.data.push(e);
    console.log(handler.data);
}
handler.data = [];
console.log("background running")
addEventHandler(window, "keypress", handler,false);

addEventHandler(window, "keydown", handler,false);