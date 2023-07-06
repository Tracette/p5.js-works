class Kill {
  constructor() {
    this.r = 100;
    this.x = random(width,width+3500);
    this.y = height - this.r;
  }
  
  move(){
    this.x -= 2;
  }
  
  show(){
   
    image(killImg, this.x,this.y, 104,100);

  }
}