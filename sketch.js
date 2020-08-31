
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
    boxleftSprite=createSprite(boxX, boxY, 20,100);
 	boxleftSprite.shapeColor="white";


	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,40);
    bucket = new Bucket(1200,650);
  

Engine.run(engine);
  
}


function draw() {
background(0);
Engine.update(engine)

paper.display();
ground.display();
bucket.display();
  
drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}



