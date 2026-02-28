describe('calcAccessibleName_radio_type1: input element with a type="radio" attribute and two values in aria-labelledby', function() {
    it('input element with a type="radio" attribute and two values in aria-labelledby', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<div id="divChildrenQ" class="spacer">Is your child traveling alone?</div><label id="umnrNoLabel"><input type="radio" id="test" name="umnrOption" value="No" aria-labelledby="divChildrenQ umnrNoLabel">No</label>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("is your child traveling alone? no");
    });
});

describe('ENG-783: accessible name for real-world radio input example', function() {
    it('should be "something"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="foo">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <input type="radio" id="foo" name="bar">
                <div>something</div>
            </label>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#foo").getAttribute("data-ae_an")).toBe("something");
    });
});