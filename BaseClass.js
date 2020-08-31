class BaseClass {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(200, 100, 70, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}