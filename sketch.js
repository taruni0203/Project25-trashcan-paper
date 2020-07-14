
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,middle;

function preload()
{
	img = loadImage("images/bin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1 = new Paper(75,300);

	bottom = new Dustbin(1000,345,150,15);
	side1 = new Dustbin(915,250,15,170);
	side2 = new Dustbin(1085,250,15,170);


	ground = new Ground(600,360,width,20);
	keyPressed();

}


function draw() {
  rectMode(CENTER);
  background(175);
  
  bottom.display();
  side1.display();
  side2.display(); 
  imageMode(CENTER);
  image(img,1000,250,200,200);

  ground.display(); 
  paper1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});
	}
}


