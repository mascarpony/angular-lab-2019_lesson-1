// class Car {
//   readonly model: string;
//   readonly numOfWheels: number = 4;
//
//   constructor(model: string) {
//     this.model = model;
//   }
// }

class Car {
  readonly numOfWheels = 4;

  constructor(readonly model: string) {}
}

// =======

class Animal {
  protected voice: string = '';
  public color: string = 'black';
  private go() {}
}

class Cat extends Animal {
  setVoice(voice: string) {
    this.voice = voice;
  }
}

const Alisa = new Cat();
Alisa.color = 'white';

// =======

abstract class Component {
  abstract render(): void;

  run() {
    this.render();
  }
}

interface IComponent {
  render: () => void;
}

// class AppComponent implements IComponent {
//   render(): void {
//     console.log('app')
//   }
// }

class AppComponent extends Component {
  render(): void {
    console.log('app')
  }
}
