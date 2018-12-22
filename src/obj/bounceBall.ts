import { Vector2D } from "../core/vector";

export default class BounceBall {
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  setup(location: Vector2D, velocity: Vector2D, r: number, w: number, h: number): void {
    this.location = location.clone();
    this.velocity = velocity.clone();
    this.r = r;
    this.w = w;
    this.h = h;  
  }

  update(): void {
    this.location.add(this.velocity);
    this.bounceIfNeeded();
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.r, 0, Math.PI*2); // 绘制
    this.ctx.stroke();
  }

  private bounceIfNeeded(): void {
    if (this.location.x <= 0 || this.w <= this.location.x) {
      this.velocity.x *= -1;
    }

    if (this.location.y <= 0 || this.h <= this.location.y) {
      this.velocity.y *= -1;
    }
  }

  private r: number;
  private w: number;
  private h: number;
  private location: Vector2D;
  private velocity: Vector2D;
  private ctx: CanvasRenderingContext2D;
}