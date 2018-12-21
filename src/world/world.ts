import { Vector2D } from '../core/vector';

export default abstract class World {
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.origin = new Vector2D(0, 0);
    this.center = new Vector2D(this.canvasWidth / 2, this.canvasHeight / 2);
  }

  abstract start(): void;

  protected abstract draw(): void;
  protected abstract setup(): void;

  // 设置背景色
  protected background(color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  // 移动绘制的原点 (origin的初始位置在 0,0 )
  protected translate(offset: Vector2D): void {
    this.origin.add(offset);
  }

  // 画线
  protected line(startX: number, startY: number, endX: number, endY: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(startX + this.origin.x, startY + this.origin.y);
    this.ctx.lineTo(endX + this.origin.x, endY + this.origin.y);
    this.ctx.stroke();
  }

  // 清空画布
  protected clear(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
  
  protected ctx: CanvasRenderingContext2D;
  protected canvas: HTMLCanvasElement;
  protected canvasWidth: number;
  protected canvasHeight: number;
  protected origin: Vector2D;
  protected center: Vector2D;
}