// 发起人
class Originator {
  public state: string;

  constructor(state: string) {
    this.state = state;
  }

  // 保存状态
  public createMemento() {
    return new Memento(this.state);
  }

  // 恢复状态
  public setMemento(memento: Memento) {
    this.state = memento.state;
  }

  public show(): void {
    console.log("state = " + this.state);
  }
}

// 备忘录
class Memento {
  public state: string = "";
  constructor(state: string) {
    this.state = state;
  }
}

// 管理者
class Caretaker {
  public memento: Memento | undefined;
}

function clientCode() {
  // 初始状态 on
  const o = new Originator("on");
  o.show();

  // 保存状态
  const c = new Caretaker();
  c.memento = o.createMemento();

  // 改变状态
  o.state = "off";
  o.show();

  // 还原初始状态
  o.setMemento(c.memento);
  o.show()
}

clientCode();
