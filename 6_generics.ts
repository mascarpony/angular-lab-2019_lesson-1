const arrOfNum: Array<number> = [1,2,3,4];
const arrOfStr: Array<string> = ['hi'];

function reverse<T>(arr: Array<T>): Array<T> {
  return arr.reverse();
}
