describe('calcAccessibleName_frame1: frame node with id attribute and no aria-label or title attributes', function() {
    it('frame node with id attribute and no aria-label or title attributes should be null', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_frame2: frame node aria-label attribute, no title attributes', function() {
    it('iframe node with id attribute and aria-label attribute, but no aria-labelledby, label or title attributes should be "alternative"', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" aria-label="alternative" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_frame3: frame node with title attribute, no aria-label', function() {
    it('iframe node with id attribute and title attribute, but no aria-labelledby, aria-label or label attributes should be "alternative"', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" title="alternative" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

// IMPORTANT: following step is needed to reset outerHTML of body

describe('reset', function() {
    it('reset', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<body></body>';
    });
});