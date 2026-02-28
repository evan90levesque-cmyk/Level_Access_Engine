describe('String N/A: no progress nodes', function() {
    it('no progress nodes should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("728");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: progress with a role set to a text value that starts with presentation', function() {
    it('progress with a role set to a text value that starts with presentation should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress role='presentation'></progress>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("728");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: a progress that is not available in the DOM', function() {
    it('a progress that is not available in the DOM should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress style='display:none'></progress>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("728");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: a progress that lacks an accessible name', function() {
    it('a progress that lacks an accessible name should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress></progress>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("728");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: a progress that lacks an accessible name (explicit label)', function() {
   it('a progress that lacks an accessible name (explicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>test</label><progress id='test'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a progress that lacks an accessible name (implicit label)', function() {
   it('a progress that lacks an accessible name (implicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>test<progress id='test'></progress></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a progress that lacks an accessible name (alt)', function() {
    it('a progress that lacks an accessible name (alt) should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress alt='test'></progress>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("728");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: a progress with an aria-labelledby attribute that is more than 3 characters', function() {
   it('a progress with an aria-labelledby attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>test</span><progress aria-labelledby='label1'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a progress with an aria-label attribute that is more than 3 characters', function() {
   it('a progress with an aria-label attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress aria-label='test'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      var res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a progress with a title attribute that is more than 3 characters', function() {
   it('a progress with a title attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress title='test'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a progress with an aria-label that is less than 4 characters', function() {
   it('a progress with an aria-label that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress aria-label='go'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("728,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a progress with an aria-labelledby that is less than 4 characters', function() {
   it('a progress with an aria-labelledby that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label id='foo'>go</label><progress aria-labelledby='foo'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("728,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a progress with a title that is less than 4 characters', function() {
   it('a progress with a title that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress title='go'></progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("728");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("728");
      expect(res).toBe("728,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("728");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});