// 现金收费抽象类
abstract class CashSuper {
  public abstract acceptCash(money: number): number;
}

// 正常收费子类
class CashNormal implements CashSuper {
  public acceptCash(money: number): number {
    return money;
  }
}

// 打折收费子类
class CashRebate implements CashSuper {
  constructor(public moneyRebate: number) {}

  public acceptCash(money: number): number {
    return money * this.moneyRebate;
  }
}

// 返利收费子类
class CashReturn implements CashSuper {
  constructor(public moneyCondition: number, public moneyReturn: number) {}

  public acceptCash(money: number): number {
    if (money >= this.moneyCondition) {
      return money - Math.floor(money / this.moneyCondition) * this.moneyReturn;
    }
    return money;
  }
}

// 现金上下文
class CashContext {
  private cashSuper: CashSuper;

  constructor(cashSuper: CashSuper) {
    this.cashSuper = cashSuper;
  }

  public getResult(money: number): number {
    return this.cashSuper.acceptCash(money);
  }
}

function clientCode() {
  // 无优惠
  let cashContext = new CashContext(new CashNormal());
  console.log(cashContext.getResult(400));

  // 打8折
  cashContext = new CashContext(new CashRebate(0.8));
  console.log(cashContext.getResult(400));

  // 满300减100
  cashContext = new CashContext(new CashReturn(300, 100));
  console.log(cashContext.getResult(400));
}

clientCode();
