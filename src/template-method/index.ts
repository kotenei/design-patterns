abstract class AbstractClass {
  public abstract PrimitiveOperation1(): void;
  public abstract PrimitiveOperation2(): void;

  public TemplateMethod(): void {
    this.PrimitiveOperation1();
    this.PrimitiveOperation2();
  }
}

class ConcreteClassA extends AbstractClass {
  public PrimitiveOperation1(): void {
    console.log("具体类A方法1实现");
  }
  public PrimitiveOperation2(): void {
    console.log("具体类A方法2实现");
  }
}

class ConcreteClassB extends AbstractClass {
  public PrimitiveOperation1(): void {
    console.log("具体类B方法1实现");
  }
  public PrimitiveOperation2(): void {
    console.log("具体类B方法2实现");
  }
}

function clientCode() {
  let obj = new ConcreteClassA();
  obj.TemplateMethod();

  obj = new ConcreteClassB();
  obj.TemplateMethod();
}

clientCode();
