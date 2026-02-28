describe('the object returned by getEnvironmentDetails', () => {
    it('should not be null and should be an object containing all non-null values', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const environmentDetails = LevelAccess_AccessEngine.getEnvironmentDetails();
        expect(environmentDetails).not.toBeNull();
        for (const value of Object.values(environmentDetails)) {
            expect(value).not.toBeNull();
        }
    });
});
