class Husband {
  constructor(private wife: Wife) {
    this.wife = wife;
  }
}

class Wife {
  constructor(public name: string, public lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

const woman = new Wife("elene", "suramelashvili");

const man = new Husband(woman);

//one to one relationship
