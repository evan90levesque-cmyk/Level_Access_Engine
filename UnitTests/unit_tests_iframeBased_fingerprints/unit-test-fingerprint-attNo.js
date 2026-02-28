describe('fingerprints generated for offending HTML elements', function() {

    it('should have an attNo property with a value of 0 when the offending element has no attributes', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.attNo).toBe(0);
    });

    it('should have an attNo property with a value of 1 when the offending element has one attribute', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.attNo).toBe(1);
    });

    it('should have an attNo property with a value of 2 when the offending element has two attributes', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' width='300'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.attNo).toBe(2);
    });
});
