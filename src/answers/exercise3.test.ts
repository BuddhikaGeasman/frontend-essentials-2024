// import your function here

describe("Destructure User Object", function() {
    it("should correctly destructure and log the user's name and email", function() {
        const consoleSpy = spyOn(console, 'log');
        const user = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com'
        };
        logUserInfo(user);
        expect(consoleSpy).toHaveBeenCalledWith("Name: John Doe, Email: john@example.com");
    });
});

