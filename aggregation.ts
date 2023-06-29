class Carr {
  wheels: Wheel[];

  constructor(wheels: Wheel[]) {
    this.wheels = wheels;
  }
}

class Wheel {
  color: string;
  width: number;
  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }
}

const wheel1 = new Wheel("black", 15);

const wheel2 = new Wheel("white", 20);
const car = new Carr([wheel1, wheel2]);
