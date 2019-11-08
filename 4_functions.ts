function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

// =======

interface MyPosition {
  x: number;
  y: number;
}

interface MyPositionWithDefault extends MyPosition {
  default: number
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?:number, b?: number) {
  if (!a && !b) {
    return { x: 0, y: 0 }
  }

  if (!b) {
    return { x: 0, y: 0, default: a}
  }

  return { x: a, y: b }
}

console.log('Empty: ', position());
console.log('A: ', position(2));
console.log('A & B: ', position(25, 40));
