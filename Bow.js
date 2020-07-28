class Bow{

  constructor(x,y,width,height) {

    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("bow (1).png");
    }

  display(){
    
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.width, this.height);

    }

}        
    
