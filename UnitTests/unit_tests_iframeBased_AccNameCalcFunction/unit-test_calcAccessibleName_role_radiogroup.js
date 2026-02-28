describe('calcAccessibleName_aria_role1: span element with a role="radiogroup" attribute', function() {
    it('span element with a role="radiogroup" attribute should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span role='radiogroup' id='test'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_aria_role2: span element with a role="radiogroup" attribute and aria-label attribute set to "alternative"', function() {
    it('span element with a role="radiogroup" attribute and aria-label attribute set to "alternative" should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='test' role='radiogroup' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_aria_role3: span element with a role="radiogroup" attribute and title attribute set to "alternative"', function() {
    it('span element with a role="radiogroup" attribute and title attribute set to "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='test' role='radiogroup' title='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_aria_role4: span element with a role="radiogroup" attribute, aria-label and title attributes', function() {
    it('aria-label set to "alternative1", and title set to "alternative 2", should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='test' role='radiogroup' aria-label='alternative1' title='alternative2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_aria_role5: span element with a role="radiogroup" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='test' role='radiogroup' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_aria_role6: span element with a role="radiogroup" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='test' role='radiogroup' aria-labelledby='label1' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_aria_role7: span element with a role="radiogroup" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><span id='test' role='radiogroup' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_aria_role8: span element with a role="radiogroup" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><span id='test' role='radiogroup' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_aria_role9: span element with a role="radiogroup" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><span id='test' role='radiogroup' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_aria_role10: span element with a role="radiogroup" attribute and aria-labelledby attributes set to bad id', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span aria-label='alternative1'></span><span id='test' role='radiogroup' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_aria_role11: span element with a role="radiogroup" attribute and aria-labelledby attributes set to bad id', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='label2'>Hello</span><span id='test' role='radiogroup' aria-labelledby='label1 label2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 hello");
    });
});