// 现金收费抽象类
abstract class CashSuper {
  public abstract acceptCash(money: number): number;
}

// 正常收费子类
export class CashNormal implements CashSuper {
  public acceptCash(money: number): number {
    return money;
  }
}

// 打折收费子类
export class CashRebate implements CashSuper {
  constructor(public moneyRebate: number) {}

  public acceptCash(money: number): number {
    return money * this.moneyRebate;
  }
}

// 返利收费子类
export class CashReturn implements CashSuper {
  constructor(public moneyCondition: number, public moneyReturn: number) {}

  public acceptCash(money: number): number {
    if (money >= this.moneyCondition) {
      return money - Math.floor(money / this.moneyCondition) * this.moneyReturn;
    }
    return money;
  }
}

// 现金上下文
export default class CashContext {
  private cashSuper: CashSuper;

  constructor(cashSuper: CashSuper) {
    this.cashSuper = cashSuper;
  }

  public getResult(money: number): number {
    return this.cashSuper.acceptCash(money);
  }
}
