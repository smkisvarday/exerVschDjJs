// var canvas = document.getElementById("imageView");
// var context = canvas.getContext("2d");      
// function createCircle(){        
// }    
// function createRect(fillColor, w, h) {
//     context.fillStyle = fillColor;
//     x = event.pageX; 
//     y = event.pageY;
//     context.fillRect(x, y, w, h);
// }       
// function GreenRect () {
//     context.fillStyle= 'green';
//     context.stroke();
// }    
// function RedRect () {
//     context.fillStyle= 'red';
//     context.stroke();
// }    
// function ImgClr () {
//     context.clearRect(0,0, 600, 300);  
// }
//document.getElementById("square").style.color = "white";



var djjs = document.getElementById("square");
djjs.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
});

var djjs = document.getElementById("square")

djjs.addEventListener("mouseover", function() {
    djjs.style.backgroundColor = "blue"
});
djjs.addEventListener("mouseout", function() {
    djjs.style.backgroundColor = "black"
});
djjs.addEventListener("mousedown", function() {
    djjs.style.backgroundColor = "red"
});
djjs.addEventListener("mouseup", function() {
    djjs.style.backgroundColor = "yellow"
});
djjs.addEventListener("dblclick", function() {
    djjs.style.backgroundColor = "green"
});
window.addEventListener("scroll", function() {
    djjs.style.backgroundColor = "orange"
});
document.addEventListener("keydown", function(event) {
  var colorkey = event.key
  console.log(colorkey)
  if(colorkey === "b"){djjs.style.backgroundColor = "blue"}
  else if(colorkey === "r"){djjs.style.backgroundColor = "red"}
  else if(colorkey === "y"){djjs.style.backgroundColor = "yellow"}
  else if(colorkey === "g"){djjs.style.backgroundColor = "green"}
  else if(colorkey === "o"){djjs.style.backgroundColor = "orange"}
  else{djjs.style.backgroundColor = "black"} 
  })