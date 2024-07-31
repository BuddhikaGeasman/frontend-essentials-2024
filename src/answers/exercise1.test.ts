// import your function here
import { describe, it,  } from 'vitest'
describe("Greeting Messages", function () {
    it("should return correct greeting messages for all names", function() {
        const names = ['Alice', 'Bob', 'Charlie'];
        const result = getGreetings(names);
        expect(result).toEqual(["Hello Alice!", "Hello Bob!", "Hello Charlie!"]);
    });
});
