class Virus {
  constructor(){
    this.img = imgVirus[2];
    this.w = this.img.width /3;
    this.h = this.img.height/3;
    this.x = width;
    this.y = random(height/2.5,height/6);
    this.score = 0;
    this.yspeed = 1.5;
  }
  
  move(){
    this.x -= 7;
    if (this.y < height/6 || this.y> height/2.5){
      this.yspeed = -this.yspeed;
    } 
    this.y += this.yspeed;
  }
    
  
  show(){
    image(this.img,this.x, this.y, this.w, this.h);
  }
  
  update(){
    this.img = imgVirus[index%2+1];
  }
}