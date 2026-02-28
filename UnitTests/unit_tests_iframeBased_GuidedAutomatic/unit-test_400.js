describe('String Pass: the body node contains an h1 node which contains text', function() {
    it('the body node contains an h1 node which contains text should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res).toBe(null);
       // </variant3>
    });

   it('the body node contains an h1 node which contains text should be equal to pass using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 400);
      expect(relevantResults.length).toBe(0);
   });
});


describe('String Fail: no hx nodes; or nodes with a role attribute set to a text value that started with "heading" and an aria-level set to an appropriate text value', function() {
    it('no hx nodes; or nodes with a role attribute set to a text value that started with "heading" and an aria-level set to an appropriate text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: no h1 node in the body node; and an h1 in an article node', function() {
    it('no h1 node in the body node; and an h1 in an article node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<article><h1>Level 1 Heading</h1></article>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res).toBe(null);
       // </variant3>
    });

   it('no h1 node in the body node; and an h1 in an article node should be equal to fail using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<article><h1>Level 1 Heading</h1></article>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 400);
      expect(relevantResults.length).toBe(0);
   });
});

describe('String Fail: h1 node that is not available in the DOM', function() {
    it('h1 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1 style='display:none'>Level 1 Heading</h1>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h2 node that is not available in the DOM', function() {
    it('h2 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2 style='display:none'>Level 2 Heading</h2>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h3 node that is not available in the DOM', function() {
    it('h3 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h3 style='display:none'>Level 3 Heading</h3>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h4 node that is not available in the DOM', function() {
    it('h4 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h4 style='display:none'>Level 4 Heading</h4>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h5 node that is not available in the DOM', function() {
    it('h5 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h5 style='display:none'>Level 5 Heading</h5>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h6 node that is not available in the DOM', function() {
    it('h6 node that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h6 style='display:none'>Level 6 Heading</h6>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "1" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "1" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1' style='display:none'>Level 1 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "2" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "2" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='2' style='display:none'>Level 2 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "3" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "3" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='3' style='display:none'>Level 3 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "4" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "4" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='4' style='display:none'>Level 4 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "5" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "5" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='5' style='display:none'>Level 5 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role set to "heading" and an aria-level attribute set to "6" that is not available in the DOM', function() {
    it('node with a role set to "heading" and an aria-level attribute set to "6" that is not available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='6' style='display:none'>Level 6 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h1 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h1 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1 role='presentation'>Level 1 Heading</h1>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h2 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h2 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2 role='presentation'>Level 2 Heading</h2>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h3 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h3 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h3 role='presentation'>Level 3 Heading</h3>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h4 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h4 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h4 role='presentation'>Level 4 Heading</h4>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h5 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h5 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h5 role='presentation'>Level 5 Heading</h5>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: h6 node that has a role attribute set to a text value that starts with "presentation"', function() {
    it('h6 node that has a role attribute set to a text value that starts with "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h6 role='presentation'>Level 6 Heading</h6>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("400");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("400");
       expect(res).toBe("400,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("400");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

