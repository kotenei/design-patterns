abstract class Visitor {
  public abstract visitConcreteElementA(
    concreteElementA: ConcreteElementA
  ): void;
  public abstract visitConcreteElementB(
    concreteElementB: ConcreteElementB
  ): void;
}

abstract class Elm {
  public abstract accept(visitor: Visitor): void;
}

class ConcreteElementA extends Elm {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }
}

class ConcreteElementB extends Elm {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }
}

class ConcreteVisitor1 extends Visitor {
  public visitConcreteElementA(concreteElementA: any): void {
    console.log(`elementA被visitor1访问`);
  }
  public visitConcreteElementB(concreteElementB: any): void {
    console.log(`elementB被visitor1访问`);
  }
}

class ConcreteVisitor2 extends Visitor {
  public visitConcreteElementA(concreteElementA: any): void {
    console.log(`elementA被visitor2访问`);
  }
  public visitConcreteElementB(concreteElementB: any): void {
    console.log(`elementB被visitor2访问`);
  }
}

class ObjectStructure {
  private elements: Elm[] = [];

  public attach(element: Elm) {
    this.elements.push(element);
  }

  public detach(element: Elm) {
    this.elements = this.elements.filter((item) => item !== element);
  }

  public accept(visitor: Visitor) {
    this.elements.forEach((item) => {
      item.accept(visitor);
    });
  }
}

function clientCode() {
  const o = new ObjectStructure();
  o.attach(new ConcreteElementA());
  o.attach(new ConcreteElementB());

  const v1 = new ConcreteVisitor1();
  const v2 = new ConcreteVisitor2();

  o.accept(v1);
  o.accept(v2);
}


clientCode()