declare global {
  interface SymbolConstructor {
    metadata: symbol;
  }
}

Symbol.metadata ??= Symbol('Symbol.metadata');
