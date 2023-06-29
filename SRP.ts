//არსებობს ნეტვორკ კლასი რომელსაც ევალება მხოლოდ იუზერების ნეტვორკში დამატება
// და აქვს თავისი ნეტვორკ აიდი, არსებობს იუზერ კლასი რომელსაც შეუძლია ჩათში მესიჯის გაგზავნა
// და აქვს თავისი იუზერ აიდი, ასევე არსებობს ჩათი რომელიც პასუხისმგებელია მესჯის გაგზავნაზე

class Message {
  constructor(
    public sender: User,
    public receiver: User,
    public content: string
  ) {}
}

class Chat {
  public sendMessage(message: Message): void {
    console.log(
      `${message.sender.userId} sending data: {${message.content}} to ${message.receiver.userId}`
    );
  }
}

class User {
  constructor(public userId: number, readonly active: boolean) {
    this.active = active;
    this.userId = userId;
  }

  public sendMessage(message: string, receiver: User, chat: Chat): void {
    const network = Network.getInstance();
    const senderExists = network.isUserActive(this);
    const receiverExists = network.isUserActive(receiver);

    if (senderExists && receiverExists) {
      const messageObject = new Message(this, receiver, message);
      chat.sendMessage(messageObject);
    }
  }
}

class Network {
  private static instance: Network;
  private users: User[];

  private constructor(private ip: number) {
    this.ip = ip;
    this.users = [];
  }

  public static getInstance(ip?: number): Network {
    if (!Network.instance) {
      if (!ip) throw new Error("ip not provided");
      Network.instance = new Network(ip);
    }
    return Network.instance;
  }

  public joinUser(user: User): void {
    this.users.push(user);
  }

  public isUserActive(user: User): boolean {
    const userExists = this.users.find(
      (u) => u.userId === user.userId && u.active
    );
    return !!userExists;
  }
}

const user1 = new User(90, true);
const user2 = new User(100, true);
const network = Network.getInstance();

network.joinUser(user1);
network.joinUser(user2);

user1.sendMessage("hello", user2, new Chat());
