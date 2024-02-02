abstract class Flyweight {
  public abstract operation(extrinsicstate: number): void;
}

class ConcreteFlyweight extends Flyweight {
  public operation(extrinsicstate: number): void {
    console.log("具体 Flyweight:" + extrinsicstate);
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  public operation(extrinsicstate: number): void {
    console.log(`不共享的具体 Flyweight:` + extrinsicstate);
  }
}

class FlyweightFactory {
  private flyweights: any = {};

  constructor() {
    this.flyweights["X"] = new ConcreteFlyweight();
    this.flyweights["Y"] = new ConcreteFlyweight();
    this.flyweights["Z"] = new ConcreteFlyweight();
  }

  public getFlyweight(key: string) {
    return this.flyweights[key];
  }
}

function clientCode() {
  let extrinsicstate = 22;

  const f = new FlyweightFactory();

  const fx = f.getFlyweight("X");
  fx.operation(--extrinsicstate);

  const fy = f.getFlyweight("Y");
  fx.operation(--extrinsicstate);

  const fz = f.getFlyweight("Z");
  fx.operation(--extrinsicstate);

  const uf = new UnsharedConcreteFlyweight();
  uf.operation(--extrinsicstate);
}

clientCode();
