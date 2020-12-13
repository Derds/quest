class Materializer {
    constructor(targetName) {
      this.target = targetName;
      this.activated = false;
    }

    activate(){
        this.activated = true;
    }
    
// i am not happy about having to use the following z instead of s :( but fine
    materialize(){
        if(this.activated)
        {
            return this.target;
        }
        else{
            return;
        }
    }

}
    // your code here
const m = new Materializer('Kevin');
console.log(m.activated); 