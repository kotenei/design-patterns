abstract class Command {
  protected receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  public abstract execute(): void;
}

class ConcreteCommand extends Command {
  public execute(): void {
    this.receiver.action();
  }
}

class Invoker {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  public executeCommand() {
    this.command.execute();
  }
}

class Receiver {
  public action() {
    console.log("执行请求");
  }
}

function clientCode() {
  const receiver = new Receiver();
  const command = new ConcreteCommand(receiver);
  const invoker = new Invoker(command);
  invoker.executeCommand();
}

clientCode();
