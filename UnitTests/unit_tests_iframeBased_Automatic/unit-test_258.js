describe('String N/A: no nodes with an role="menuitemcheckbox" attribute', function() {
    it('no nodes with an role="menuitemcheckbox" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: no nodes visible in the displayed content', function() {
    it('no nodes visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' style='display:none' aria-checked='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: no nodes available to assistive technology', function() {
    it('no nodes visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-hidden='true' aria-checked='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with role="menuitemcheckbox" attribute, available to assistive technologies, has an aria-checked attribute set to the text value "true"', function() {
    it('a span node with role="menuitemcheckbox" attribute, available in the DOM, has an aria-checked attribute set to the text value "true" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes with role="menuitemcheckbox" attribute, available to assistive technologies, have an aria-checked attribute set to the text value "true"', function() {
    it('two spans node with role="menuitemcheckbox" attribute, available in the DOM, have an aria-checked attribute set to the text value "true" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='true'>Hello</span><span role='menuitemcheckbox' aria-checked='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with role="menuitemcheckbox" attribute, available to assistive technologies, has an aria-checked attribute set to the text value "false"', function() {
    it('a span node with role="menuitemcheckbox" attribute, available in the DOM, has an aria-checked attribute set to the text value "false" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='false'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with role="menuitemcheckbox" attribute, available to assistive technologies, has an aria-checked attribute set to the text value "mixed"', function() {
    it('a span node with role="menuitemcheckbox" attribute, available in the DOM, has an aria-checked attribute set to the text value "mixed" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='mixed'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with role="menuitemcheckbox" attribute, available to assistive technologies, has an aria-checked attribute set to the text value "on"', function() {
    it('a span node with role="menuitemcheckbox" attribute, available in the DOM, has an aria-checked attribute set to the text value "on" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='on'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("258,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span nodes with role="menuitemcheckbox" attribute, available to assistive technologies, have an aria-checked attribute set to the text value "on"', function() {
    it('two span nodes with role="menuitemcheckbox" attribute, available in the DOM, have an aria-checked attribute set to the text value "on" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-checked='on'></span><span role='menuitemcheckbox' aria-checked='on'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("258");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("258");
       expect(res).toBe("258,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("258");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});