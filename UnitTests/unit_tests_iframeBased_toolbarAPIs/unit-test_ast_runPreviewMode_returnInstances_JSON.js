describe('Test 1 - Testing runAllTests_returnInstances_JSON with previewMode_backgroundImages', function() {
    it('Test 1', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div style='background-image: url(paper.gif);'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_backgroundImages");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});

describe('Test 2 - Testing runAllTests_returnInstances_JSON with previewMode_elsWithLangAttribs', function() {
    it('Test 2', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div lang='en'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_elsWithLangAttribs");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});

describe('Test 3 - Testing runAllTests_returnInstances_JSON with previewMode_headings', function() {
    it('Test 3', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1></h1><h2></h2>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_headings");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(2);
    });
});

describe('Test 4 - Testing runAllTests_returnInstances_JSON with previewMode_iframes', function() {
    it('Test 4', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<iframe src='#' title='hello'></iframe>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_iframes");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});

describe('Test 5 - Testing runAllTests_returnInstances_JSON with previewMode_images', function() {
    it('Test 5', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#' alt='hello'/><img src='#'/>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_images");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(2);
    });
});

describe('Test 6 - Testing runAllTests_returnInstances_JSON with previewMode_lists', function() {
    it('Test 6', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol><li></li></ol><ul><li></li></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_lists");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(2);
    });
});

describe('Test 7 - Testing runAllTests_returnInstances_JSON with previewMode_tableCells', function() {
    it('Test 7', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Heading 1</th><th>Heading 2</th></tr><tr><td>Cell 1</td><td>Cell 2</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_tableCells");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(2);
    });
});

describe('Test 8 - Testing runAllTests_returnInstances_JSON with previewMode_tableHeadings', function() {
    it('Test 8', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Heading 1</th><th>Heading 2</th></tr><tr><td>Cell 1</td><td>Cell 2</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_tableHeadings");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(2);
    });
});

describe('Test 8 - Testing runAllTests_returnInstances_JSON with previewMode_tables', function() {
    it('Test 8', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Heading 1</th><th>Heading 2</th><th>Heading 3</th><th>Heading 4</th></tr><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runPreviewMode_returnInstances_JSON("previewMode_tables");
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});