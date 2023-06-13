import { evalRPN } from './index';

describe('evalRPN', () => {

  it('should throw error if there is division by zero', () => {
    expect(() => evalRPN(["10", "0", "/"])).toThrowError('Division by zero');
  });

  it('should throw error if there is no operand to calculate', () => {
    expect(() => evalRPN(["10", "+"])).toThrowError('Invalid RPN expression');
  });

});