//your code here

class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = this.constructor.name;
  }
}

function evalString(expr) {
  // Check for invalid operators combinations
  if (expr.includes('++') || expr.includes('--') || expr.includes('//') || expr.includes('/*') || expr.includes('*/') || expr.includes('+/') || expr.includes('-/')) {
    throw new InvalidExprError();
  }

  // Check for invalid start and end operators
  if (/^[+/*]/.test(expr)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  } else if (/[-+/*]$/.test(expr)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  // Check for invalid characters
  if (!/^[0-9+\-*/\s]+$/.test(expr)) {
    throw new OutOfRangeError(expr.match(/[^0-9+\-*/\s]/)[0]);
  }

  // Evaluate the expression
  return eval(expr);
}

// Test the function with some valid and invalid expressions
try {
  console.log(evalString('1+2-3*4/5')); // Output: -0.6
  console.log(evalString('-10 + 5')); // Output: -5
  console.log(evalString('1 + a')); // Throws OutOfRangeError
  console.log(evalString('1++2')); // Throws InvalidExprError
  console.log(evalString('*2+3')); // Throws SyntaxError
  console.log(evalString('4/2-')); // Throws SyntaxError
} catch (error) {
  console.error(error.name + ': ' + error.message);
}
