class Developer {
  salary: number;
  developerExpereince: DeveloperExpereince;
  writeCode() {
    this.developerExpereince.doingTaskIn();
  }
}

interface DeveloperExpereince {
  doingTaskIn(): number;
}

class senior implements DeveloperExpereince {
  doingTaskIn(): number {
    console.log("doing task in 1 hour");
    return 1;
  }
}

class middle implements DeveloperExpereince {
  doingTaskIn(): number {
    console.log("doing task in 3 hours");
    return 3;
  }
}
