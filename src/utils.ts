class Utils {
  public static getRandomInt(max: number): number {
    const n = Math.random();
    return Math.floor(n * max);
  }
}