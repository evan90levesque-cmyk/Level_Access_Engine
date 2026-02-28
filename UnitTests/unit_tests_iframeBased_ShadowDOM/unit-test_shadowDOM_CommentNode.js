describe('web component with a comment node in its shadow dom before an image without alt text', function() {
    it('shouldn\'t fail to capture a violation in the image without alt text', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        const webComponentTagName = `my-component-${Math.round((new Date()).getTime())}`;
        customElements.define(webComponentTagName,
            class extends HTMLElement {
                constructor() {
                    super();

                    this.attachShadow({mode: 'open'}).innerHTML = `
                        <!-- -->
                        <img src="#">
                    `;
                }
            });
        const myComponent = document.createElement(webComponentTagName);
        document.querySelector("#testing").contentWindow.document.body.appendChild(myComponent);

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        const res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});
