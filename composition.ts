class Ocean {
  whale: Whale;

  constructor() {
    this.whale = new Whale("blue", 15);
  }
}

class Whale {
  constructor(public color: string, public age: number) {
    this.color = color;
    this.age = age;
  }
}
