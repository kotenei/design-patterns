// 产品类，由多个部件组件
class Product {
  parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public show(): void {
    console.log("产品 创建 ----");
    this.parts.forEach((item) => {
      console.log(item);
    });
  }
}

// 抽象建造者类，确定产品由两个部件 PartA 和 PartB 组成，并声明一个得到产品建造后结果的方法 getResult
abstract class Builder {
  public abstract buildPartA(): void;
  public abstract buildPartB(): void;
  public abstract getResult(): Product;
}

// 具体建造者类 A
class ConcreteBuilder1 extends Builder {
  private product: Product = new Product();

  public buildPartA(): void {
    this.product.add("部件 A");
  }
  public buildPartB(): void {
    this.product.add("部件 B");
  }
  public getResult(): Product {
    return this.product;
  }
}

// 具体建造者类 B
class ConcreteBuilder2 extends Builder {
  private product: Product = new Product();
  public buildPartA(): void {
    this.product.add("部件 X");
  }
  public buildPartB(): void {
    this.product.add("部件 Y");
  }
  public getResult(): Product {
    return this.product;
  }
}

// 指挥者类
class Director {
  public setConstructor(builder: Builder): void {
    builder.buildPartA();
    builder.buildPartB();
  }
}

function clientCode() {
  const director: Director = new Director();
  const builder1 = new ConcreteBuilder1();
  const builder2 = new ConcreteBuilder2();

  director.setConstructor(builder1);
  const product1 = builder1.getResult();
  product1.show();

  director.setConstructor(builder2);
  const product2 = builder2.getResult();
  product2.show();

}

clientCode();
