export default class Utils {
  static randomInt(max: number): number {
    const n = Math.random();
    return Math.floor(n * max);
  }

  static randomRange(start: number, end: number): number {
    if (end < start) {
      throw new Error('invalid range');
    }
    const range = end - start;
    const r = Math.random();
    return start + r * range;
  }

  static montecarlo(): number {
    while(true) {
      const r1 = Math.random();
      const probability = r1;
      const r2 = Math.random();
      if (r2 < probability) {
        return r1;
      }
    }
  }

  


}