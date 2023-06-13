export interface IOperatorSets {
    [operator: string]: (firstOperand: number, secondOperand: number) => number;
}