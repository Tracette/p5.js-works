class Bird {
  constructor(){
    this.img = imgBird[2];
    this.w = this.img.width /4;
    this.h = this.img.height/4;
    this.x = width;
    this.y = random(height/3,height/6);
    this.score = 0;
  }
  
  move(){
    this.x -= 9;
  }
  
  show(){
    image(this.img,this.x, this.y, this.w, this.h);
  }
  
  update(){
    this.img = imgBird[index%2+1];
  }
}