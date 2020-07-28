type AnyFunc = (...args: Array<any>) => any;
type ReturnFunc<E extends AnyFunc> = (...args: Parameters<E>) => ReturnType<E>;

export function performanceChecker<E extends AnyFunc>(func: E): ReturnFunc<E> {
  const funcName: string = func.name;
  return function(...args: Parameters<E>): ReturnType<E> {
    console.time(funcName);
    const results = func(...args);
    console.timeEnd(funcName);
    return results;
  };
}
