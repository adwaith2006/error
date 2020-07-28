class TargetBird{

    constructor(x,y,width,height) {
  
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("10.png,20.png,30.png,40.png,50.png,60.png,70.png,80.png");
      }
  
    display(){
      
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
  
      }
  
  }        