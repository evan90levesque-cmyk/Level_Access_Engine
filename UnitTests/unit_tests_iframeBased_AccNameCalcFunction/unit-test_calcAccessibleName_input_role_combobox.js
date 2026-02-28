describe('ENG-868: accessible name for real-world combobox input example', function() {
    it('should be "tester"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="module-filter-tester-input">Tester</label>
            <input role="combobox" id="module-filter-tester-input">
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#module-filter-tester-input").getAttribute("data-ae_an")).toBe("tester");
    });
});
