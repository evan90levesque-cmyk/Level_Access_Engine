describe('ENG-973: the accessible name of a span element with a role="Checkbox" attribute and inner text of "Checkbox"', function() {
    it('should be "Checkbox"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <span role="Checkbox" tabindex="0">Checkbox</span>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("span").getAttribute("data-ae_an")).toBe("checkbox");
    });
});