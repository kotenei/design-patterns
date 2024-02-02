abstract class Handler {
  protected successor!: Handler;

  //   constructor(successor: Handler) {
  //     this.successor = successor;
  //   }

  public setSuccessor(successor: Handler) {
    this.successor = successor;
  }

  public abstract HandleRequest(request: number): void;
}

class ConcreteHandler1 extends Handler {
  public HandleRequest(request: number): void {
    if (request >= 0 && request < 10) {
      console.log(`h1 处理请求 ${request}`);
    } else if (this.successor) {
      this.successor.HandleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  public HandleRequest(request: number): void {
    if (request >= 10 && request < 20) {
      console.log(`h2 处理请求 ${request}`);
    } else if (this.successor) {
      this.successor.HandleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  public HandleRequest(request: number): void {
    if (request >= 20 && request < 30) {
      console.log(`h3 处理请求 ${request}`);
    } else if (this.successor) {
      this.successor.HandleRequest(request);
    }
  }
}

function clientCode() {
  const h1 = new ConcreteHandler1();
  const h2 = new ConcreteHandler2();
  const h3 = new ConcreteHandler3();
  h1.setSuccessor(h2);
  h2.setSuccessor(h3);

  const requests = [2, 3, 14, 22, 18, 2, 27, 20];

  requests.forEach((item) => {
    h1.HandleRequest(item);
  });
}

clientCode();
