import Utils from '../utils/utils';

const canvasWidth = 500;
const canvasHeight = 500;

export default class Walker {
  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
    this.w = 2;
    this.h = 2;
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
  }

  public draw(): void {
    this.move();
    this.display();
  }

  public display(): void {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  public move(): void {
    const step = Utils.randomRange(0, 10);
    const stepX = Utils.randomRange(-step, step);
    const stepY = Utils.randomRange(-step, step);

    this.x += stepX;
    this.y += stepY;
  }

  private w: number;
  private h: number;
  private x: number;
  private y: number;
  private ctx: CanvasRenderingContext2D;
}