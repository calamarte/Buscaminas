var canvas = document.getElementById("minas");
var ctx = canvas.getContext("2d");
var sound = true;
var px = [];
createjs.Sound.registerSound("sound/fondo.wav", "background");

function intro() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,500,500);
    ctx.fillStyle = "white";
    ctx.font = "70px Orbitron";
    ctx.textAlign = "center";
    ctx.fillText("Buscaminas",250,250);
    ctx.textAlign = "start";
}

var introAnimation = setInterval(function () {
    intro();
    var aux = new pixel(0,Math.round(Math.random()*500));
    aux.print();
    px.push(aux);
    for(var i = 0;i < px.length;i++){
        if(px[i].y > 500)px.shift();
        else px[i].print();
    }
},30);

var backgroundsSound = setInterval(function () {
    createjs.Sound.play("background");
},6850);

function pixel(y,x) {
    this.x = x;
    this.y = y;

    this.print = function () {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x,this.y,5,5);
        this.y+=5;
    }
}

function stopAnimation() {
    clearInterval(introAnimation);
    clearInterval(backgroundsSound);
}
