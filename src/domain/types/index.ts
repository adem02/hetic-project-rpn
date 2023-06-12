export interface Operand {
  value: number
}
export interface Operator {
  value: string;
}
export type Element = Operand | Operator;