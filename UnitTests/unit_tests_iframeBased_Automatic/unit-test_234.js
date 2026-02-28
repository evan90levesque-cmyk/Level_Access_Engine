describe('String N/A: no img nodes', function() {
    it('no img nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node, no accessible name', function() {
    it('img node, no accessible name should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node with a style set to a text value "display:none"', function() {
    it('img node with a style set to a text value "display:none" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' style='display:none' alt='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node with a role set to the text value "presentation"', function() {
    it('img node with a role set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' role='presentation' alt='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: img node with an accessible name calculation set to a non-suspicious text value', function() {
    it('img node with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='good alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res).toBe(null);
       // </variant3>
    });
});

//  * text that contains the substring ".gif", ".jpg", ".png";

describe('String Fail: img node with an accessible name calculation set a text value that contains the text ".gif"', function() {
    it('img node with an accessible name calculation set a text value that contains the text ".gif" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='test.gif'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set a text value that contains the text ".jpg"', function() {
    it('img node with an accessible name calculation set a text value that contains the text ".jpg" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' aria-label='test.jpg'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set a text value that contains the text ".png"', function() {
    it('img node with an accessible name calculation set a text value that contains the text ".png" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='test.png'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: img node with an accessible name calculation set to "img"', function() {
    it('img node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='img'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "spacer"', function() {
    it('img node with an accessible name calculation set to "spacer" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='spacer'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "alt"', function() {
    it('img node with an accessible name calculation set to "alt" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "blank"', function() {
    it('img node with an accessible name calculation set to "blank" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='blank'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "_"', function() {
    it('img node with an accessible name calculation set to "_" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='_'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "null"', function() {
    it('img node with an accessible name calculation set to "null" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='null'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "img"', function() {
    it('img node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='img'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined"

describe('String Fail: img node with an accessible name calculation set to "photo"', function() {
    it('img node with an accessible name calculation set to "photo" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='photo'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "image"', function() {
    it('img node with an accessible name calculation set to "image" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='image'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "corner"', function() {
    it('img node with an accessible name calculation set to "corner" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='corner'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "tag"', function() {
    it('img node with an accessible name calculation set to "tag" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='tag'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "img"', function() {
    it('img node with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='img'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// "picture", "header", "histogram", "chart", "undefined"

describe('String Fail: img node with an accessible name calculation set to "picture"', function() {
    it('img node with an accessible name calculation set to "picture" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='picture'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "header"', function() {
    it('img node with an accessible name calculation set to "header" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='header'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "histogram"', function() {
    it('img node with an accessible name calculation set to "histogram" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='histogram'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "chart"', function() {
    it('img node with an accessible name calculation set to "chart" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='chart'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
       expect(res).toBe("234,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("234");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: img node with an accessible name calculation set to "undefined"', function() {
   it('img node with an accessible name calculation set to "undefined" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='undefined'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
      expect(res).toBe("234,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("234");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: img node with an accessible name calculation set to "undefined" and role set to "img"', function() {
   it('img node with an accessible name calculation set to "undefined" and role set to "img" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' role='img' alt='undefined'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
      expect(res).toBe("234,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("234");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String N/A: img node inside excluded elements', function() {
   const testCases = [
      { element: 'button', html: '<button><img src="#" alt="test"></button>' },
      { element: 'anchor', html: '<anchor><img src="#" alt="test"></anchor>' },
      { element: 'meter', html: '<meter><img src="#" alt="test"></meter>' },
      { element: 'progress', html: '<progress><img src="#" alt="test"></progress>' }
   ];

   testCases.forEach(({ element, html }) => {
      it(`img node inside ${element} should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("234");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});

describe('String N/A: img node inside elements with excluded roles', function() {
   const testCases = [
      { role: 'button', html: '<div role="button"><img src="#" alt="test"></div>' },
      { role: 'link', html: '<div role="link"><img src="#" alt="test"></div>' },
      { role: 'checkbox', html: '<div role="checkbox"><img src="#" alt="test"></div>' },
      { role: 'img', html: '<div role="img"><img src="#" alt="test"></div>' },
      { role: 'menuitemcheckbox', html: '<div role="menuitemcheckbox"><img src="#" alt="test"></div>' },
      { role: 'menuitemradio', html: '<div role="menuitemradio"><img src="#" alt="test"></div>' },
      { role: 'meter', html: '<div role="meter"><img src="#" alt="test"></div>' },
      { role: 'option', html: '<div role="option"><img src="#" alt="test"></div>' },
      { role: 'progressbar', html: '<div role="progressbar"><img src="#" alt="test"></div>' },
      { role: 'radio', html: '<div role="radio"><img src="#" alt="test"></div>' },
      { role: 'scrollbar', html: '<div role="scrollbar"><img src="#" alt="test"></div>' },
      { role: 'separator', html: '<div role="separator"><img src="#" alt="test"></div>' },
      { role: 'slider', html: '<div role="slider"><img src="#" alt="test"></div>' },
      { role: 'switch', html: '<div role="switch"><img src="#" alt="test"></div>' },
      { role: 'tab', html: '<div role="tab"><img src="#" alt="test"></div>' }
   ];

   testCases.forEach(({ role, html }) => {
      it(`img node inside element with role="${role}" should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("234");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("234");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("234");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});