describe('a node inside the body', function() {
    it('should not have any straggling data-ae attributes in the live DOM after markdown stages have completed', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;

        testingDocument.head.innerHTML = '';
        testingDocument.body.innerHTML = '<div id="target"></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();

        const regex = /data-ae.*/;
        const attributeNames = testingDocument.querySelector("#target").getAttributeNames();
        const hasMatch = attributeNames.some(attributeName => regex.test(attributeName));
        expect(hasMatch).toBe(false);
    });
});
