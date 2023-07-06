class Player {
  constructor(){
    this.r = 100;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.6;
  }
  
  jump(){
    if (this.y == height - this.r){
      this.vy = -30;
    }
  } 
   
  hits(train){
    //return the true or false results of this collide function from that library
    return collideRectRect(this.x,this.y,this.r,this.r,train.x,train.y,train.r,train.r);
  }
  
  move(){ 
    this.y += this.vy;
    this.vy +=this.gravity;
    //Constrains a value between a minimum and maximum value.
    this.y = constrain(this.y,0,height - this.r);
    
    if (keyIsDown(39) || keyIsDown(68)){
      this.x += 3;
    }
    if(keyIsDown(37)|| keyIsDown(65)){
      this.x -= 3;
    }
    
    this.x = constrain(this.x,this.r/2,width-this.r/2);
  }
  
  show(){
    // noStroke();
    // fill("orange");
    // rect(this.x,this.y,this.r,this.r);
    image(playerImg, this.x,this.y, 185/2,185/2);
  }
}