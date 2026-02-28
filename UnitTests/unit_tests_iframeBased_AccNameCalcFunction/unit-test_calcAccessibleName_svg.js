describe('calcAccessibleName_svg1: svg node with a text node as a child', function() {
    it('svg node with a text node as a child should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<svg id='test'> </svg>";  // note the empty space
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('ENG-786: accessible name for real-world svg example with title', function() {
    it('should be "a yellow circle"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" id="test" role="img" width="100" height="100">
                <title>A yellow circle</title>
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("a yellow circle");
    });
});

describe('ENG-786: accessible name for real-world svg example with a role of "graphics-document" with a title', function() {
    it('should be "3 circles"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" id="test" role="graphics-document">
                <title>3 circles</title>
                <g role="group">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
                    <circle cx="150" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
                    <circle cx="250" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
                </g>
            </svg>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("3 circles");
    });
});

describe('ENG-786: accessible name for real-world svg example with a role of "graphics-document" with a title and a g node with a role of "graphics-object" with a description and rect node with an aria-label and a g element with an aria label', function() {
    it('should be "3 shapes"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <svg xmlns="https://www.w3.org/2000/svg" id="test" width="600" height="400" viewBox="200 0 400 400" role="graphics-document">
                <title>3 shapes</title>
                <g role="graphics-object" aria-label="Blue rectangle" transform="translate(100,100)">
                    <desc>Large blue rectangle with two other shapes inside it</desc>
                    <rect fill="blue" role="graphics-object" aria-label=" large blue rectangle" width="200" height="100" y="-100" />
                    <g role="graphics-object" aria-label="small yellow rectangle in larger green rectangle" transform="translate(30,-90)"> <!-- the aria-label descr -->
                        <rect fill="green" width="50" height="90"/> 
                        <rect fill="yellow" x="5" y="5" width="40" height="30" />
                    </g>
                </g>
            </svg>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("3 shapes");
    });
});
