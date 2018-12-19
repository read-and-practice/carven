import Walker from '../obj/walker';

interface IWorld {
  start: () => void;
}

export default class WalkerWorld implements IWorld {
  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
  }

  public start(): void {
    this.setup();
    
    setInterval(() => {
      this.draw();
    }, 100);
  }

  private setup(): void {
    this.walker = new Walker(this.ctx);
  }

  private draw(): void {
    this.walker.draw();
  }

  private ctx: CanvasRenderingContext2D;
  private walker: Walker;

}