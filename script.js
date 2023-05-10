//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    const message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
    super(message);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    const message = "Expression should not have an invalid combination of expression";
    super(message);
    this.name = this.constructor.name;
  }
}

function evalString(expression) {
  const regex = /(\+{2}|\-{2}|\*\/|\+\/|\/\+|\*\-|\-\*|\-\+|\+\-)/;
  if (expression.match(regex)) {
    throw new InvalidExprError();
  }
  if (/^[*/+]/.test(expression)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  if (/[\/*+-]$/.test(expression)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }
  const numbers = expression.split(/[\s*+\-\/]/);
  const invalidChars = expression.replace(/[0-9\s*+\-\/]/g, "");
  if (invalidChars.length > 0) {
    throw new OutOfRangeError(invalidChars[0]);
  }
  return eval(expression);
}

try {
  const result = evalString("1+2*3- 4 / 2");
  console.log(result); // logs 5
} catch (error) {
  console.error(error);
}
