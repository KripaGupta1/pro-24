var groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(600, 200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = new Ground(width/2,height-15,width,10)
	
	dus1 = new Dustbin(500,height-30,100,20);
	dus2 = new Dustbin(550,height-50,20,50);
    dus3 = new Dustbin(450,height-50,20,50);

	paperObject = new Paper (100,height-25,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   groundSprite.display();
   dus1.display();
   dus2.display();
   dus3.display();
   paperObject.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50});
	}
}

