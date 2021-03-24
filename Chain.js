class Chain{
    constuctor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:100
           }
           console.log(bodyA);
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
        console.log(this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        console.log(pointA);
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}