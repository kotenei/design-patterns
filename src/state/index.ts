// 抽象状态类， 定义一个与接口以封装与 Context 的一个特定状态相关的行为。
abstract class State {
  public abstract handle(context: Context): void;
}

// 具体状态A，每一个子类实现一个与 Context 的一个状态相关的行为
class ConcreteStateA extends State {
  public handle(context: Context): void {
    context.state = new ConcreteStateB();
  }
}

class ConcreteStateB extends State {
  public handle(context: Context): void {
    context.state = new ConcreteStateA();
  }
}

// Context 类，维护一个 ConcreteState 子类的实例
class Context {
  public state: State;

  constructor(state: State) {
    this.state = state;
  }

  public Request(): void {
    this.state.handle(this);
  }
}

function clientCode() {
  const state = new ConcreteStateA();
  const context: Context = new Context(state);
  context.Request();
  context.Request();
}

clientCode();
