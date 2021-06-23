class slingshot{
    constructor(bodyA , pointB){
        var options={
            'bodyA' : bodyA,
            'pointB' : pointB,
            'stiffness' : 0.005,
            'length' : 15
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world , this.sling);
    }

    fly(){
        this.sling.bodyA = null; 
    }
    
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        strokeWeight(2);
        if (this.sling.bodyA){ 
         line (this.bodyA.position.x , this.bodyA.position.y , this.pointB.x , this.pointB.y);
        }
    }
}