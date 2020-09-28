class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.3,
            'density': 0.004,
            'friction': 0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        var angle= this.body.angle;
        push ();
        translate (position.x,position.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}