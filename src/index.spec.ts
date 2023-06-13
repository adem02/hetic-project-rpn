import { evaluateRpn } from './index';

describe('Succes cases', () => {

  it('should return 0 for ["0"]', () => {
    expect(evaluateRpn(["0"])).toEqual(0);
  });

  it('should return 5 for 2 + 3', () => {
    expect(evaluateRpn(["2", "3", "+"])).toEqual(5);
  });

  it('should return 6 for 2 * 3', () => {
    expect(evaluateRpn(["2", "3", "*"])).toEqual(6);
  });

  it('should return 1 for 3 - 2', () => {
    expect(evaluateRpn(["3", "2", "-"])).toEqual(1);
  });

  it('should return 1 for 3 / 2', () => {
    expect(evaluateRpn(["3", "2", "/"])).toEqual(1);
  });

  it('should return 1 for 3 % 2', () => {
    expect(evaluateRpn(["3", "2", "MOD"])).toEqual(1);
  });

  it('should return 1 for 3 + (-2)', () => {
    expect(evaluateRpn(["3", "2", "NEGATE", "+"])).toEqual(1);
  });

  it('should solve complex expression', () => {
    expect(evaluateRpn(["5", "1", "2", "+", "4", "*", "+", "3", "-"])).toEqual(14);
  });

});

describe('Error cases', () => {

  it('should throw an error if the user inputs a negative number', () => {
    expect(() => evaluateRpn(["-1", "2", "+"])).toThrowError('Invalid RPN expression');
  });

  it('should throw an error if the user inputs an invalid expression', () => {
    expect(() => evaluateRpn(["1", "10", "11", "+"])).toThrowError('Invalid RPN expression');
  });

  it('should throw an error if the user inputs an invalid expression', () => {
    expect(() => evaluateRpn(["1", "+", "11", "+"])).toThrowError('Invalid RPN expression');
  });

  it('should throw error if there is division by zero', () => {
    expect(() => evaluateRpn(["10", "0", "/"])).toThrowError('Division by zero');
  });

  it('should throw error if there is no operand to calculate', () => {
    expect(() => evaluateRpn(["10", "0", "5"])).toThrowError('Invalid RPN expression');
  });

  it('should throw an error if the operator is not valid', () => {
    expect(() => evaluateRpn(["10", "5", "♥"])).toThrowError('Invalid RPN expression');
  });

  it('should throw an error if there is no operand to calculate', () => {
    expect(() => evaluateRpn(['+'])).toThrowError('Invalid RPN expression');
  });

}); 