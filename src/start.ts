// import Walker from './walker';
// import DomUtils from './utils/domUtils';
import WalkerWorld from './world/walkerWorld';

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// const walker = new Walker(ctx);

// canvas.onmousemove = (ev: MouseEvent) => {
//   const pos: Pos2d = DomUtils.GetOffset(ev);
//   console.log(`x:${pos.x}, y:${pos.y}`);
// }

const world = new WalkerWorld(ctx);
world.start();

