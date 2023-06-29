class Structure {
  private averageSalary: number;
  private location: string;
  public company: ConcreteCompany;
  constructor(salary: number, location: string, company: ConcreteCompany) {
    this.averageSalary = salary;
    this.location = location;
    this.company = company;
  }
}

interface ConcreteCompany {
  doOperation(): void;
}

class Bank implements ConcreteCompany {
  doOperation(): void {
    console.log("doing some transfers");
  }
}

class Restourant implements ConcreteCompany {
  doOperation(): void {
    console.log("doing some food");
  }
}

const tbcBank = new Structure(100, "tbilisi", new Bank());

const restourant = new Structure(1000, "batumi", new Restourant());
