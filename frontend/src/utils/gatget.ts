export class Gatgets {
  public static throttle(fn: Function, wait: number = 300) {
    let inThrottle: boolean,
      lastFn: ReturnType<typeof setTimeout>,
      lastTime: number;
    return function (this: any) {
      const context = this,
        args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    };
  }

  public static isTweenPlaying(...tweens: Phaser.Tweens.Tween[]): boolean {
    for (let index = 0; index < tweens.length; index++) {
      const t = tweens[index];
      if (t?.isPlaying()) {
        return true;
      }
    }

    return false;
  }
}
