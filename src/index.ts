declare global {
  interface SymbolConstructor {
    readonly metadata: unique symbol;
  }
}

// @ts-expect-error
Symbol.metadata ??= Symbol('Symbol.metadata');

export {};
