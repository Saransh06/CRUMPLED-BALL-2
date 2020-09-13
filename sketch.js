const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var paddle ;
var ground ;

function preload()
{
	
}

function setup() {
	var canves = createCanvas(800, 700);
	engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		ground = new Ground(width/2,height,width,20)
			
		ball = new Ball(130,200,70);
	
	

		paddle = new Paddle(700,600,180,230);
		
	

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
Engine.update(engine)




	ground.display();
	paddle.display();
	
	ball.display();
	

	drawSprites();
}
 
function keyPressed(){
	
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:550,y:5000});
	
	}
	
	}




