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

// 工厂接口
interface IFactory {
  createOperat(): Operation;
}

// 加法工厂
class AddFactory implements IFactory {
  createOperat(): Operation {
    return new OperationAdd();
  }
}

// 减法工厂
class SubFactory implements IFactory {
  createOperat(): Operation {
    return new OperationSub();
  }
}

// 乘法工厂
class MulFactory implements IFactory {
  createOperat(): Operation {
    return new OperationMul();
  }
}

// 除法工厂
class DivFactory implements IFactory {
  createOperat(): Operation {
    return new OperationDiv();
  }
}

function clientCode() {
  const operFactory: IFactory = new AddFactory();
  const operation: Operation = operFactory.createOperat();
  operation.numberA = 1;
  operation.numberB = 2;
  console.log(operation.getResult());
}

clientCode();
