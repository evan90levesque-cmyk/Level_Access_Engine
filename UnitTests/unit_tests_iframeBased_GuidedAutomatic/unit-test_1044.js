describe('String N/A: no nodes with an role="separator" attribute', function() {
    it('no nodes with an role="separator" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="separator" attribute not visible in the displayed content', function() {
    it('node with a role="separator" attribute not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' role='separator' tabindex='1'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="separator" attribute not available to assistive technology', function() {
    it('node with a role="separator" attribute not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-hidden='true' role='separator' tabindex='1'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="separator" attribute with tabindex attribute set to a value less than 0', function() {
    it('node with a role="separator" attribute with tabindex attribute set to a value less than 0 should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator' tabindex='-1'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role="separator" attribute, available to assistive technology, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute', function() {
    it('a span node with a role="separator" attribute, available to assistive technology, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator' aria-valuemax='' aria-valuemin='' aria-valuenow='' tabindex='1'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="separator" attribute, available to assistive technology, an aria-valuemin attribute and an aria-valuenow attribute but no aria-valuemax attribute', function() {
    it('a span node with a role="separator" attribute, available to assistive technology, has an aria-valuemin attribute and an aria-valuenow attribute but no aria-valuemax attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator' aria-valuemin='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("1044,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="separator" attribute, available to assistive technology, an aria-valuemax attribute and an aria-valuenow attribute but no aria-valuemin attribute', function() {
    it('a span node with a role="separator" attribute, available to assistive technology, has an aria-valuemax attribute and an aria-valuenow attribute but no aria-valuemin attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator' aria-valuemax='' aria-valuenow=''>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("1044,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="separator" attribute, available to assistive technology, has an  aria-valuemax attribute, an aria-valuemin attribute but no aria-valuenow attribute', function() {
    it('a span node with a role="separator" attribute, available to assistive technology, has an aria-valuemax attribute, an aria-valuemin attribute but no aria-valuenow attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator' aria-valuemax='' aria-valuemin='' tabindex='1'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("1044,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role="separator" attribute, available to assistive technology, but no other attributes', function() {
    it('a span node with a role="separator" attribute, available to assistive technology, but no other attributes should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='separator'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1044");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1044");
       expect(res).toBe("1044,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1044");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});