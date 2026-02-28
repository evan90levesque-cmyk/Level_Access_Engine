describe('an iframe with an empty title inside the head node', function() {
    it('should be removed from the cloned DOM', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<iframe src="javascript:void(0)" title=""></iframe>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("iframe")).toBe(null);
    });
});

describe('a node inside the head', function() {
    it('should not have any straggling data-ae attributes in the live DOM after markdown stages have completed', function() {
        const testingWindow = document.querySelector("#testing").contentWindow;
        const testingDocument = testingWindow.document;

        testingDocument.head.innerHTML = '<title id="target">this is a title</title>';
        testingDocument.body.innerHTML = '';

        LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();

        const regex = /data-ae.*/;
        const attributeNames = testingDocument.querySelector("#target").getAttributeNames();
        const hasMatch = attributeNames.some(attributeName => regex.test(attributeName));
        expect(hasMatch).toBe(false);
    });
});
