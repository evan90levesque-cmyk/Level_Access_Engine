describe('calcAccessibleName_visibility: input node with an explicitly associated label node', function() {
    it('should not be null when the label node is visible', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test'>First Name</label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });
    it('should be null when the label node is not visible with "display: none"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test' style='display: none;'>First Name</label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
    it('should be null when the label node is not visible with "visibility: hidden"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test' style='visibility: hidden;'>First Name</label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });

    it('should not be null when the label node and its ancestors are visible', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<span><label for='test'>First Name</label></span><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });
    it('should be null when the label node is implicitly not visible because of "display: none" on one of its ancestors', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<div><span style='display: none;'><label for='test'>First Name</label></span><input id='test' type='text' /></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
    it('should be null when the label node is implicitly not visible because of "visibility: hidden" on one of its ancestors', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<div><span style='visibility: hidden;'><label for='test'>First Name</label></span><input id='test' type='text' /></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });

    it('should not be null when the label node and its nested span is visible', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test'>First Name <span>Exclude</span></label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name exclude");
    });
    it('should not be null when the label node is visible and its nested span is not visible with "display: none"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test'>First Name <span style='display: none;'>Exclude</span></label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });
    it('should not be null when the label node is visible and its nested span is not visible with "visibility: hidden"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = "<label for='test'>First Name <span style='visibility: hidden;'>Exclude</span></label><input id='test' type='text' />";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });
});

describe('ENG-835: accessible name for real-world div example', function() {
    it('should be "w3c logo"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <div style="display: none" id="img-label">W3C logo</div>
            <div id="test" role="img" aria-labelledby="img-label"></div>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("w3c logo");
    });
});

describe('ENG-1580: accessible name for element with visibility:visible child of a div with visibility:hidden', function() {
    it('should compute accessible name for a button without role', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
        <div style="visibility: hidden">
            Parent (hidden)
            <button id="test" style="visibility: visible;">
              Child button text
            </button>
        </div>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        var resObj = JSON.parse(res);
        expect(resObj).toHaveSize(0);
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe('child button text');
    });

    it('should compute accessible name for an element with role button', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
        <div style="visibility: hidden">
            Parent (hidden)
            <div id="test" style="visibility: visible;" role="button">
              Child button text
            </div>
        </div>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        var resObj = JSON.parse(res);
        expect(resObj).toHaveSize(0);
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe('child button text');
    });
});
