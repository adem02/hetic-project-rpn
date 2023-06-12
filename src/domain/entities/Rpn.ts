import { Element } from "../types";

export class Stack {
  private readonly items: Element[];
  constructor() {
    this.items = [];
  }

  push(item: Element): void {
    this.items.unshift(item);
  }

  shift(): void {
    this.items.shift();
  }

  stack(): Element[] {
    return this.items;
  }
}