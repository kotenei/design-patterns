// 运算类
class Operation {
  public numberA: number = 0;
  public numberB: number = 0;

  public getResult(): number {
    return 0;
  }
}

// 加法运算类
class OperationAdd extends Operation {
  public getResult(): number {
    return this.numberA + this.numberB;
  }
}

// 减法运算类
class OperationSub extends Operation {
  public getResult(): number {
    return this.numberA - this.numberB;
  }
}

// 乘法运算类
class OperationMul extends Operation {
  public getResult(): number {
    return this.numberA * this.numberB;
  }
}

// 除法运算类
class OperationDiv extends Operation {
  public getResult(): number {
    if (this.numberB === 0) {
      throw "除数不能为0";
    }
    return this.numberA / this.numberB;
  }
}

type operate = "+" | "-" | "*" | "/";

// 运算工厂类，根据运算符返回相应的运算实例
export default class OperationFactory {
  public static createOperate(operate: operate): Operation {
    switch (operate) {
      case "+":
        return new OperationAdd();
      case "-":
        return new OperationSub();
      case "*":
        return new OperationMul();
      case "/":
        return new OperationDiv();
    }
  }
}
