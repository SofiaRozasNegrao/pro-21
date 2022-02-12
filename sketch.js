
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao
var bola
var engine, mundo

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	mundo = engine.world;

	Engine.update(engine)

	//Create the Bodies Here.
	 var bolaOpcoes={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	bola=Bodies.circle(50,670,30,bolaOpcoes)
	World.add(mundo,bola)

	chao=new Chaoo(600,650,700,400,690)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGray");

  ellipse(bola.position.x,bola.position.y,30,30)

  chao.desenha()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	 bola.atira()
	}
  }



