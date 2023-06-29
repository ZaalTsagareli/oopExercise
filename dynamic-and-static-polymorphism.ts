//dynamic polymorphism

class Animal {
  protected makeSound(): void {
    console.log("basic animal sound");
  }

  protected eat(): void {
    console.log("basic food for animal");
  }
}

class Dog extends Animal {
  protected makeSound(): void {
    console.log("wuf wuf");
  }

  protected eat(): void {
    console.log("eating bones");
  }
}
class Cat extends Animal {
  protected makeSound(): void {
    console.log("meaw meaw");
  }
  protected eat(): void {
    console.log("eating some fish");
  }
}

//static polymorphism

class Helper {
  public static calculate(num1: number, num2: number, operator: string): number;
  public static calculate(num1: number, num2: number): number;
  public static calculate(num1: number, num2: number, operator?: string) {
    if (operator) {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return "some operator error";
      }
    }

    return num1 + num2;
  }
}

Helper.calculate(3, 2);
