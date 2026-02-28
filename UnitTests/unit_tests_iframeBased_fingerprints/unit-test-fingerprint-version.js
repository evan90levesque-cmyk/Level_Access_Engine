describe('fingerprints generated for offending HTML elements', function() {

    it('should have a version property with a value of 2', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.version).toBe(2);
    });
});
