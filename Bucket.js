class dustbin{
constructor(x,y) {
this.x=x;
this.y=y;
this.bucketWidth=200;
this.bucketHeight=100;
this.wallThickness=20;
this.angle=0;

//adjuesting the bodies
this.bottomBody = Bodies.rectangle(this.x,this.y,this.width, this.height);
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
Matter.Body.setAngle(this.leftWallBody, this.angle);
		

this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

//adding it to a physical world.
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	display()
	{

  this.image = loadImage("sprites/dustbingreen.png");


        //creating variable positions
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
//making the displays for all three of the boxes
			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIUS);
			fill(255);
			stroke(255);
			rotate(angle);
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIUS);
			fill(255);
			rotate(angle);
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIUS);
			fill(255);
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop();
			
	}

}






