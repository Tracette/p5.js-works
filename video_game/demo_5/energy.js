class Energy{
  constructor(){
    this.x = width/18;
    this.y = height/18;
    this.img = imgEnergy[3];
    this.w = this.img.width/3;
    this.h = this.img.height/12;
  }
  
  show(){
    image(this.img,this.x,this.y,this.w,this.img.h);
  }
  
  update(){
    this.img = imgEnergy[3 - collideOb];
  }
}