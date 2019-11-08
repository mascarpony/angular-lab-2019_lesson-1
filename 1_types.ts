const isLoading: boolean = true;

const num: number = 42;
const double: number = 4.2;

const hi: string = 'Hi';

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];

// Tuple
const contact: [string, number] = ['Dart', 1234567];

// Any
let tmp: any = 42;
//...
tmp = 'str';
tmp = [];

// Functions
function sayMyName(name: string): void {
  console.log(name);
}

// Never
function trowError(msg: string): never {
  throw new Error(msg);
}

// Type
type id = string | number;
const id1: id = '123';
const id2: id = 123;

type someType = string | undefined | null;
