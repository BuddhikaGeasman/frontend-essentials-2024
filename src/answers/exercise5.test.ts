// import your function here
import { describe, it, expect } from 'vitest'
describe("Sort Descending", function() {
    it("should return numbers sorted in descending order", function() {
        const result = sortDescending(1, 3, 5, 2, 4, 6);
        expect(result).toEqual([6, 5, 4, 3, 2, 1]);
    });
});


