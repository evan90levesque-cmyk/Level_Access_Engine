describe('String N/A: no nodes with a role="img" attribute', function() {
    it('no nodes with a role="img" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role="img" attribute, no accessible name', function() {
    it('node with a role="img" attribute, no accessible name should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg with a role="graphics-symbol" attribute, no accessible name', function() {
   it('svg with a role="graphics-symbol" attribute, no accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg with a role="graphics-document" attribute, no accessible name', function() {
   it('svg with a role="graphics-document" attribute, no accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: node with a role="img" attribute with a style set to a text value "display:none"', function() {
    it('node with a role="img" attribute with a style set to a text value "display:none" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' style='display:none' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg with a role="graphics-symbol" attribute with a style set to a text value "display:none"', function() {
   it('svg with a role="graphics-symbol" attribute with a style set to a text value "display:none" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol' style='display:none'><title>alternative</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg with a role="graphics-document" attribute with a style set to a text value "display:none"', function() {
   it('svg with a role="graphics-document" attribute with a style set to a text value "display:none" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document' style='display:none'><title>alternative</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with a role="img" attribute with an accessible name calculation set to a non-suspicious text value', function() {
    it('node with a role="img" attribute with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='good alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: svg with a role="graphics-symbol" attribute with an accessible name calculation set to a non-suspicious text value', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>good alternative</title></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: svg with a role="graphics-document" attribute with an accessible name calculation set to a non-suspicious text value', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>good alternative</title></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res).toBe(null);
      // </variant3>
   });
});

/////
// IMG

//  * text that contains the substring ".gif", ".jpg", ".png";

describe('String Fail: node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".gif"', function() {
    it('node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".gif" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='test.gif'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".jpg"', function() {
    it('node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".jpg" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='test.jpg'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".png"', function() {
    it('node with a role="img" attribute with an accessible name calculation set a text value that contains the text ".png" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='test.png'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "img"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "img" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='img'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "spacer"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "spacer" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='spacer'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "alt"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "alt" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='alt'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "blank"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "blank" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='blank'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "_"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "_" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='_'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "null"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "null" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='null'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "photo"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "photo" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='photo'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "image"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "image" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='image'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "corner"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "corner" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='corner'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "tag"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "tag" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='tag'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "picture"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "picture" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='picture'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "header"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "header" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='header'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "histogram"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "histogram" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='histogram'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "chart"', function() {
    it('node with a role="img" attribute with an accessible name calculation set to "chart" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='chart'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
       expect(res).toBe("235,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("235");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role="img" attribute with an accessible name calculation set to "undefined"', function() {
   it('node with a role="img" attribute with an accessible name calculation set to "undefined" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-label='undefined'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

/////
// SVG graphics-symbol

//  * text that contains the substring ".gif", ".jpg", ".png";

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".gif"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".gif" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>test.gif</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".jpg"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".jpg" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>test.jpg</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".png"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set a text value that contains the text ".png" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>test.png</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "img"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "img" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>img</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "spacer"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "spacer" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>spacer</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "alt"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "alt" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>alt</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "blank"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "blank" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>blank</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "_"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "_" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>_</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "null"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "null" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>null</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "photo"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "photo" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>photo</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "image"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "image" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>image</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "corner"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "corner" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>corner</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "tag"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "tag" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>tag</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "picture"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "picture" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>picture</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "header"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "header" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>header</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "histogram"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "histogram" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>histogram</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "chart"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "chart" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>chart</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-symbol" attribute with an accessible name calculation set to "undefined"', function() {
   it('svg with a role="graphics-symbol" attribute with an accessible name calculation set to "undefined" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>undefined</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});


/////
// SVG graphics-document

//  * text that contains the substring ".gif", ".jpg", ".png";

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".gif"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".gif" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>test.gif</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".jpg"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".jpg" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>test.jpg</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".png"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set a text value that contains the text ".png" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>test.png</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "img"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "img" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>img</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "spacer"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "spacer" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>spacer</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "alt"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "alt" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>alt</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "blank"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "blank" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>blank</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "_"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "_" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>_</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "null"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "null" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>null</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "photo"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "photo" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>photo</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "image"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "image" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>image</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "corner"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "corner" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>corner</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "tag"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "tag" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>tag</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "picture"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "picture" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>picture</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "header"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "header" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>header</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "histogram"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "histogram" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>histogram</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "chart"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "chart" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>chart</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: svg with a role="graphics-document" attribute with an accessible name calculation set to "undefined"', function() {
   it('svg with a role="graphics-document" attribute with an accessible name calculation set to "undefined" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>undefined</title></svg>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("235");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("235");
      expect(res).toBe("235,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("235");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});