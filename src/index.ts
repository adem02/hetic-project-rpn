interface IOperatorSets {
    [operator: string]: (firstOperand: number, secondOperand: number) => number;
}

function evalRPN(tokens: string[]): number {
    // sets of operators and their corresponding functions
    const operatorSets: IOperatorSets = {
        '+': (firstOperand: number, secondOperand: number) => firstOperand + secondOperand,
        '-': (firstOperand: number, secondOperand: number) => firstOperand - secondOperand,
        '*': (firstOperand: number, secondOperand: number) => firstOperand * secondOperand,
        '/': (firstOperand: number, secondOperand: number) => firstOperand / secondOperand | 0, // truncate toward zero (floor)
        'MOD': (firstOperand: number, secondOperand: number) => firstOperand % secondOperand | 0, // truncate toward zero (floor)
        'NEGATE': (firstOperand: number) => -firstOperand,
    };

    // initialising empty stack to calculate
    const stack: number[] = [];

    // looping the whole tokens array
    for (const token of tokens) {
        // if token is an operator, pop the last two operands from stack and calculate
        if (operatorSets[token] != null) {
            // pop the last two operands from stack

            if (token === "NEGATE") {
                const firstOperand = stack.pop();
                stack.push(operatorSets[token](firstOperand, 0));
                continue;
            }

            const secondOperand = stack.pop();
            const firstOperand = stack.pop();

            // throw error if there is division by zero
            if (token === '/' && secondOperand === 0) throw new Error('Division by zero');

            // throw error if there is no operand to calculate
            if (firstOperand == null || secondOperand == null) throw new Error('Invalid RPN expression');

            // push the result back to stack
            stack.push(operatorSets[token](firstOperand, secondOperand));
        } else {
            // if token is not an operator, push it to stack
            if (isNaN(Number(token))) throw new Error('Invalid RPN expression ' + token);

            // throw error if there is negative number, use NEGATE instead
            if (Number(token) < 0) throw new Error('Expression cannot be negative, use NEGATE instead ' + token);

            // push the number to stack
            stack.push(Number(token));
        }
    }

    if (stack.length > 1) throw new Error('Invalid RPN expression');

    return stack[0];
};

console.log(evalRPN(["1", "-1", "+"]));