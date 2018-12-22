import { Vector2D } from '../core/vector';
import World from './world';
import BounceBall from '../obj/bounceBall';

export default class BounceBallWorld extends World {
  start() {
    this.setup();
    setInterval(() => this.draw(), 10);
  }

  protected setup(): void {
    this.ball1 = new BounceBall(this.ctx);
    this.ball2 = new BounceBall(this.ctx);
    this.ball1.setup(this.center.clone(), new Vector2D(8, 12), 20, this.canvasWidth, this.canvasHeight);
    this.ball2.setup(this.center.clone(), new Vector2D(3, 7), 10, this.canvasWidth, this.canvasHeight);
  }

  protected draw(): void {
    this.clear();
    this.ball1.update();
    this.ball1.draw();
    this.ball2.update();
    this.ball2.draw();
  }

  private ball1: BounceBall;
  private ball2: BounceBall;
}
