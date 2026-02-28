describe('ENG-783: accessible name for real-world select example', function() {
    it('should be "marital status"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="test" id="DriversAddPniDetails_embedded_questions_list_MaritalStatus_Label">
                    <question-label _nghost-c20="" label-content="">
                        <span class="label" _ngcontent-c20="">
                            Marital Status
                        </span>
                    </question-label>
                    <select-input>
                        <select id="test">
                            <option value="D">Divorced</option>
                        </select>
                    </select-input>
            </label>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("marital status");
    });
});