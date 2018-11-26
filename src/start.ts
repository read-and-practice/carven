import Walker from './walker';
import DomUtils from './domUtils';

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const walker = new Walker(ctx);

canvas.onmousemove = (ev: MouseEvent) => {
  const pos: Pos2d = DomUtils.GetOffset(ev);
  console.log(`x:${pos.x}, y:${pos.y}`);
}

setInterval(() => {
  walker.draw();
}, 100);
