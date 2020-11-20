import ChangeDollar from './../src/assets/js/money-change-service.js;

describe('ChangeDollar', () => {

  beforeEach(() => {
    const dollarAmount = 125;
    let body = new XMLHttpRequest;
  });

  test('should make an XMLHttpRequest', () => {
    expect(new XMLHttpRequest).toHaveBeenCalled();
  })

  test('should include a try...catch block', () => {
    expect(this.ChangeDollar(dollarAmount)).toContain();
  })

  test('throws error on invalid dollarAmount input', () => {
    expect(this.ChangeDollar("string")).toThrow(error?);
  })

  test('rejects to message !== 200 OK', () => {
    return expect(Promise.reject(new Error('non 200 OK'))).rejects.toThrow(error.message);
  });
})