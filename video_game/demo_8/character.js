class Character {
  constructor(){
    this.img = imgPlayer[3];
    this.w = this.img.width / 2;
    this.h = this.img.height / 2;
    this.x = 80;
    this.y = height;
    this.vy = 0;
    this.gravity = 1;
    
    //to keep track of the time when the collision occurs
    this.collideTime = 0;
  }

  
  
  jump (){
  if (this.y == height - this.h){
    this.vy = -21.8;
  }
  }
  
  hits(obstacles){
    return collideRectRect(this.x,this.y,this.w,this.h, obstacles.x ,obstacles.y,obstacles.w,obstacles.h);
  }
  
  move(){
  this.y += this.vy;
  this.vy += this.gravity;
  this.y = constrain(this.y, 0, height - this.h);
  }
  
  show(){
    push();
    //imageMode(CENTER);
    image(this.img,this.x,this.y-20,this.w,this.h);
    pop();
  }
  
  update(){
    if (collideOb == 0){
      if(this.y < 200){
        this.img = imgPlayer[2];
      } else{
        this.img = imgPlayer[index%2 +3];
      }
    }
    else{
      // If sufficient time has passed since the last collision
      if (millis() - this.collideTime > 350){ // 2000 is 2 seconds, change it as needed
        // Change image back to running
        this.img = imgPlayer[index%2+3];
      } else{
        this.img = imgPlayer[5];
      }
    }
  }
  
}