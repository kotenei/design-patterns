class SubSystemOne {
  public methodOne(): void {
    console.log("子系统方法一");
  }
}

class SubSystemTwo {
  public methodTwo(): void {
    console.log("子系统方法二");
  }
}

class Facade {
  private one: SubSystemOne;
  private two: SubSystemTwo;

  constructor() {
    this.one = new SubSystemOne();
    this.two = new SubSystemTwo();
  }

  public methodA() {
    this.one.methodOne();
    this.two.methodTwo();
  }

  public methodB() {
    this.two.methodTwo();
  }
}

function clientCode() {
  const facade = new Facade();
  facade.methodA();
}

clientCode();
