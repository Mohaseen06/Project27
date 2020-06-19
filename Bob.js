class Bob{
    constructor(x,y,radius){
        var bob_options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Bodies.circle(x, y, radius, bob_options);
        this.radius = radius;
        //this.angle= angle;
        World.add(world,this.body)
    }

    display(){
        ellipseMode(RADIUS);      
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,20)
    }   
}