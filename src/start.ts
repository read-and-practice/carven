/// <reference path="./walker.ts" />

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const walker = new Walker(ctx);

setInterval(() => {
  walker.draw();
}, 100);
