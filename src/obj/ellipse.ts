export default class Ellipse {
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