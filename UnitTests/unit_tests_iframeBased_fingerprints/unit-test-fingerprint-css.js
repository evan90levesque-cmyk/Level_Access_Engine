describe('fingerprints generated for offending HTML elements', function() {

    it('should have a valid css property, i.e. its value should be a valid CSS selector that\'s parsable using JavaScript\'s querySelector function', function() {
        document.head.innerHTML = "";
        document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        document.querySelector(fingerprint.css);  // this will throw an exception if the CSS selector isn't valid
    });

    it('should have a css property whose value excludes attribute names with colons in them', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' he:llo='world'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.css.indexOf(':') === -1).toBe(true);

        // verify the attNo property of the fingerprint wasn't affected by excluding attributes with colons in their names from the fingerprint's css property
        expect(fingerprint.attNo).toBe(2);
    });

    it('should have a css property whose value excludes attribute values with CR or LF characters at the beginning of them', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='alt' title='\nimage'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[0].fingerprint;

        expect(fingerprint.css.indexOf('\r') === -1).toBe(true);
        expect(fingerprint.css.indexOf('\n') === -1).toBe(true);

        // verify the attNo property of the fingerprint wasn't affected by excluding attributes with CR and LF characters in their values from the fingerprint's css property
        expect(fingerprint.attNo).toBe(3);
    });

    it('should have a css property whose value excludes attribute values with CR or LF characters in the middle of them', function() {
        document.head.innerHTML = "";
        document.body.innerHTML = "<img src='#' alt='alt' title='ima\rge'>";
        document.querySelector("html").removeAttribute("lang");
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[1].fingerprint;

        expect(fingerprint.css.indexOf('\r') === -1).toBe(true);
        expect(fingerprint.css.indexOf('\n') === -1).toBe(true);

        // verify the attNo property of the fingerprint wasn't affected by excluding attributes with CR and LF characters in their values from the fingerprint's css property
        expect(fingerprint.attNo).toBe(3);
    });

    it('should have a css property whose value excludes attribute values with CR or LF characters at the end of them', function() {
        document.head.innerHTML = "";
        document.body.innerHTML = "<img src='#' alt='alt' title='image\r\n'>";
        document.querySelector("html").removeAttribute("lang");
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        var fingerprint = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON())[1].fingerprint;

        expect(fingerprint.css.indexOf('\r') === -1).toBe(true);
        expect(fingerprint.css.indexOf('\n') === -1).toBe(true);

        // verify the attNo property of the fingerprint wasn't affected by excluding attributes with CR and LF characters in their values from the fingerprint's css property
        expect(fingerprint.attNo).toBe(3);
    });
});
