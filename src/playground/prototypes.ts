function Point(this: any, x: number, y: number) {
    this.x = x;
    this.y = y;
}

Point.from = function(obj: any) {
    const { x, y } = obj;
    // @ts-ignore
    return new Point(x, y);
};

Point.prototype.move = function(x: number, y: number) {
    this.x += x;
    this.y += y;
}

Point.prototype.toString = function() {
    return `[${this.x}, ${this.y}]`;
}

console.log('function prototype:', (function() {}).prototype);
console.log('lambda prototype:', (() => {}).prototype);

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);

// @ts-ignore
const p = new Point(1, 2);
p.move(-5, 10);

console.log(p);
console.log(p.toString());
console.log(p + '');
