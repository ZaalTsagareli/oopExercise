//bad example
interface Vachine {
  fly(): void;
  ride(): void;
  sail(): void;
}

class Car implements Vachine {
  fly(): void {
    throw new Error("car cannt fly");
  }
  ride(): void {
    console.log("riding");
  }
  sail(): void {
    throw new Error("car cannot sail");
  }
}

class Ship implements Vachine {
  fly(): void {
    throw new Error("ship cannt fly.");
  }
  ride(): void {
    throw new Error("ship cannt sail.");
  }
  sail(): void {
    console.log("ship is sailing");
  }
}

class Airplain implements Vachine {
  fly(): void {
    console.log("airplain is flying");
  }
  ride(): void {
    throw new Error("airplain cannt ride.");
  }
  sail(): void {
    throw new Error("airplain cannt sail.");
  }
}

//good example
interface VachineRide {
  ride(): void;
}

interface VachineFly {
  fly(): void;
}

interface VachineSail {
  sail(): void;
}

class Car1 implements VachineRide {
  ride() {
    console.log("car is riding");
  }
}

class Ship1 implements VachineSail {
  sail() {
    console.log("ship is sailing");
  }
}

class Airplain1 implements VachineFly {
  fly(): void {
    console.log("airplain is flying");
  }
}
