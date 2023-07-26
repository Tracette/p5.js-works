class Obstacles{
  constructor(){
    
    this.img = imgObstacles[int(random(1,4))];
    this.w = this.img.width /2;
    this.h = this.img.height /2;
    this.x = width;
    this.y = height - this.h*1.2;
    this.score = 0;
  }
  
  move(){
    this.x -= 7;
  }
  
  show(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
}