describe(`String Pass (main page): a single title node inside the head node`, function () {
   it(`a single title node inside the head node should be equal to pass"`, function () {
      document.head.innerHTML = "<title>test</title>";
      document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): a single title node inside the head node`, function () {
   it(`a single title node inside the head node should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>test</title>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): a single title node inside the body node`, function () {
   it(`a single title node inside the body node should be equal to pass"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<title>test</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): a single title node inside the body node`, function () {
   it(`a single title node inside the body node should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>test</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): empty title node provided in head`, function () {
   it(`empty title node provided in head should be equal to fail"`, function () {
      document.head.innerHTML = "<title></title>";
      document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): empty title node provided in head`, function () {
   it(`empty title node provided in head should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): empty title node provided in body`, function () {
   it(`empty title node provided in body should be equal to fail"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): empty title node provided in body`, function () {
   it(`empty title node provided in body should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): two title elements in the head (second is empty)`, function () {
   it(`two title elements in the head (second is empty) should be equal to pass"`, function () {
      document.head.innerHTML = "<title>Good</title><title></title>";
      document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): two title elements in the head (second is empty)`, function () {
   it(`two title elements in the head (second is empty) should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Good</title><title></title>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): two title elements in the body (second is empty)`, function () {
   it(`two title elements in the body (second is empty) should be equal to pass"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<title>Good</title><title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): two title elements in the body (second is empty)`, function () {
   it(`two title elements in the body (second is empty) should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Good</title><title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): two title elements in the head (first is empty)`, function () {
   it(`two title elements in the head (first is empty) should be equal to fail"`, function () {
      document.head.innerHTML = "<title></title><title>Good</title>";
      document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): two title elements in the head (first is empty)`, function () {
   it(`two title elements in the head (first is empty) should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title><title>Good</title>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): two title elements in the body (first is empty)`, function () {
   it(`two title elements in the body (first is empty) should be equal to fail"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<title></title><title>Good</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): two title elements in the body (first is empty)`, function () {
   it(`two title elements in the body (first is empty) should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title><title>Good</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): one empty title element in the head and one title element (with text) in the body`, function () {
   it(`one empty title element in the head and one title element (with text) in the body should be equal to fail"`, function () {
      document.head.innerHTML = "<title></title>";
      document.body.innerHTML = "<title>Good</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): one empty title element in the head and one title element (with text) in the body`, function () {
   it(`one empty title element in the head and one title element (with text) in the body should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Good</title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): an svg with a title element that is not empty and a document title element that is empty`, function () {
   it(`an svg with a title element that is not empty and a document title element that is empty should be equal to fail"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = 
      `
         <svg xmlns="http://www.w3.org/2000/svg">
            <title>A yellow circle</title>
         </svg>
         <title></title>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("152,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): an svg with a title element that is not empty and a document title element that is empty`, function () {
   it(`an svg with a title element that is not empty and a document title element that is empty should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = 
      `
         <svg xmlns="http://www.w3.org/2000/svg">
            <title>A yellow circle</title>
         </svg>
         <title></title>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): a div with a title element in the body`, function () {
   it(`a div with a title element in the body"`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<div><title id='target'>This is a title</title></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): a div with a title element in the body`, function () {
   it(`a div with a title element in the body should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div><title id='target'>This is a title</title></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("152");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("152");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("152");
      expect(res).toBe(null);
      // </variant3>
   });
});