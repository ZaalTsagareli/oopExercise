class Bird {
  fly(): void {
    console.log("Flying...");
  }
}

class Ostrich extends Bird {
  fly(): void {
    throw new Error("Ostriches cannot fly.");
  }

  run(): void {
    console.log("Running...");
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly();
}

const bird = new Bird();
makeBirdFly(bird);

const ostrich = new Ostrich();
makeBirdFly(ostrich);
