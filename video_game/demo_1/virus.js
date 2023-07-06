class Virus {
  constructor() {
    this.r = 25;
    this.x = random(width,width+1500);
    this.y = 150;
  }
  
  move(){
    this.x -= 1;

  }
  
  show(){
    image(virusImg,this.x,this.y,54,55);

  }
}