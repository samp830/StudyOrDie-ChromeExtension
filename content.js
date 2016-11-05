
var handler = function (e) { 
    handler.data.push(e);
    console.log("success");
    console.log(handler.data);
}
handler.data = [];

document.addEventListener("keydown", handler,true);



  
   

