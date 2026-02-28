describe('String N/A: no nodes with an role="option" attribute', function() {
    it('no nodes with an role="option" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="option" attribute that is not a child of an element with an aria-multiselectable attribute', function() {
    it('node with a role="option" attribute that is not a child of an element with an aria-multiselectable attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='option'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="option" attribute not visible in the displayed content', function() {
    it('node with a role="option" attribute not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span style='display:none' role='option'>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="option" attribute not available to assistive technology', function() {
    it('node with a role="option" attribute not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span aria-hidden='true' role='option' aria-selected='true'>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "true"', function() {
    it('a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "true" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span role='option' aria-selected='true'>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "false"', function() {
    it('a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "false" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span role='option' aria-selected='false'>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to a null value', function() {
    it('a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span role='option' aria-selected=''>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("27,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "hello"', function() {
    it('a span node with a role="option" attribute, available to assistive technology, has an aria-selected attribute set to the text value "hello" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-multiselectable><span role='option' aria-selected='hello'>Hello</span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("27");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("27");
       expect(res).toBe("27,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("27");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});