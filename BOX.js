class box
{
    constructor(x,y,width,height)
    {var options={
        restitution:0.4,
        friction:0,
        isStatic:false
    }
    this.visibility=225;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display()
    {
        if(this.body.speed<3)
        {
            var angle=this.body.angle;
            var pos=this.body.position;
            push();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
        
        }
        else{World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();
        }
       
    }
}