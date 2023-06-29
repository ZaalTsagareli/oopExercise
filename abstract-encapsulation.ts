abstract class Car {
  public speed: number;
  public model: string;
  protected onwerId: number;
  public constructor(model: string, speed: number, onwerId: number) {
    this.model = model;
    this.speed = speed;
    this.onwerId = this.onwerId;
  }
  abstract startEngine(): void;

  abstract stopEngine(): void;

  public getOnwerId() {
    return this.onwerId;
  }
}

class BMW extends Car {
  startEngine(): void {
    console.log("BMW engine is starting");
  }
  stopEngine(): number {
    throw new Error("BMW engine is stoping");
  }
}

const e36 = new BMW("e36", 200, 43213);
