interface Prototype {
  name: string;
  say(): void;
  clone(): Prototype;
}

class Dog implements Prototype {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public say(): void {
    console.log(`My name is ${this.name}`);
  }

  clone(): Prototype {
    const clone = Object.create(this) as Prototype;
    // clone.name = this.name;
    // clone.say = this.say;
    return clone;
  }
}

function clientCode() {
  const dog = new Dog("lucky");
  const dog2 = dog.clone();
  dog2.name = "cookie";

  dog.say();
  dog2.say();
}

clientCode();
