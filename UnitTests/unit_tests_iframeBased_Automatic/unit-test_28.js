describe('String N/A: no nodes with an role="scrollbar" attribute', function() {
    it('no nodes with an role="scrollbar" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="scrollbar" attribute not visible in the displayed content', function() {
    it('node with a role="scrollbar" attribute not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' role='scrollbar'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="scrollbar" attribute not available to assistive technology', function() {
    it('node with a role="scrollbar" attribute not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-hidden='true' role='scrollbar'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-controls='' aria-orientation='' aria-valuemax='' aria-valuemin='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-controls attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-controls attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-orientation='' aria-valuemax='' aria-valuemin='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-orientation attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-orientation attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-controls='' aria-valuemax='' aria-valuemin='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-valuemax attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemin attribute and an aria-valuenow attribute but no aria-valuemax attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-controls='' aria-orientation='' aria-valuemin='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute and an aria-valuenow attribute but no aria-valuemin attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute and an aria-valuenow attribute but no aria-valuemin attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-controls='' aria-orientation='' aria-valuemax='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute but no aria-valuenow attribute', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute but no aria-valuenow attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-controls='' aria-orientation='' aria-valuemax='' aria-valuemin=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="scrollbar" attribute but no other attributes', function() {
    it('a span node with a role="scrollbar" attribute, available to assistive technology, has an aria-checked attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("28");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("28");
       expect(res).toBe("28,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("28");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});