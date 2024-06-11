// import your function here

describe("Simulate Delay", function() {
    it("should log 'Delay complete' after the specified duration", function(done) {
        const consoleSpy = spyOn(console, 'log');
        simulateDelay(1000);
        setTimeout(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Delay complete");
            done();
        }, 1010); // slightly longer than the simulateDelay to catch the log
    });
});
