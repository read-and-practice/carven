import { Vector2D } from "../core/vector";
import Utils from "../utils/utils";

export default class Mover {
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  setup(w: number, h: number): void {
    this.location = new Vector2D(250, 250);
    this.velocity = new Vector2D(0, 0);
    // this.acceleration = new Vector2D(-0.001, 0.01);

    this.w = w;
    this.h = h;
  }

  update(): void {
    this.acceleration = Vector2D.random();
    // this.acceleration.mult(Utils.randomRange(0, 5));

    this.velocity.add(this.acceleration);
    this.velocity.limit(3);
    this.location.add(this.velocity);
    this.traverseIfNeeded();
  }
  
  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, 10, 0, Math.PI*2); // 绘制
    this.ctx.stroke();
  }
  
  private traverseIfNeeded(): void {
    if (this.location.x <= 0) {
      this.location.x = this.w;
    } else if (this.w <= this.location.x) {
      this.location.x = 0;
    }

    if (this.location.y <= 0) {
      this.location.y = this.h;
    } else if (this.h <= this.location.y) {
      this.location.y = 0;
    }
  }

  private w: number;
  private h: number;

  private acceleration: Vector2D;
  private velocity: Vector2D;
  private location: Vector2D;
  private ctx: CanvasRenderingContext2D;
}