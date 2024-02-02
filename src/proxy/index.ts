interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log("真实请求");
  }
}

class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    this.realSubject.request();
  }
}

function clientCode() {
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  proxy.request();
}

clientCode();
