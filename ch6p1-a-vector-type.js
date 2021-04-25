class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;        
    }
    
    plus(vector) {
        vector.x = this.x + vector.x;
        vector.y = this.y + vector.y;
        return {x: vector.x, y: vector.y};
    }   

    minus(vector) {
        vector.x = this.x - vector.x;
        vector.y = this.y - vector.y;
        return {x: vector.x, y: vector.y};
    }

    get length() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));