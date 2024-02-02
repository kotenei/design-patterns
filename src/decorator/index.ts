interface Component {
  operation(): void;
}

class ConcreateComponent implements Component {
  public operation(): void {
    console.log("具体对象的操作");
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): void {
    if (this.component) {
      this.component.operation();
    }
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): void {
    super.operation();
    console.log("具体装饰对象A的操作");
  }
}

class ConcreteDecoratorB extends Decorator {
  private AddBehavior() {}

  public operation(): void {
    super.operation();
    this.AddBehavior();
    console.log("具体装饰对象b的操作");
  }
}

function clientCode() {
  const c = new ConcreateComponent();
  const d1 = new ConcreteDecoratorA(c);
  const d2 = new ConcreteDecoratorB(d1);

  d2.operation();
}

clientCode();
