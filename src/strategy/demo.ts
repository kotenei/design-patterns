import CashContext, { CashNormal, CashRebate, CashReturn } from "./index";

// 无优惠
let cashContext = new CashContext(new CashNormal());
console.log(cashContext.getResult(400));

// 打8折
cashContext = new CashContext(new CashRebate(0.8));
console.log(cashContext.getResult(400));

// 满300减100
cashContext = new CashContext(new CashReturn(300, 100));
console.log(cashContext.getResult(400));
