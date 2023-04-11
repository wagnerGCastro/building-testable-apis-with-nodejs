const sum = (a, b) => a + b;

describe('function sum', () => {
  it('should return sum', () => {
    const result = sum(2, 3);

    expect(result).toEqual(5);
  });
});
