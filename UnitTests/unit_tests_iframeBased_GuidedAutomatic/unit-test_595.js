describe('String N/A: an object with no accessible name', function() {
    it('an object with no accessible name should be equal to n/a', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an object with a title attribute name 4 characters long', function() {
    it('an object with a title attribute 4 characters long should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object title='test'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an object with an aria-label attribute name 4 characters long', function() {
    it('an object with an aria-label attribute 4 characters long should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object aria-label='test'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an object with an aria-labelledby 4 characters long', function() {
    it('an object with an aria-labelledby 4 characters long should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='bob'>test</span><object aria-labelledby='bob'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two objects with a title attribute 4 characters long', function() {
    it('two objects with a title attribute 4 characters long should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object title='test'></object><object title='test'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an object with a title attribute longer than 4 characters', function() {
    it('an object with a title attribute longer than 4 characters should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object title='this is more than 4'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an object with a title attribute shorter than 4 characters', function() {
    it('an object with a title attribute shorter than 4 characters should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object title='go'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("595,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two objects with an aria-label and a title shorter than 4 characters', function() {
    it('two objects with an aria-label shorter than 4 characters should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object aria-label='go'></object><object title='go'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("595");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("595");
       expect(res).toBe("595,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("595");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});