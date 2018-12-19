import { IWorld } from './world';
import DomUtils from '../utils/domUtils';
import { Vector2D } from '../core/vector';

export default class WalkerWorld implements IWorld {
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  start(): void {
    this.setup();
  }

  private setup(): void {
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    
    this.center = new Vector2D(this.canvasWidth / 2, this.canvasHeight / 2);

    this.canvas.onmousemove = (ev: MouseEvent) => {
      const pos = DomUtils.GetOffset(ev);
      console.log(`x:${pos.x}, y:${pos.y}`);
      this.location = new Vector2D(pos.x, pos.y);
      this.draw();
    };
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.beginPath();
    this.ctx.moveTo(this.center.x, this.center.y);
    this.ctx.lineTo(this.location.x, this.location.y);
    this.ctx.stroke();
  }

  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private location: Vector2D;
  private canvasWidth: number;
  private canvasHeight: number;
  private center: Vector2D;
}