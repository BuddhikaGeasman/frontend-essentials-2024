import { describe, it, expect  } from 'vitest'
describe("Greeting Function", function () {
    it("should use the default greeting when none is provided", function() {
        expect(greet('Emily')).toBe("Hello Emily");
    });

    it("should use the provided greeting when available", function() {
        expect(greet('Emily', 'Welcome')).toBe("Welcome Emily");
    });
});
