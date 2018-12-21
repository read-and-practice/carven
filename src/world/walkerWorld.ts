import Walker from '../obj/walker';
import World from './world';

export default class WalkerWorld extends World {
  start(): void {
    this.setup();
    
    setInterval(() => {
      this.draw();
    }, 100);
  }

  protected setup(): void {
    this.walker = new Walker(this.ctx);
  }

  protected draw(): void {
    this.walker.draw();
  }

  private walker: Walker;
}