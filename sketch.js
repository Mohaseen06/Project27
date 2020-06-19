var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rop4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(500, 300);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	roof = new Roof(245,100,210,30)

	bob1 = new Bob(165,250,20);
	bob2 = new Bob(205,250,20);
	bob3 = new Bob(245,250,20);
	bob4 = new Bob(285,250,20);
	bob5 = new Bob(325,250,20);
	

	rope1 = new Rope(bob1.body,roof.body,-40*2,10);
	rope2 = new Rope(bob2.body,roof.body,-20*2,10);
	rope3 = new Rope(bob3.body,roof.body,0*2,10);
	rope4 = new Rope(bob4.body,roof.body,20*2,10);
	rope5 = new Rope(bob5.body,roof.body,40*2,10);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){	
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,({x : -90, y : 180}))
  } 
}


  



