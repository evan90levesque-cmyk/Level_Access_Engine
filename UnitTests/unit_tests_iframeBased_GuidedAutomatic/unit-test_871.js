describe('ACT-R Passed Example 1: Two iframe elements within the same document tree have the same accessible name (given by the title attribute) and embed the same resource.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src="#"> </iframe>

        <iframe title="List of Contributors" src="#"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Passed Example 1 (modified): Two iframe elements within the same document tree have the same accessible name (given by the title attribute) and embed the same resource with a double quotation mark in it.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src='#"'> </iframe>

        <iframe title="List of Contributors" src='#"'> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Passed Example 2: Two iframe elements within the same document tree have the same accessible name (given by the title and aria-label attributes) and embed the same resource.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src="#"> </iframe>

        <iframe aria-label="List of Contributors" src="#"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Passed Example 3: Two iframe elements within the same document tree have the same accessible name (given by the aria-labelledby attribute and corresponding elements) and embed the same resource.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <div id="desc-for-title">List of Contributors</div>
        <iframe aria-labelledby="desc-for-title" src="#"> </iframe>

        <div id="desc-for-title1">List of Contributors</div>
        <iframe aria-labelledby="desc-for-title1" src="#"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Passed Example 6: Two iframe elements within the same document tree have the same accessible name (given by the title attribute) and embed the same resource. src attributes only differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="Contact us" src="#/"> </iframe>

        <iframe title="Contact us" src="#"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe("ACT-R Failed Example 1: Two iframe elements within the same document tree have the same accessible name (given by the title attribute) but don't embed equivalent resources.", function() {
   it('should fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src="#1"> </iframe>

        <iframe title="List of Contributors" src="#2"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('fail');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("871,2");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res.instances.length).toBe(2);
   });
});

describe("ACT-R Failed Example 1 (modified): Two iframe elements within the same document tree have the same accessible name (given by the title attribute) but don't embed equivalent resources, but both src values contain a double quotation mark.", function() {
   it('should fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src='#1"'> </iframe>

        <iframe title="List of Contributors" src='#2"'> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('fail');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("871,2");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res.instances.length).toBe(2);
   });
});

describe("ACT-R Failed Example 2: Two iframe elements within the same document tree have the same accessible name (given by the aria-label attribute) but don't embed equivalent resources.", function() {
   it('should fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe aria-label="List of Contributors" src="#1"> </iframe>

        <iframe aria-label="List of Contributors" src="#2"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('fail');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("871,2");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res.instances.length).toBe(2);
   });
});

describe("ACT-R Failed Example 3: Two iframe elements within the same document tree have the same accessible name (given by the title and aria-label attributes) but don't embed equivalent resources.", function() {
   it('should fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src="#1"> </iframe>

        <iframe aria-label="List of Contributors" src="#2"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('fail');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("871,2");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res.instances.length).toBe(2);
   });
});

describe('ACT-R Inapplicable Example 1: There is only one iframe element within the document tree. Therefore, there is no set of two or more iframe elements with the same accessible name and the rule is inapplicable.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors" src="#"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 2: Each of the two iframe elements within the document tree has a different accessible name (given by the title attribute). Therefore, there is no set of two or more iframe elements with the same accessible name and the rule is inapplicable.', function() {
   it('should pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe title="List of Contributors to Repository 1" src="#1">
        </iframe>

        <iframe title="List of Contributors to Repository 2" src="#2">
        </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('pass');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 3: Each of the two iframe elements within the document tree has a different accessible name (given by the aria-label attribute). Therefore, there is no set of two or more iframe elements with the same accessible name and the rule is inapplicable.', function() {
   it('should pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe aria-label="List of Contributors to Repository 1" src="#1">
        </iframe>

        <iframe aria-label="List of Contributors to Repository 2" src="#2">
        </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('pass');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 4: Each of the two iframe elements within the document tree has a different accessible name (given by the aria-labelledby attribute and matching elements). Therefore, there is no set of two or more iframe elements with the same accessible name and the rule is inapplicable.', function() {
   it('should pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <div id="desc-for-title">List of Contributors</div>
        <iframe aria-labelledby="desc-for-title" src="#1"> </iframe>

        <div id="desc-for-title1">List of Reviewers</div>
        <iframe aria-labelledby="desc-for-title1" src="#2"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('pass');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 5: Both iframe elements have the same accessible name (given by the title attribute) within the same document tree, but one of them is not included in the accessibility tree. Therefore, there is no set of two or more iframe elements that are included in the accessibility tree and have the same accessible name, and the rule is inapplicable.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe aria-hidden="true" title="List of Contributors" src="#1">
        </iframe>

        <iframe title="List of Contributors" src="#2"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 6: The alt attribute does not provide an accessible name for iframe elements. Therefore, these iframe elements do not have an accessible name and the rule is inapplicable.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe alt="Some" src="#1"> </iframe>

        <iframe alt="Some" src="#1"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 8: These iframe elements do not have accessible names.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>

        <iframe src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});

describe('ACT-R Inapplicable Example 9: These iframe elements are not included in the accessibility tree, because of the display:none styling.', function() {
   it('should be N/A', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <iframe style="display:none;" title="Document One" src="#1"> </iframe>

        <iframe style="display:none;" aria-label="Document One" src="#2">
        </iframe>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      let res = LevelAccess_AccessEngine.runTest_returnOutcome("871");
      expect(res).toBe('na');
      res = LevelAccess_AccessEngine.runTest_returnNumbers("871");
      expect(res).toBe("");
      res = LevelAccess_AccessEngine.runTest_returnInstances("871");
      expect(res).toBe(null);
   });
});