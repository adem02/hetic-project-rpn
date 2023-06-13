import { IOperatorSets } from './types/operators';

// sets of operators and their corresponding functions
const operatorSets: IOperatorSets = {
    '+': (firstOperand: number, secondOperand: number) => firstOperand + secondOperand,
    '-': (firstOperand: number, secondOperand: number) => firstOperand - secondOperand,
    '*': (firstOperand: number, secondOperand: number) => firstOperand * secondOperand,
    '/': (firstOperand: number, secondOperand: number) => firstOperand / secondOperand | 0, // truncate toward zero (floor)
    'MOD': (firstOperand: number, secondOperand: number) => firstOperand % secondOperand | 0, // truncate toward zero (floor)
    'NEGATE': (firstOperand: number) => -firstOperand,
};

// function to check if token is a valid operator
function isValidOperator(token: string): boolean {
    return operatorSets[token] !== null;
}

// function to check if token is a valid number and greater than 0
function isValidOperand(token: string): boolean {
    return !isNaN(Number(token)) && Number(token) >= 0;
}

function evaluateOperator(token: string, stack: number[]): void {
    // if token is NEGATE, pop the last operand from stack and continue to next iteration
    if (token === 'NEGATE') {
        const firstOperand = stack.pop();
        stack.push(operatorSets[token](firstOperand, 0));
    } else {
        // pop the last two operands from stack
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        // throw error if there is division by zero
        if (token === '/' && secondOperand === 0) throw new Error('Division by zero');

        // throw error if there is no operand to calculate
        if (firstOperand === null || secondOperand === null) throw new Error('Invalid RPN expression');

        // push the result back to stack
        stack.push(operatorSets[token](firstOperand, secondOperand));
    }
}

function evaluateOperand(token: string, stack: number[]): void {
    // if token is not an operator, push it to stack
    if (!isValidOperand(token)) throw new Error('Invalid RPN expression ' + token);

    // push the number to stack
    stack.push(Number(token));
}

export function evaluateRpn(tokens: string[]): number {

    // initialising empty stack to calculate
    const stack: number[] = [];

    // looping the whole tokens array
    for (const token of tokens) {

        // if token is a valid operator, evaluate it
        // else if token is a valid number, push it to stack
        if (isValidOperator(token)) {
            evaluateOperator(token, stack);
        } else {
            evaluateOperand(token, stack);
        }
    }

    if (stack.length > 1) throw new Error('Invalid RPN expression');

    return stack[0];
};

console.log(evaluateRpn(["10", "NEGATE", "NEGATE", "NEGATE", "NEGATE", "1", "2", "+", "4", "*", "+", "3", "-"]));
