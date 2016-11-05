var handler = function (e) { 
    handler.data.push(e);
    console.log(handler.data);
}
handler.data = [];

window.addEventListener("keypress", handler);