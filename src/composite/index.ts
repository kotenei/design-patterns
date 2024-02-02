// 为组合中的对象声明接口，在适当的情况下，实现所有类共有接口的默认行为
abstract class Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract add(component: Component): void;
  public abstract remove(component: Component): void;
  public abstract display(depth: number): void;
}

// Leaf 在组合中表示叶子点对象，叶子节点没有子节点
class Leaf extends Component {
  constructor(name: string) {
    super(name);
  }

  public add(component: Component): void {
    console.log("Cannot add to a leaf");
  }
  public remove(component: Component): void {
    console.log("Cannot remove from a leaf");
  }
  public display(depth: number): void {
    console.log(`${new Array(depth).join("-")} ${this.name}`);
  }
}

// Composite 定义有枝节点行为，用来存储子部件，
// 在 Component 接口中实现与子部件有关的操作，比如增加 Add 和删除 Remove
class Composite extends Component {
  private children: Component[] = [];

  constructor(name: string) {
    super(name);
  }

  public add(component: Component): void {
    this.children.push(component);
  }
  public remove(component: Component): void {
    this.children = this.children.filter((item) => item !== component);
  }
  public display(depth: number): void {
    console.log(`${new Array(depth).join("-")} ${this.name}`);

    this.children.forEach((item) => {
      item.display(depth + 2);
    });
  }
}

function clientCode() {
  const root: Composite = new Composite("root");
  root.add(new Leaf("Leaf A"));
  root.add(new Leaf("Leaf B"));

  const comp: Composite = new Composite("Composite X");
  comp.add(new Leaf("Leaf XA"));
  comp.add(new Leaf("Leaf XB"));

  root.add(comp);

  const comp2: Composite = new Composite("Composite XY");
  comp2.add(new Leaf("Leaf XYA"));
  comp2.add(new Leaf("Leaf XYB"));
  comp.add(comp2);

  const leaf = new Leaf("Leaf C");
  root.add(leaf);
  root.remove(leaf);

  root.display(1);
}

clientCode();
