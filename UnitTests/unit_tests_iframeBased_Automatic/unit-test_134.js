describe('String N/A: no nodes with an role="combobox" attribute', function() {
    it('no nodes with an role="combobox" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="combobox" attribute not visible in the displayed content', function() {
    it('node with a role="combobox" attribute not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' role='combobox'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="combobox" attribute not available to assistive technology', function() {
    it('node with a role="combobox" attribute not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-hidden='true' role='combobox' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "true"', function() {
    it('a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "true" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "false"', function() {
    it('a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "false" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-expanded='false'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to a null value', function() {
    it('a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-expanded=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("134,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "hello"', function() {
    it('a span node with a role="combobox" attribute, available to assistive technology, has an aria-expanded attribute set to the text value "hello" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-expanded='hello'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("134");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("134");
       expect(res).toBe("134,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("134");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});