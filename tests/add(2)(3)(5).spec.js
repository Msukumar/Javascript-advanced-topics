const add = require("../src/add(2)(3)(5)");

describe("add", () => {
    it("should sum up chain methods", () => {
        expect(add(2)(3)(5)()).toBe(10);
    });
});
