describe('runAllTests_returnXPathFilteredInstances_JSON for automatic tests - expect excluded img to be not flagged in results', function() {
    it('Test 1', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], '["/html/body/p/img"]'));
		//If the exclusion worked we should have only one img flagged under test 89
		var count=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count++}
        // automatic results
        expect(count).toBe(1);
    });
});

describe('runAllTests_returnXPathFilteredInstances_JSON for automatic tests - expect excluded images to be not flagged in results', function() {
    it('Test 2', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p><p><img id='excluded2' src='#'></p>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], '["/html/body/p/img"]'));
		//If the exclusion worked we should have only one img flagged under test 89
		var count=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count++}
        // automatic results
        expect(count).toBe(1);
    });
});

describe('runAllTests_returnXPathFilteredInstances_JSON for automatic tests - expect multiple XPaths to excluded images to be not flagged in results', function() {
    it('Test 3', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p><p><img id='excluded2' src='#'></p><div><img id='excluded3' src='#'></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], '["/html/body/p/img","/html/body/div/img"]'));
		//If the exclusion worked we should have only one img flagged under test 89
		var count=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count++}
        // automatic results
        expect(count).toBe(1);
    });
});

describe('runAllTests_returnXPathFilteredInstances_JSON for automatic tests - expect multiple XPaths to excluded images at the proper depth allowing others to be flagged in results', function() {
    it('Test 4', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p><p><img id='excluded2' src='#'></p><div><img id='excluded3' src='#'><div><img id='included2' src='#'></div></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], '["/html/body/p/img","/html/body/div/img"]'));
		//If the exclusion worked we should have only one img flagged under test 89
		var count=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count++}
        // automatic results
        expect(count).toBe(2);
    });
});

describe('runAllTests_returnXPathFilteredInstances_JSON for automatic and guided automatic tests - expect multiple XPaths to excluded images and links at the proper depth allowing other elements to be flagged in results', function() {
    it('Test 5', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p><div><a href='#' id='excluded2'>click here</a></div><a href='#' id='included2'>click here</a>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC, LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC], '["/html/body/p/img","/html/body/div/a"]'));
		//If the exclusion worked we should have only one img flagged under test 89 (automatic) and one link under 239 (guided automatic)
		var count89=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count89++}
		var count239=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==239)count239++}
        // automatic results
        expect(count89).toBe(1);
        expect(count239).toBe(1);
    });
});

describe('runAllTests_returnXPathFilteredInstances_JSON for automatic and guided automatic tests - expect XPaths id exclusion to exclude one image allowing other elements to be flagged in results', function() {
    it('Test 6', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img id='included' src='#'><p><img id='excluded' src='#'></p><div><a href='#' id='excluded2'>click here</a></div><a href='#' id='included2'>click here</a>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        //Tricky bit with three levels of quotes required innermost pair to be excaped with leading slash. Also, had to start with single quote on outermost layer.
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC, LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC], '["//*[@id=\'excluded\']"]'));
		//If the exclusion worked we should have only one img flagged under test 89
		var count89=0;for(var i=0;i<res.length;i++){if(res[i].engineTestId==89)count89++}
        // automatic results
        expect(count89).toBe(1);
    });
});

describe('ENG-941: Filter out test results for all descendants of elements specified by XPath, not just the elements themselves', function() {
    it('Test 7', function() {
        document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en");
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>ENG-941 Test</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div id='excluded'><div><img src='#'></div></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const allTestResults = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON());
        expect(allTestResults.length).toBe(1);

        const filteredTestResults = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnXPathFilteredInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], '["//*[@id=\'excluded\']"]'));
        expect(filteredTestResults.length).toBe(0);
    });
});