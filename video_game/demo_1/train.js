class Train {
  constructor() {
    this.r = 35;
    this.x = random(width,width+3500);
    this.y = height - this.r;
  }
  
  move(){
    this.x -= 3.5;
  }
  
  show(){
   
    image(dogImg, this.x,this.y, 71,25);

  }
}