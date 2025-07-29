const { increment, decrement, getCount } = require('../script');

describe("Counter Logic", () => {
  it("should increment the count", () => {
    let val = increment();
    expect(val).to.equal(1);
  });

  it("should decrement the count", () => {
    let val = decrement();
    expect(val).to.equal(0);
  });
});
