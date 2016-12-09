var miAnimal, cnv
var s_escala, s_color

function setup()
{
  cnv = createCanvas(300, 300)
  colorMode(HSB, 100)
  miAnimal = new Animal()
}

function draw()
{
  background(255)
  translate(width/2,height/2)
  miAnimal.dibujar()
}
