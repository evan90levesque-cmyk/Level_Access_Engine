describe('calcAccessibleName_button_type1: input element with a type="button" attribute', function() {
    it('input element with a type="button" attribute should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='button' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_button_type2: input element with a type="button" attribute and aria-label attribute set to "alternative"', function() {
    it('input element with a type="button" attribute and aria-label attribute set to "alternative" should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='button' id='test' aria-label='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_button_type3: input element with a type="button" attribute and title attribute set to "alternative"', function() {
    it('input element with a type="button" attribute and title attribute set to "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='button' id='test' title='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_button_type4: input element with a type="button" attribute, aria-label and title attributes', function() {
    it('aria-label set to "alternative1", and title set to "alternative 2", should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='button' id='test' aria-label='alternative1' title='alternative2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type5: input element with a type="button" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='button' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type6: input element with a type="button" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='button' id='test' aria-labelledby='label1' aria-label='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type7: input element with a type="button" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><input type='button' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_button_type8: input element with a type="button" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><input type='button' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_button_type9: input element with a type="button" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><input type='button' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type10: input element with a type="button" attribute and aria-labelledby attributes set to bad id', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span aria-label='alternative1'></span><input type='button' id='test' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_button_type11: input element with a type="button" attribute and aria-labelledby attributes set to bad id', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='label2'>Hello</span><input type='button' id='test' aria-labelledby='label1 label2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 hello");
    });
});

describe('calcAccessibleName_button_type12: input element with a type="button" attribute and explicit label unwrapped that contains the text "alternative1"', function() {
    it('input element with a type="button" attribute and explicit label unwrapped that contains the text "alternative1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'>alternative1</label><input type='button' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type13: input element with a type="button" attribute and implicit label wrapped that contains the text "alternative1"', function() {
    it('input element with a type="button" attribute and implicit label wrapped (id on button) that contains the text "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label>alternative1<input id='test' type='button'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button_type3: input element with a type="button" attribute and value attribute set to "alternative"', function() {
    it('input element with a type="button" attribute and value attribute set to "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='button' id='test' value='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});
