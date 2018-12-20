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
    
    this.origin = new Vector2D(0, 0);
    this.center = new Vector2D(this.canvasWidth / 2, this.canvasHeight / 2);

    this.translate(this.center);

    this.canvas.onmousemove = (ev: MouseEvent) => {
      const pos = DomUtils.GetOffset(ev);
      // console.log(`x:${pos.x}, y:${pos.y}`);
      this.mouseVector = new Vector2D(pos.x, pos.y);
      // const m = this.mouseVector.clone().sub(this.center).mag();
      // console.log(m);

      this.draw();
    };
  }

  private background(color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.background('orange');
    this.mouseVector.sub(this.center);
    this.mouseVector.normalize().mult(100);
    this.line(0, 0, this.mouseVector.x, this.mouseVector.y);
  }

  // 移动原点
  private translate(offset: Vector2D): void {
    this.origin.add(offset);
  }

  // 画线
  private line(startX: number, startY: number, endX: number, endY: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(startX + this.origin.x, startY + this.origin.y);
    this.ctx.lineTo(endX + this.origin.x, endY + this.origin.y);
    this.ctx.stroke();
  }

  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private mouseVector: Vector2D;
  private canvasWidth: number;
  private canvasHeight: number;
  private center: Vector2D;
  private origin: Vector2D;
}