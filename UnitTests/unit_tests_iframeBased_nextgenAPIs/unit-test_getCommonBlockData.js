describe('the object returned by getCommonBlockData', () => {
    it('should be null when nextgen_runAllTests_returnInstances_JSON hasn\'t been run yet', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>foo</a>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // check when tests have been run, but not via nextgen_runAllTests_returnInstances_JSON

        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode()).not.toBe(null);

        const clonedAElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('a');
        expect(clonedAElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedAElement);
        expect(commonBlockDataForClonedElement).toBe(null);

        // check when tests have been run via nextgen_runAllTests_returnInstances_JSON

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode()).not.toBe(null);

        const clonedAElement2 = LevelAccess_AccessEngine.getRootTestNode().querySelector('a');
        expect(clonedAElement2).not.toBe(null);

        const commonBlockDataForClonedElement2 = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedAElement2);
        expect(commonBlockDataForClonedElement2).not.toBe(null);
    });

    it('should be null when computed for the body', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedBodyElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('body');
        expect(clonedBodyElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedBodyElement);
        expect(commonBlockDataForClonedElement).toBe(null);
    });

    it('should be null when computed for a meta element in the head', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta charset='utf-8'>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedMetaElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('meta');
        expect(clonedMetaElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedMetaElement);
        expect(commonBlockDataForClonedElement).toBe(null);
    });

    it('should contain valid clustering data when computed for an img element', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedImgElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('img');
        expect(clonedImgElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedImgElement);
        expect(commonBlockDataForClonedElement).not.toBe(null);

        const clusteringDataForClonedElement = commonBlockDataForClonedElement.clusteringData;
        expect(clusteringDataForClonedElement).not.toBe(null);
        expect(clusteringDataForClonedElement.uniqueId).toBe('2');
        expect(clusteringDataForClonedElement.tagName).toBe("img");
        expect(clusteringDataForClonedElement.attributes).toEqual({
            src: '#'
        });
        expect(clusteringDataForClonedElement.text).toBe("");
        expect(clusteringDataForClonedElement.children.length).toBe(0);
    });

    it('should contain valid clustering data when computed for a h2 element that comes after an h1 element', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>testing h1!</h1><h2>testing h2!</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedH2Element = LevelAccess_AccessEngine.getRootTestNode().querySelector('h2');
        expect(clonedH2Element).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedH2Element);
        expect(commonBlockDataForClonedElement).not.toBe(null);

        const clusteringDataForClonedElement = commonBlockDataForClonedElement.clusteringData;
        expect(clusteringDataForClonedElement).not.toBe(null);
        expect(clusteringDataForClonedElement.uniqueId).toBe('3');
        expect(clusteringDataForClonedElement.tagName).toBe("h2");
        expect(clusteringDataForClonedElement.attributes).toEqual({});
        expect(clusteringDataForClonedElement.text).toBe("testing h2!");
        expect(clusteringDataForClonedElement.children.length).toBe(0);
    });

    it('should contain valid clustering data when computed for a p element with two spans in it', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = `
            <p>
                <span>foo</span>
                <span>bar</span>
            </p>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedPElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('p');
        expect(clonedPElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedPElement);
        expect(commonBlockDataForClonedElement).not.toBe(null);

        const clusteringDataForClonedElement = commonBlockDataForClonedElement.clusteringData;
        expect(clusteringDataForClonedElement).not.toBe(null);
        expect(clusteringDataForClonedElement.uniqueId).toBe('2');
        expect(clusteringDataForClonedElement.tagName).toBe("p");
        expect(clusteringDataForClonedElement.attributes).toEqual({});
        expect(clusteringDataForClonedElement.text.trim()).toBe("");
        expect(clusteringDataForClonedElement.children[0]).toBeTruthy();
        expect(clusteringDataForClonedElement.children[0].uniqueId).toBe('3');
        expect(clusteringDataForClonedElement.children[0].tagName).toBe("span");
        expect(clusteringDataForClonedElement.children[0].attributes).toEqual({});
        expect(clusteringDataForClonedElement.children[0].text).toBe("foo");
        expect(clusteringDataForClonedElement.children[0].children.length).toBe(0);
        expect(clusteringDataForClonedElement.children[1]).toBeTruthy();
        expect(clusteringDataForClonedElement.children[1].uniqueId).toBe('4');
        expect(clusteringDataForClonedElement.children[1].tagName).toBe("span");
        expect(clusteringDataForClonedElement.children[1].attributes).toEqual({});
        expect(clusteringDataForClonedElement.children[1].text).toBe("bar");
        expect(clusteringDataForClonedElement.children[1].children.length).toBe(0);
    });

    it('should contain valid common block and common block instance keys when computed for an img element', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON();

        const clonedImgElement = LevelAccess_AccessEngine.getRootTestNode().querySelector('img');
        expect(clonedImgElement).not.toBe(null);

        const commonBlockDataForClonedElement = LevelAccess_AccessEngine.getRootTestNode().getCommonBlockData(clonedImgElement, 12345, "https://example.com/", "163336f1-0b08-4a68-8aea-c090edc82597");
        expect(commonBlockDataForClonedElement).not.toBe(null);

        // see https://levelaccess-internal.atlassian.net/wiki/spaces/ARCH/pages/956924108/NextGen+Unified+Test+Results#Overview for how to compute the keys below
        expect(commonBlockDataForClonedElement.commonBlockKey).toBe("1cb2e7b68440baca9be265b9aa775367ee893f754d95dba649a8dfc06061cc6b");
        expect(commonBlockDataForClonedElement.commonBlockInstanceKey).toBe("d26590d8390e3c30b2f213f54a8b009cba76e8eef8c3b4bd01a45722d6d8afc2");
    });
});
