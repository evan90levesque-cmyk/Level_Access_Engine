describe('String N/A: no audio nodes', function() {
    it('no audio nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("39");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an audio node with a style attribute set to the text "display:none;"', function() {
    it('an audio node with a style attribute set to the text "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio style='display:none;' controls></audio>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("39");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an audio node with a muted attribute', function() {
	it('an audio node with a muted attribute should be equal to na', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio muted controls></audio>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
		expect(res).toBe('na');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("39");
		expect(res).toBe(null);
		// </variant3>
	});
});
describe('String N/A: an audio node with a muted attribute set to the text "true"', function() {
	it('an audio node with a muted attribute set to the text "true" should be equal to na', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio muted='true' controls></audio>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
		expect(res).toBe('na');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("39");
		expect(res).toBe(null);
		// </variant3>
	});
});
describe('String N/A: an audio node with a muted attribute set to the text "foo"', function() {
	it('an audio node with a muted attribute set to the text "foo" should be equal to na', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio muted='foo' controls></audio>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
		expect(res).toBe('na');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("39");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe('String N/A: an audio node without an autoplay attribute', function() {
    it('an audio node without an autoplay attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio controls></audio>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("39");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an audio node with an autoplay attribute', function() {
    it('an audio node with an autoplay attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio autoplay controls></audio>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("39");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an audio node with an autoplay attribute set to the text "autoplay"', function() {
    it('an audio node with an autoplay attribute set to the text "autoplay" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio autoplay='foo' controls></audio>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("39");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an audio node with an autoplay attribute and src audio that is 2 seconds long', function() {
    it('an audio node with an autoplay attribute and src audio that is 2 seconds long should be equal to pass', async function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio autoplay controls><source src='resources/too_short.m4a' type='audio/mp4'></audio>";

        // wait for audio to load before testing
        while (!document.querySelector("#testing").contentWindow.document.body.querySelector('audio').duration) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("39");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Fail: an audio node with an autoplay attribute and src audio that is 4 seconds long', function() {
    it('an audio node with an autoplay attribute and src audio that is 4 seconds long should be equal to fail', async function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<audio autoplay controls><source src='resources/not_too_short.m4a' type='audio/mp4'></audio>";

        // wait for audio to load before testing
        while (!document.querySelector("#testing").contentWindow.document.body.querySelector('audio').duration) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("39");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("39");
        expect(res).toBe("39,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("39");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});
