describe('String N/A: no svg nodes', function() {
    it('no svg nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg node, no accessible name', function() {
    it('svg node, no accessible name should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg role='img'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg node with a style set to a text value "display:none"', function() {
    it('svg node with a style set to a text value "display:none" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg style='display:none' aria-label='alternative'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: svg node with an accessible name calculation set to a non-suspicious text value', function() {
    it('svg node with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='good alternative'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res).toBe(null);
       // </variant3>
    });
});

//  * text that contains the substring ".gif", ".jpg", ".png";

describe('String Fail: svg node with an accessible name calculation set a text value that contains the text ".gif"', function() {
    it('svg node with an accessible name calculation set a text value that contains the text ".gif" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='test.gif'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set a text value that contains the text ".jpg"', function() {
    it('svg node with an accessible name calculation set a text value that contains the text ".jpg" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='test.jpg'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set a text value that contains the text ".png"', function() {
    it('svg node with an accessible name calculation set a text value that contains the text ".png" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='test.png'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg node with an accessible name calculation set to "img"', function() {
    it('svg node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='img'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "spacer"', function() {
    it('svg node with an accessible name calculation set to "spacer" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='spacer'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "alt"', function() {
    it('svg node with an accessible name calculation set to "alt" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='alt'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "blank"', function() {
    it('svg node with an accessible name calculation set to "blank" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='blank'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "_"', function() {
    it('svg node with an accessible name calculation set to "_" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='_'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "null"', function() {
    it('svg node with an accessible name calculation set to "null" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='null'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "img"', function() {
    it('svg node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='img'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg node with an accessible name calculation set to "photo"', function() {
    it('svg node with an accessible name calculation set to "photo" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='photo'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "image"', function() {
    it('svg node with an accessible name calculation set to "image" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='image'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "corner"', function() {
    it('svg node with an accessible name calculation set to "corner" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='corner'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "tag"', function() {
    it('svg node with an accessible name calculation set to "tag" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='tag'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "img"', function() {
    it('svg node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='img'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// "picture", "header", "histogram", "chart", "undefined"

describe('String Fail: svg node with an accessible name calculation set to "picture"', function() {
    it('svg node with an accessible name calculation set to "picture" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='picture'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "header"', function() {
    it('svg node with an accessible name calculation set to "header" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='header'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "histogram"', function() {
    it('svg node with an accessible name calculation set to "histogram" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='histogram'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "chart"', function() {
    it('svg node with an accessible name calculation set to "chart" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='chart'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
       expect(res).toBe("236,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("236");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node with an accessible name calculation set to "undefined"', function() {
   it('svg node with an accessible name calculation set to "undefined" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg aria-label='undefined'></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
      expect(res).toBe("236,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("236");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String N/A: svg node inside excluded elements', function() {
   const testCases = [
      { element: 'button', html: '<button><svg aria-label="test"></svg></button>' },
      { element: 'anchor', html: '<anchor><svg aria-label="test"></svg></anchor>' },
      { element: 'meter', html: '<meter><svg aria-label="test"></svg></meter>' },
      { element: 'progress', html: '<progress><svg aria-label="test"></svg></progress>' }
   ];

   testCases.forEach(({ element, html }) => {
      it(`svg node inside ${element} should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("236");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});

describe('String N/A: svg node inside elements with excluded roles', function() {
   const testCases = [
      { role: 'button', html: '<div role="button"><svg aria-label="test"></svg></div>' },
      { role: 'link', html: '<div role="link"><svg aria-label="test"></svg></div>' },
      { role: 'checkbox', html: '<div role="checkbox"><svg aria-label="test"></svg></div>' },
      { role: 'img', html: '<div role="img"><svg aria-label="test"></svg></div>' },
      { role: 'menuitemcheckbox', html: '<div role="menuitemcheckbox"><svg aria-label="test"></svg></div>' },
      { role: 'menuitemradio', html: '<div role="menuitemradio"><svg aria-label="test"></svg></div>' },
      { role: 'meter', html: '<div role="meter"><svg aria-label="test"></svg></div>' },
      { role: 'option', html: '<div role="option"><svg aria-label="test"></svg></div>' },
      { role: 'progressbar', html: '<div role="progressbar"><svg aria-label="test"></svg></div>' },
      { role: 'radio', html: '<div role="radio"><svg aria-label="test"></svg></div>' },
      { role: 'scrollbar', html: '<div role="scrollbar"><svg aria-label="test"></svg></div>' },
      { role: 'separator', html: '<div role="separator"><svg aria-label="test"></svg></div>' },
      { role: 'slider', html: '<div role="slider"><svg aria-label="test"></svg></div>' },
      { role: 'switch', html: '<div role="switch"><svg aria-label="test"></svg></div>' },
      { role: 'tab', html: '<div role="tab"><svg aria-label="test"></svg></div>' }
   ];

   testCases.forEach(({ role, html }) => {
      it(`svg node inside element with role="${role}" should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("236");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("236");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("236");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});