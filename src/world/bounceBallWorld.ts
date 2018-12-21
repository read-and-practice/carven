import { Vector2D } from '../core/vector';
import World from './world';

export default class BounceBallWorld extends World {
  start() {
    this.setup();

    setInterval(() => this.draw(), 10);
  }

  protected setup(): void {
    this.pos = this.center.clone();
    this.velocity = new Vector2D(10, 11);
    this.ellipse = new Ellipse(this.ctx);
    this.r1 = 20;
  }

  protected draw(): void {
    // this.clear();
    this.ellipse.draw(this.pos.x, this.pos.y, this.r1, 0);
    this.move();
  }

  private move(): void {
    this.pos.add(this.velocity);
    this.bounceIfNeeded();
  }

  private bounceIfNeeded(): void {
    if (this.pos.x <= 0 || this.canvasWidth <= this.pos.x) {
      this.velocity.x *= -1;
    }

    if (this.pos.y <= 0 || this.canvasHeight <= this.pos.y) {
      this.velocity.y *= -1;
    }
  }

  private r1: number;
  private pos: Vector2D;
  private velocity: Vector2D;
  private ellipse: Ellipse;
}

class Ellipse {
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(x:number, y:number, r1: number, r2: number): void {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r1, 0, Math.PI*2); // 绘制
    this.ctx.stroke();
  }

  private ctx: CanvasRenderingContext2D;
}