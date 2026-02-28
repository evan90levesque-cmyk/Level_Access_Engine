describe('String N/A: No title in the head', function() {
    it('No title in the head should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: Title in the head is empty', function() {
    it('Title in the head is empty should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: Title in the body is empty', function() {
   it('Title in the body is empty should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: Title in the head set to the text value "this is a descriptive title"', function() {
    it('Title in the head set to the text value "this is a descriptive title" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>This is a descriptive title</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: Title in the body set to the text value "this is a descriptive title"', function() {
   it('Title in the body set to the text value "this is a descriptive title" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>This is a descriptive title</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: title in the head set to a text value less than 11 characters', function() {
    it('title in the head set to a text value the less than 11 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("522,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: title in the body set to a text value less than 11 characters', function() {
   it('title in the body set to a text value the less than 11 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Title</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: title in the head set to a text value longer than 150 characters', function() {
    it('title in the head set to a text value longer than 150 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("522,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: title in the body set to a text value longer than 150 characters', function() {
   it('title in the body set to a text value longer than 150 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: title in the head set to a text value of "Enter the title of your HTML document here"', function() {
    it('title in the head set to a text value of "Enter the title of your HTML document here" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Enter the title of your HTML document here</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("522,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: title in the body set to a text value of "Enter the title of your HTML document here"', function() {
   it('title in the body set to a text value of "Enter the title of your HTML document here" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Enter the title of your HTML document here</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: title in the head set to a text value of "Untitled Document"', function() {
    it('title in the head set to a text value of "Untitled Document" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Untitled Document</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("522,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: title in the body set to a text value of "Untitled Document"', function() {
   it('title in the body set to a text value of "Untitled Document" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Untitled Document</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: title in the head set to a text value of "Untitled Page"', function() {
    it('title in the head set to a text value of "Untitled Page" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Untitled Page</title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
       expect(res).toBe("522,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("522");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: title in the body set to a text value of "Untitled Page"', function() {
   it('title in the body set to a text value of "Untitled Page" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Untitled Page</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an svg with a title element with the text value "this is a descriptive title" and a document title element with the text value "Untitled Page"', function() {
   it('an svg with a title element with the text value "this is a descriptive title" and a document title element with the text value "Untitled Page" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg">
            <title>This is a descriptive title</title>
         </svg>
         <title>Untitled Page</title>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("522");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("522");
      expect(res).toBe("522,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("522");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: a div with a title element in the body set to a text value of "Untitled Page" tested via runAllTests_returnInstances_JSON_NodeCapture', function() {
   it('a div with a title element in the body set to a text value of "Untitled Page" tested via runAllTests_returnInstances_JSON_NodeCapture should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><title id="target">Untitled Page</title></div>';
      // because of the way node capture works, Engine has no way of knowing if this is the first title element in the page or not, so it won't flag this as a violation
      var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
      var resObj = JSON.parse(res);
      expect(resObj.length).toBe(0);
   });
});