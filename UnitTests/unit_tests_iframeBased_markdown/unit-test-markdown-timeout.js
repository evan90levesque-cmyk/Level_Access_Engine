describe('if a markdown stage execution timeout is set and Engine\'s markdown stages are taking too long to execute', function() {
    it('abort execution once timeout is exceeded, but make sure live DOM is cleaned up', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";

        let bodyInnerHTML = "";
        for (let i = 0; i < 100; i++) {
            bodyInnerHTML += `<div>a${i}</div><div>b${i}</div><div>c${i}</div><div>d${i}</div><div>e${i}</div><div>f${i}</div><div>g${i}</div><div>h${i}</div><div>i${i}</div><div>j${i}</div>`;
        }

        document.querySelector("#testing").contentWindow.document.body.innerHTML = bodyInnerHTML;

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.setMarkdownStageExecutionTimeout(1);
        LevelAccess_AccessEngine.analytics_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getSuccess()).toBe(false);
        expect(LevelAccess_AccessEngine.getDidMarkdownStageExecutionTimeOut()).toBe(true);
        expect(document.querySelector("#testing").contentWindow.document.documentElement.outerHTML).not.toContain("data-ae");
    });
});

describe('if a markdown stage execution timeout is set and Engine\'s markdown stages don\'t take too long to execute', function() {
    it('execution should be allowed to finish, and live DOM should be cleaned up', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = `<div>hello</div>`;

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.setMarkdownStageExecutionTimeout(5000);
        LevelAccess_AccessEngine.analytics_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getSuccess()).toBe(true);
        expect(LevelAccess_AccessEngine.getDidMarkdownStageExecutionTimeOut()).toBe(false);
        expect(document.querySelector("#testing").contentWindow.document.documentElement.outerHTML).not.toContain("data-ae");
    });
});
