import SimpleFactory from "./index";

const operation = SimpleFactory.createOperate("+");
operation.numberA = 1;
operation.numberB = 2;
console.log(operation.getResult());
