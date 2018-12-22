import WalkerWorld from './world/walkerWorld';
import MouseWorld from './world/mouseWorld';
import BounceBallWorld from './world/bounceBallWorld';
import SimpleAccWorld from './world/simpleAccWorld';

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// const world = new WalkerWorld(canvas);
// const world = new MouseWorld(canvas);
// const world = new BounceBallWorld(canvas);
const world = new SimpleAccWorld(canvas);

world.start();
