describe('Testing nextgen_runAllTests_returnInstances_JSON', function () {
	it('for selectively returning automatic and/or guided automatic test results', function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const reducer = (testResults, assertion) => (assertion.outcome === 'fail') ? testResults.concat(assertion.testId) : testResults;

		// automatic test results by default, i.e. when given no parameters
		let res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();
		let resObj = JSON.parse(res);
		let testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('89');
		expect(testIds.length).toBe(1);

		//Verify that failed test 89 has attributeDetail in results and tokens have been properly replaced
		expect(resObj.find(bob => bob.testId == 89).results[0].attributeDetail.includes("This img element")).toBe(true);

		// just automatic test results
		res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC]);
		resObj = JSON.parse(res);
		testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('89');
		expect(testIds.length).toBe(1);

		// just guided automatic test results
		res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC]);
		resObj = JSON.parse(res);
		testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('400');
		expect(testIds.length).toBe(2);
	});

	it('for including test results with their offending element\'s outer HTML if and only if the \'shouldIncludeElement\' parameter is set to true', function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title>";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const reducer = (testResults, assertion) => (assertion.outcome === 'fail') ? testResults.concat(assertion.testId) : testResults;

		// not by default...
		let res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();
		let resObj = JSON.parse(res);
		let testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('89');
		expect(testIds.length).toBe(1);
		for (const assertion of resObj) {
			for (const result of assertion.results) {
				expect(result.element).not.toBeDefined();
			}
		}

		// ...and not if 'shouldIncludeElement' is set to false...
		res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], false);
		resObj = JSON.parse(res);
		testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('89');
		expect(testIds.length).toBe(1);
		for (const assertion of resObj) {
			for (const result of assertion.results) {
				expect(result.element).not.toBeDefined();
			}
		}

		// ...but only if 'shouldIncludeElement' is set to true
		res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.AUTOMATIC], true);
		resObj = JSON.parse(res);
		testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('89');
		expect(testIds.length).toBe(1);
		for (const assertion of resObj) {
			for (const result of assertion.results) {
				// certain elements shouldn't have their outer HTML represented even when 'shouldIncludeElement' is set to true
				if (assertion.testId === '89') {
					expect(result.element).toBeTruthy();
				}
			}
		}
	});
});
