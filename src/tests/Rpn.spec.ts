// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import { Stack } from "../domain/entities/Rpn";

test("The stack is empty at instantiation", () => {
    const testStack0 = new Stack();
    expect(testStack0.items).toStrictEqual([]);
});

test("Push items to stack in correct order", () => {
  const testStack = new Stack();
  testStack.push({value : 1});
  testStack.push({value : 2});
  expect(testStack.items).toStrictEqual([{value : 2}, {value : 1}]);
});

test("Shift an item from the stack", () => {
  const testStack2 = new Stack();
  testStack2.push({value: 3});
  testStack2.push({value : 2});
  testStack2.push({value : 1});
  testStack2.push({value : "+"});
  testStack2.shift();
  expect(testStack2.items).toStrictEqual([{value : 1}, {value : 2}, {value : 3}]);
});

test("The stack method returns the stack's items", () => {
  const testStack3 = new Stack();
  testStack3.push({value : 13});
  testStack3.push({value : "*"});
  expect(testStack3.stack()).toStrictEqual([{value : "*"}, {value : 13}]);
})
  
