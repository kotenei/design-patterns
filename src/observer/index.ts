// 主题（发布者）
abstract class Subject {
  // 观察者集合
  private observers: Observer[] = [];

  // 添加观察者
  public attach(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index < 0) {
      this.observers.push(observer);
    }
  }

  // 移除观察者
  public detach(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  // 通知
  public notify(): void {
    this.observers.forEach((item) => {
      item.update();
    });
  }
}

// 抽象观察者，为所有具体观察都定义一个接口，在得到主题的通知时更新自己
abstract class Observer {
  public abstract update(): void;
}

// 具体主题，将有关状态存入具体观察者对象，在具体主题的内部状态改变时，给所有登记过的观察者发出通知
class ConcreteSubject extends Subject {
  public subjectState: string = "";
}

// 具体观察者（订阅者），实现抽象观察者角色所要求的更新接口，以便使本身的状态与主题的状态协调。
class ConcreteObserver extends Observer {
  private name: string;
  private observerState: string = "";
  public subject: ConcreteSubject;

  constructor(subject: ConcreteSubject, name: string) {
    super();
    this.subject = subject;
    this.name = name;
  }

  public update(): void {
    this.observerState = this.subject.subjectState;
    console.log(`观察者${this.name}的新状态是${this.observerState}`);
  }
}

function clientCode() {
  const subject = new ConcreteSubject();
  subject.attach(new ConcreteObserver(subject, "X"));
  subject.attach(new ConcreteObserver(subject, "Y"));
  subject.attach(new ConcreteObserver(subject, "Z"));

  subject.subjectState = "ABC";
  subject.notify();
}

clientCode();
