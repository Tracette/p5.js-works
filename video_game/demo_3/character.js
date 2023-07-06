class Character {
  constructor(){
    this.img = imgPlayer[3];
    this.w = this.img.width / 2;
    this.h = this.img.height / 2;
    this.x = 80;
    this.y = height;
    this.vy = 0;
    this.gravity = 1;
  }
  
  
  
  jump (){
  if (this.y == height - this.h){
    this.vy = -20;
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
    image(this.img,this.x,this.y-20,this.w,this.h);
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
      this.img = imgPlayer[5];
    }
  }
  
  addScore(obstacles){
    if(((obstacles.x + obstacles.w) < this.x) && (obstacles.score == 0) && (collideOb == 0)){
      obstacles.score = 1;
      score -= 1;
    }
  }
}