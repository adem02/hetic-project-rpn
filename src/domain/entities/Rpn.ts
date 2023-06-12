import { Element } from "../types";

export class Stack {
  readonly items: Element[];
  constructor() {
    this.items = [];
  }

  push(item: Element): void {
    this.items.unshift(item);
  }

  shift(): void {
    this.items.shift();
  }
}