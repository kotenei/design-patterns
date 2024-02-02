abstract class AbstractExpression {
  public abstract interpret(context: Context): void;
}

class TerminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log("终端解释器");
  }
}

class NonterminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log("非终端解释器");
  }
}

class Context {
  constructor() {}
  public input!: string;
  public output!: string;
}

function clientCode() {
  const context = new Context();
  const list: AbstractExpression[] = [];
  list.push(new TerminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new TerminalExpression());

  list.forEach((item) => {
    item.interpret(context);
  });
}


clientCode()