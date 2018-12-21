import DomUtils from '../utils/domUtils';
import { Vector2D } from '../core/vector';
import World from './world';

export default class WalkerWorld extends World {
  start(): void {
    this.setup();
  }

  protected setup(): void {
    this.translate(this.center);

    this.canvas.onmousemove = (ev: MouseEvent) => {
      const pos = DomUtils.GetOffset(ev);
      // console.log(`x:${pos.x}, y:${pos.y}`);
      this.mouseVector = new Vector2D(pos.x, pos.y);
      this.draw();
    };
  }

  protected draw(): void {
    this.clear();
    this.background('orange');
    this.mouseVector.sub(this.center);
    this.mouseVector.normalize().mult(100);
    this.line(0, 0, this.mouseVector.x, this.mouseVector.y);
  }

  private mouseVector: Vector2D;
}