class Chat1 {
  private membrs: Member[];
  constructor(userss: Member[]) {
    this.membrs = userss;
  }
}

class Member {
  private chatt: Chat1[];
  constructor(private chattt: Chat1[]) {
    this.chatt = chattt;
  }
}
