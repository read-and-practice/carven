// import Walker from './walker';
// import DomUtils from './utils/domUtils';
// import WalkerWorld from './world/walkerWorld';
import MouseWorld from './world/mouseWorld';

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// const walker = new Walker(ctx);

// const world = new WalkerWorld(ctx);
const world = new MouseWorld(canvas);
world.start();

