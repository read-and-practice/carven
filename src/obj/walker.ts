import Utils from '../utils/utils';
import { Vector2D } from '../core/vector';

const canvasWidth = 500;
const canvasHeight = 500;

export default class Walker {
  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
    this.w = 2;
    this.h = 2;
    this.location = new Vector2D(canvasWidth / 2, canvasHeight / 2);
  }

  draw(): void {
    this.move();
    this.display();
  }

  display(): void {
    this.ctx.fillRect(this.location.x, this.location.y, this.w, this.h);
  }

  move(): void {
    const step = Utils.randomRange(0, 10);
    const velocity = new Vector2D(
      Utils.randomRange(-step, step),
      Utils.randomRange(-step, step));
    this.location.add(velocity);
  }

  private w: number;
  private h: number;
  private location: Vector2D;
  private ctx: CanvasRenderingContext2D;
}