abstract class Mediator {
  public abstract send(message: string, colleague: Colleague): void;
}

abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class ConcreteMediator extends Mediator {
  private colleague1!: ConcreteColleague1;
  private colleague2!: ConcreteColleague2;

  public setCol1(colleague1: ConcreteColleague1): void {
    this.colleague1 = colleague1;
  }

  public setCol2(colleague2: ConcreteColleague1): void {
    this.colleague2 = colleague2;
  }

  public send(message: string, colleague: Colleague): void {
    if (colleague === this.colleague1) {
      this.colleague1.notify(message);
    } else {
      this.colleague2.notify(message);
    }
  }
}

class ConcreteColleague1 extends Colleague {
  public send(message: string): void {
    this.mediator.send(message, this);
  }

  public notify(message: string) {
    console.log("某某1得到信息:" + message);
  }
}

class ConcreteColleague2 extends Colleague {
  public send(message: string): void {
    this.mediator.send(message, this);
  }

  public notify(message: string) {
    console.log("某某2得到信息:" + message);
  }
}

function clientCode() {
  const mediator = new ConcreteMediator();

  const c1 = new ConcreteColleague1(mediator);
  const c2 = new ConcreteColleague2(mediator);

  mediator.setCol1(c1);
  mediator.setCol2(c2);

  c1.send('吃过饭了吗?');
  c2.send('没有呢，你打算请客?')
}

clientCode();
