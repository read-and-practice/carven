import World from "./world";
import Mover from "../obj/mover";

export default class SimpleAccWorld extends World {
  start() {
    this.setup();
    setInterval(() => this.draw(), 10);
  }

  protected setup(): void {
    this.mover = new Mover(this.ctx);
    this.mover.setup(this.canvasWidth, this.canvasHeight);
  }

  protected draw(): void {
    // this.clear();
    this.mover.update();
    this.mover.draw();
  }

  private mover: Mover;
}