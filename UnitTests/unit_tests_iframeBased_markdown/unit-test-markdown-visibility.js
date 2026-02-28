describe('a node inside the body', function() {

    it('should test elements with visibility:visible attributes', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;

        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = '<div id="target" style="visibility:hidden"><div style="visibility:visible"><img src="#" class="should fail but does not"></div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
		const outcome = LevelAccess_AccessEngine.runTest_returnOutcome("89");
		expect(outcome).toBe('fail');
    });

    it('should test elements with visibility:visible attributes that have extra spacing', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;

        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = '<div id="target" style="visibility:    hidden"><div style="visibility:      visible"><img src="#" class="should fail but does not"></div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
		const outcome = LevelAccess_AccessEngine.runTest_returnOutcome("89");
		expect(outcome).toBe('fail');
    });

    it('should test elements with only visibility:hidden attributes', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;

        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = '<div id="target" style="visibility:hidden"><div><img src="#" class="should fail but does not"></div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
		const outcome = LevelAccess_AccessEngine.runTest_returnOutcome("89");
		expect(outcome).toBe('na');
    });

    it('should test nested visibility', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;
        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = '<div id="target" style="visibility:hidden"><div>1 - invisible<div style="visibility:visible">2 - visible<img style="visibility:hidden" src="#"></div></div></div>';
        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
        const outcome = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(outcome).toBe('na');
    });

    describe('elements with visibility:visible nested inside elements with display:none', () => {
        it('should not test elements with display:none nested inside elements with visibility:visible', function() {
            const testingWindow = document.querySelector("#testing").contentWindow;
            const testingDocument = testingWindow.document;
            testingDocument.head.innerHTML = '';
            testingDocument.body.innerHTML = `
            <div style="visibility: visible;">
                <div style="display: none;">
                    <div id="test" tabindex="0" role="button"></div>
                </div>
            </div>
            `
            LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);

            var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
            var resObj = JSON.parse(res);
            expect(resObj).toHaveSize(0);
            expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_invis")).toBe('true');
        });

        it('should not test elements with visibility:visible nested inside elements with display:none', function() {
            const testingWindow = document.querySelector("#testing").contentWindow;
            const testingDocument = testingWindow.document;
            testingDocument.head.innerHTML = '';
            testingDocument.body.innerHTML = `
            <div style="display:none">
                <div class="foo" style="visibility:visible">
                    <img id="test" src="foo">
                </div>
            </div>
            `
            LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);

            var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
            var resObj = JSON.parse(res);
            expect(resObj).toHaveSize(0);
            expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_invis")).toBe('true');
        });

        it('should not test elements nested in elements that have visibility:visible and display:none', function() {
            const testingWindow = document.querySelector("#testing").contentWindow;
            const testingDocument = testingWindow.document;
            testingDocument.head.innerHTML = '';
            testingDocument.body.innerHTML = `
            <style>.foo {display:none}</style>
            <div class="foo" style="visibility:visible">
                <img id="test" src="foo">
            </div>
            `
            LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);

            var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
            var resObj = JSON.parse(res);
            expect(resObj).toHaveSize(0);
            expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_invis")).toBe('true');
        });
    });

    it('should not flag an image with accessible name within an element with display:none as a false positive', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;
        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = `
            <style>.foo {display:none}</style>
            <div class="foo" style="visibility:visible">
                <img src="foo" alt="good text">
            </div>
            `
        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);

        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        var resObj = JSON.parse(res);
        expect(resObj).toHaveSize(0);
    });

    it('should not flag a button with accessible name within an element with display:none as a false positive', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;
        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = `            
            <div style="visibility: visible;">
               <div style="display: none;">
                  <div tabindex="0" role="button" aria-labelledby="triggerText"></div>
                  <span id="triggerText">More</span>
              </div>
            </div>
            `
        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);

        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        var resObj = JSON.parse(res);
        expect(resObj).toHaveSize(0);
    });
});