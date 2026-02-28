describe('Testing nextgen_runAllTests_iOS_returnInstances_JSON', () => {
    const test684 = {
        id: '684',
		description:'One or more Button elements does not have an accessible label.',
		metaText:'This [[object]] element does not have an accessible label',
        type: 'AUTOMATIC'
    };
    const test690 = {
		id: '690',
		description:'One or more Image elements does not have an accessible label.',
		metaText:'This [[object]] element does not have an accessible label',
        type: 'AUTOMATIC'
    };

	it('should run only iOS tests', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-live='hello'>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		let jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();
		let results = JSON.parse(jsonResults);
		let failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(1);
		expect(failedResults[0].testId).toEqual('21');
		jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		results = JSON.parse(jsonResults);
		failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(0);
	});
	it('should return attributes for test meta data', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(1);
		expect(failedResults[0].testId).toEqual(test690.id);
		expect(failedResults[0].testType).toEqual(test690.type);
		expect(failedResults[0].results.length).toEqual(1);
	});
	it('should return all test results', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <div>
            <img src='#'>
            <button
                data-xmlnodetype="XCUIElementTypeButton"
                data-resource-id="Back"
                data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;"
                aria-label="Back"
                style="position:absolute;width:56px;height:56px;left:0px;top:44px;"
            ></button>
        </div>
        `;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const passedResults = filterResults(results, 'pass');
		expect(passedResults.length).not.toBe(0);
		const failedResults = filterResults(results, 'fail');
		expect(failedResults.length).not.toBe(0);
		const notAvailableResults = filterResults(results, 'na');
		expect(notAvailableResults.length).not.toBe(0);
	});
	it('should include mobile attributes when data-xmlnodetype exists in failed element', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
            <button
                data-xmlnodetype="XCUIElementTypeButton"
                data-resource-id=""
                data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;"
                style="position:absolute;width:218px;height:56px;left:16px;top:677px;"
            ></button>
		`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(1);
		expect(failedResults[0].testId).toEqual(test684.id);
		const resultDetails = failedResults[0].results;
		expect(resultDetails.length).toEqual(1);
		expect(resultDetails[0].uel).toEqual('width="218";height="56";x="16";y="677"');
		expect(resultDetails[0].element.startsWith('<XCUIElementTypeButton')).toBeTrue();
		expect(resultDetails[0].attributeDetail).toEqual('This Button element does not have an accessible label');
		expect(resultDetails[0].timestamp).toEqual(jasmine.anything());
	});
    
	it('should limit number of characters for element attribute', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <button
            data-xmlnodetype="XCUIElementTypeButton"
            data-resource-id=""
            data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;"
            style="position:absolute;width:56px;height:56px;left:112px;top:405px;"
        ></button>
		`;
		const longId = [...Array(3000)].map(() => 'a').join('');
		document.querySelector("#testing").contentWindow.document.querySelector('button').setAttribute('data-resource-id', longId);
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(1);
		expect(failedResults[0].testId).toEqual(test684.id);
		const resultDetails = failedResults[0].results;
		expect(resultDetails[0].element.startsWith('<XCUIElementTypeButton')).toBeTrue();
		expect(resultDetails[0].element.length).toEqual(2998);
	})
	it('should not include uel and element attributes when data-xmlnodetype does not exist in failed element', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <button
        data-resource-id=""
        data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;"
        style="position:absolute;width:56px;height:56px;left:112px;top:405px;"
    ></button>
		`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');
		expect(failedResults.length).toBe(1);
		expect(failedResults[0].testId).toEqual(test684.id);
		const resultDetails = failedResults[0].results;
		expect(resultDetails.length).toEqual(1);
		expect(resultDetails[0].uel).toBeFalsy();
		expect(resultDetails[0].element).toBeFalsy();
		expect(resultDetails[0].attributeDetail).toEqual(test684.metaText);
		expect(resultDetails[0].timestamp).toEqual(jasmine.anything());
	});

	it('should return element and uel fields', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<button 
				data-xmlnodetype="android.widget.Button" 
				data-resource-id=""
				data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;"
				title=""
				style="position:absolute;width:10px;height:20px;left:30px;top:40px;"
			></button>
		`;

		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');

		expect(failedResults.length).toBe(1);

		const resultDetails = failedResults[0].results;
		expect(resultDetails[0].element.includes('width="10" height="20" x="30" y="40"')).toBeTrue();
		expect(resultDetails[0].uel).toEqual('width="10";height="20";x="30";y="40"');
	});

	it('should return uel field when element has negative integers', () => {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<button 
				data-xmlnodetype="android.widget.Button" 
				data-resource-id=""
				data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;"
				title=""
				style="position:absolute;width:11px;height:22px;left:-33px;top:-44px;"
			></button>
		`;

		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const jsonResults = LevelAccess_AccessEngine.nextgen_runAllTests_iOS_returnInstances_JSON();
		const results = JSON.parse(jsonResults);
		const failedResults = filterResults(results, 'fail');

		expect(failedResults.length).toBe(1);

		const resultDetails = failedResults[0].results;
		expect(resultDetails[0].element.includes('width="11" height="22" x="-33" y="-44"')).toBeTrue();
		expect(resultDetails[0].uel).toEqual('width="11";height="22";x="-33";y="-44"');
	});

	function filterResults(results, outcome) {
		return results.filter((assertion) => assertion.outcome === outcome)
	}
});
