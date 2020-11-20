const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,390,800,20);
	
	paper = new Papers(100,375,10);

	bin1 = new Dustbins(510,330,20,100,);
	World.add(world,bin1);
	bin2 = new Dustbins(690,330,20,100);
	World.add(world,bin2);
	bin3 = new Dustbins(600,375,200,20);
	World.add(world,bin3);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  textSize(20);
  fill("black");
  textFont("bembo");
  text("Press Up Arrow To Throw Trash In Trash Can",30,50)

  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 15, y: -15});
	  var hide = createSprite(150,50,1000,50);
	  hide.shapeColor = "skyblue";
	}
}


