
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	

	
	ground = Bodies.rectangle(width/2, 280, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper = new paperObject(50,50,30);
	box1 = new Box(880,115,150,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  paper.display();
  box1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:360});
	}
}
