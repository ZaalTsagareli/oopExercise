class Building {
  constructor(private resitends: Resident[]) {
    this.resitends = resitends;
  }
}

class Resident {
  constructor(private apartamentId: number) {
    this.apartamentId = apartamentId;
  }
}

const residents = [new Resident(1), new Resident(2), new Resident(3)];

const bulding = new Building(residents);
