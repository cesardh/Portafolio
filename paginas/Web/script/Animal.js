function Animal()
{
  this.escala = 3
  //color principal
  this.h1 = random(-1,101)
  this.s1 = 50;
  this.b1 = 90;

  //Ojos
  this.ojosX = random(8,19)
  this.ojosY = random(4,15)
  this.ojosT = random(4,7)
  this.cejaAlto = random(2,5)
  this.cejaCurva = random(2,5)
  this.ojos = function(x, y, t)
  {
    var mx = norm(mouseX, width/2, width)
    var my = norm(mouseY, height/2, height)
    mx = constrain(mx,-2,2)
    my = constrain(my,-1.5,1.5)

    push()
    fill(this.h1,this.s1,20)

    ellipse(x + mx, -y+my, t, t)
    ellipse(-x + mx, -y+my, t, t)

    fill(100)
    ellipse(x + mx + x/11, -y + my -1, t/3, t/3)
    ellipse(-x + mx + x/11, -y + my  -1, t/3, t/3)
    var alto = this.cejaAlto
    var curva = this.cejaCurva
    var pos ={
      x1:x-5, x2:x+5, y1:-y-alto, y2:-y-alto
    }

    stroke(this.h1,this.s1,20);
    noFill()
    bezier(pos.x1, pos.y1, pos.x1+1, pos.y1-curva, pos.x2-1, pos.y2-curva, pos.x2, pos.y2)
    bezier(-pos.x1, pos.y1, -pos.x1-1, pos.y1-curva, -pos.x2+1, pos.y2-curva, -pos.x2, pos.y2)
    pop()
  }

//Boca
  this.bocaAncho = random(5, 40)
  this.bocalargo = random(10, 22)
  this.bocaRand = random(1.2, 3)
  this.boca = function()
  {
    var my = mouseY/100 - 4;
    var largo = this.bocalargo/this.bocaRand
    var abrir = 30 + my * 2
    var alto = 22 + my


    beginShape()
    vertex(0,15)
    vertex(largo, alto)
    bezierVertex( 5, abrir,  -5, abrir,  -largo, alto)
    endShape(CLOSE)

    push()
    stroke(this.h1,this.s1,20)
    fill(this.h1,this.s1,this.b1)
    curve(10,-25,  0,15,  this.bocalargo,alto,  40,10-my)
    curve(-10,-25,  0,15,  -this.bocalargo,alto,  -40,10-my)
    pop()
  }

//Ocico
this.ocicoRand = random(0,2)
  this.ocico = function()
  {
    push()
    fill(0,80)
    if (this.ocicoRand <= 1) {
      triangle(10, 5, -10, 5, 0, 15)
    } else{
      arc(0, 5, 20,20,0, PI)
    }
    pop()
    quad(10, 5, -10, 5, -2, -15, 2, -15)
  }

//Orejas
  this.tx = random(10,20)
  this.ty = random(25,40)
  this.orejas = function()
  {
    var r = mouseY/1000 -0.5
    var a = 10
    push()
    translate(30, -25)
    rotate(-r)

    rotate(-1)
    ellipse(0,a, this.tx, this.ty)
    pop();

    push();
    translate(-30, -25)
    rotate(r)

    rotate(1);
    ellipse(0,a, this.tx, this.ty)
    pop();
  }
//Panza
  this.tonoPanza = random(0,2)
  this.panzaAncho = random(40,60)
  this.panzaAlto = random(20,35)
  this.panza = function(){
    push();

    if (this.tonoPanza <= 1) {
      fill(0, 80)
    } else {
      fill(100, 70)
    }

    ellipse(0,50,this.panzaAncho,this.panzaAlto)
    pop();
  }

  this.dibujar = function()
  {
    noStroke();
    fill(this.h1, this.s1, this.b1);
    scale(width/100);

    ellipse(0, 0, 100, 100);

    push()
    translate((mouseX-width/2)/100, (mouseY-height/2)/100)
    this.panza();
    this.ojos(this.ojosX, this.ojosY, this.ojosT)

    fill(0,70)
    this.boca();
    fill(0,50)
    this.orejas();
    fill(0,20)
    this.ocico();

    pop()
  }
}
