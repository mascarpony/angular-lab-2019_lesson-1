interface Square {
  readonly id: string;
  color?: string;
  width: number
}

const square1: Square = {
  id: '123',
  color: 'red',
  width: 4
};

interface SquareWithArea extends Square {
  getArea: () => number
}

const square2: SquareWithArea = {
  id: '1',
  width: 2,
  getArea: () => this.width**2
};

// ==========

interface IClock {
  time: Date;
  setTime: (date: Date) => void;
}

class Clock implements IClock {
  time = new Date();

  setTime(date) {
    this.time = date;
  }
}

// =======
interface Styles {
  [key: string]: string
}
const css: Styles = {
  color: '#ccc',
  width: '100%'
};
