import Utils from './utils';

const canvasWidth = 500;
const canvasHeight = 500;

export default class Walker {
  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
    this.w = 2;
    this.h = 2;
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.step = 10;
  }

  public draw(): void {
    this.move();
    this.display();
  }

  public display(): void {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  public move(): void {
    const randomInt = Utils.getRandomInt(4);
    switch(randomInt) {
      case 0:
        this.x += this.step;
        break;
      case 1:
        this.x -= this.step;
        break;
      case 2:
        this.y += this.step;
        break;
      case 3:
        this.y -= this.step;
        break;
      default:
        ;
    }
  }

  private w: number;
  private h: number;
  private x: number;
  private y: number;
  private step: number;
  private ctx: CanvasRenderingContext2D;
}