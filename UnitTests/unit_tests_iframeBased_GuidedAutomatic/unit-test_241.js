describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: node with role="link" attribute, no accessible name', function() {
   it('node with role="link" attribute, no accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: node with role="link" attribute with a style set to a text value "display:none"', function() {
   it('node with role="link" attribute with a style set to a text value "display:none" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' style='display:none' aria-label='alternative'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with role="link" attribute with an accessible name calculation set to a non-suspicious text value', function() {
   it('node with role="link" attribute with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='good alternative'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two nodes with role="link" attribute with an accessible name calculation set to a non-suspicious text value', function() {
   it('two nodes with role="link" attribute with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='good alternative'></span><span role='link' aria-label='good alternative'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});

// text that contains the substring “more”, “click here”, “...”

describe('String Fail: node with role="link" attribute with an accessible name calculation set a text value that contains the text "more"', function() {
   it('node with role="link" attribute with an accessible name calculation set a text value that contains the text "more" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='more'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with role="link" attribute with an accessible name calculation set a text value that contains the text "click here"', function() {
   it('node with role="link" attribute with an accessible name calculation set a text value that contains the text "click here" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' title='click here'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with role="link" attribute with an accessible name calculation set a text value that contains the text "..."', function() {
   it('node with role="link" attribute with an accessible name calculation set a text value that contains the text "..." should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='...'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: two nodes with role="link" attribute with an accessible name calculation set a text value that contains the text "..."', function() {
   it('two nodes with role="link" attribute with an accessible name calculation set a text value that contains the text "..." should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='...'></span><span role='link' aria-label='...'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,2");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(2);
      // </variant3>
   });
});

// * text is longer than 150 characters

describe('String Fail: node with role="link" attribute with an accessible name longer than 150 characters', function() {
   it('node with role="link" attribute with an accessible name calculation longer than 150 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-label='This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with with role="link" attribute with an accessible name calculation set a text value that contains the text "…"', function() {
   it('node with with role="link" attribute with an accessible name calculation set a text value that contains the text "…" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link'>…</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with with role="link" attribute with an accessible name calculation set a text value that contains the text "go"', function() {
   it('node with with role="link" attribute with an accessible name calculation set a text value that contains the text "go" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link'>go</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("241,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: node with with role="link" attribute with an accessible name calculation set a text value that contains the text "test"', function() {
   it('node with with role="link" attribute with an accessible name calculation set a text value that contains the text "test" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link'>test</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("241");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("241");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("241");
      expect(res).toBe(null);
      // </variant3>
   });
});