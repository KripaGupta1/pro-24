class Dustbin {
    constructor(x,y,width,height){
      var options = {
        'resistance':0.8,
        'friction':1.0,
        'density':1.5,
        'isStatic':true
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();  
    }
}