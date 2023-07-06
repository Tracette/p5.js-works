class Obstacles{
  constructor(){
    this.img = imgObstacles[int(random(1,3))];
    this.w = this.img.width /2.5;
    this.h = this.img.height /2.5;
    this.x = width;
    this.y = height - this.h*1.2;
    this.score = 0;
  }
  
  move(){
    this.x -= 8;
  }
  
  show(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
}