class TargetingSolution {
    constructor(x,y,z) {
        this.x = x, 
        this.y = y, 
        this.z = z
    }
    
    target(){
        var s = '(' + this.x +', '+ this.y +', ' + this.z + ')';
        return s;
    }
}

const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
  });
  
  console.log(sln.target());
  console.log(this.x)