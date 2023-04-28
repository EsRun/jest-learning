const stats = require("./stats");
const statsValue = [1, 2, 3, 4];

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max(statsValue)).toBe(4);
  });

  it("gets mininum value", () => {
    expect(stats.min(statsValue)).toBe(1);
  });

  it("get average value", () => {
    expect(stats.avg(statsValue)).toBe(2.5);
  });

  describe("median", () => {
    it("sorts the array", () => {
      expect(stats.sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("gets the median for odd length", () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });
    it("gets the median for even length", () => {
      expect(stats.median[(1, 2, 3, 4, 5, 6)]).toBe(3.5);
    });
  });
});
