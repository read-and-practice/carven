interface IVector<T> {
  // add vectors
  add: (v: T) => T;

  // subtract vectors
  sub: (v: T) => T;

  // scale the vector with multiplication
  mult: (s: number) => T;

  // scale the vector with division
  div: (s: number) => T;

  // calculate the magnitude of a vector
  mag: () => number;

  // set the megnitude of a vector
  // setMag: (m: number) => void;

  // normalize the vector to a unit length of 1
  normalize: () => T;

  // limit the magnitude of a vector
  // limit: (l: number) => void;

  // the heading of a vector expressed as an angle
  // heading2D: () => number;

  // rotate a 2D vector by an angle
  // rotate: (angle: number) => void;
  
  // linear interpolate to another vector
  // lerp: () => void;

  // the Eulidean distance between two vectors (considered as points)
  // dist: () => number;

  // find the angle between two vectors
  // angleBetween: (v: Vector) => number;

  // the doc product of two vectors
  // dot: (v: Vector) => number;

  // the cross product of two vectors (only relevant in three dimensions)
  // cross: (v: Vector) => Vector;

  // make a random 2D vector
  // random2D: () => Vector;

  // make a random 3D vector
  // random3D: () => Vector;
}

export class Vector2D implements IVector<Vector2D> {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  add(v: Vector2D): this {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v: Vector2D): this {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mult(n: number): this {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n: number): this {
    if (n === 0) {
      throw new Error();
    }
    this.x /= n;
    this.y /= n;
    return this;
  }

  mag(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  clone(): Vector2D {
    const cloned = new Vector2D(this.x, this.y);
    return cloned;
  }

  normalize(): this {
    const m = this.mag();
    if (m > 0) {
      this.div(m);
    }
    return this;
  }
  

}
