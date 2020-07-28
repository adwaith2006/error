class Form {

    constructor() {
      
      this.greeting = createInput('press space key to start ');
    }
    Display(){
        this.greeting.position(displayWidth/2+100,displayHeight/2);
    }
       Space(){
           gameSate=PLAY;
       }
          
          
      
    
}