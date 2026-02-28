describe('fingerprints generated for offending HTML elements', function() {

    it('should have an encoding property whose value is an array of character frequencies derived from the innerHTML of the offending element, bucketed in order from A thru Z, 0 thru 9, < and >', function() {
        document.head.innerHTML = "";
        document.body.innerHTML = "<button role='slider'>click me!</button>";
        document.querySelector("html").removeAttribute("lang");
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[3].fingerprint;

        expect(fingerprint.encoding.toString()).toBe([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 27, 0, 0, 0, 10, 0, 17, 7, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].toString());
    });

    it('should have an encoding property whose value is an array of 38 0s for an offending element with no innerHTML', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.encoding.toString()).toBe([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].toString());
    });

    it('should have an encoding property whose value is an array of 38 1s for an offending element of tag \'html\' with no lang attribute defined', function() {
        document.head.innerHTML = "";
        document.body.innerHTML = "";
        document.querySelector("html").removeAttribute("lang");
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.encoding.toString()).toBe([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].toString());
    });
});
