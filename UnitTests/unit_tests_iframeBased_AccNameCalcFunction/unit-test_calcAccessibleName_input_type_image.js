describe('ENG-877: the accessible name of an input element with a type="image" attribute that lacks an explicitly-defined accessible name', function() {
    it('should be "Submit Query"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <input type="image" src="#">
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").getAttribute("data-ae_an")).toBe("submit query");
    });
});

describe('ENG-877: the accessible name of an input element with a type="image" attribute and an alt attribute of ""', function() {
    it('should be "Submit Query"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <input type="image" src="#" alt="">
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").getAttribute("data-ae_an")).toBe("submit query");
    });
});

describe('ENG-877: the accessible name of an input element with a type="image" attribute and an alt attribute of " "', function() {
    it('should be "Submit Query"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <input type="image" src="#" alt=" ">
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").getAttribute("data-ae_an")).toBe("submit query");
    });
});

describe('ENG-973: the accessible name of an input element with a type="IMAGE" attribute and an alt attribute of "Continue"', function() {
    it('should be "Continue"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <input type="IMAGE" src="#" alt="Continue" name="continue">
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").getAttribute("data-ae_an")).toBe("continue");
    });
});