// 客户所期待的接口
class Target {
  public request(): void {
    console.log("普通请求");
  }
}

// 需要适配的类
class Adaptee {
  public specificRequest() {
    console.log("特殊请求");
  }
}

// 通过内部包装一个 Adaptee 对象，把源接口转换成目标接口
class Adapter extends Target {
  private adaptee: Adaptee = new Adaptee();

  public request(): void {
    this.adaptee.specificRequest();
  }
}

function clientCode() {
  const target: Target = new Adapter();
  target.request()
}

clientCode();
