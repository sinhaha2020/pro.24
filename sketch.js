const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var center;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    center = new Ground (400,400,200,10);
   
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
 
  center.display();

  drawSprites();
 
}



