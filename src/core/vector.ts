interface IVector {
  // add vectors
  add: (v: IVector) => void;

  // subtract vectors
  sub: (v: IVector) => void;

  // scale the vector with multiplication
  // mult: (s: number) => void;

  // scale the vector with division
  // div: (s: number) => void;

  // calculate the magnitude of a vector
  // mag: () => number;

  // set the megnitude of a vector
  // setMag: (m: number) => void;

  // normalize the vector to a unit length of 1
  // normalize: () => void;

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

export class Vector2D implements IVector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  add(v: Vector2D): void {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v: Vector2D): void {
    this.x -= v.x;
    this.y -= v.y;
  }
}
