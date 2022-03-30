var canvas = document.getElementById("oceano");
var ctx = canvas.getContext("2d");

const centerX = canvas.width/2;
const centerY = canvas.height/2;


var b = new Barco(ctx , centerX ,centerY,10);

var porto = new Plataformas(ctx,centerX ,centerY);
var p1 = new Plataformas(ctx,100,100);
var p2 = new Plataformas(ctx,200,100);
var p3 = new Plataformas(ctx,300,100);


b.setMovement(ControleBarco.random(porto,[p1,p2,p3]));


setInterval(loop,100);
function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    Plataformas.drawAll();
    b.draw();
    b.updatePosition();


}

