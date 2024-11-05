import '../src';

describe('polyfill', () => {
  describe('`Symbol.metadata`', () => {
    it('should be defined', () => {
      expect(Object.hasOwn(Symbol, 'metadata')).toBe(true);
    });

    it('should be of type symbol', () => {
      expect(typeof Symbol.metadata).toBe('symbol');
    });

    it("should be named 'Symbol.metadata'", () => {
      expect(Symbol.metadata.toString()).toBe('Symbol(Symbol.metadata)');
    });
  });
});
