abstract class Implementor {
  public abstract operation(): void;
}

class ConcreteImplementorA extends Implementor {
  public operation(): void {
    console.log("具体实现A的方法执行");
  }
}

class ConcreteImplementorB extends Implementor {
  public operation(): void {
    console.log("具体实现B的方法执行");
  }
}

class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public setImplementor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public operation() {
    this.implementor.operation();
  }
}

class RefinedAbstraction extends Abstraction {
  public operation(): void {
    this.implementor.operation();
  }
}

function clientCode() {
  let ab = new RefinedAbstraction(new ConcreteImplementorA());
  ab.operation();

  ab.setImplementor(new ConcreteImplementorB());
  ab.operation();
}

clientCode();
