import {blockStyles} from "../../../Markdown/MarkdownUtils/mdUtils";

function fromStyles(computedStyles, testWind, node, pseudoElt) {
    const computedStyle = testWind.getComputedStyle(node, pseudoElt);

    let pseudoEltFormattedContent = computedStyle.getPropertyValue('content').replace(/^"|\\|"$/g, "");
    if (pseudoEltFormattedContent === "" || pseudoEltFormattedContent === "none") {
        return null;
    }

    const props = [
        `content${pseudoElt};${pseudoEltFormattedContent}`
    ];
    for (let prop in blockStyles) {
        props.push(`${prop}${pseudoElt};${computedStyle.getPropertyValue(prop)}`);
    }
    return props.join(';');
}

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getBefore_FromStyles(computedStyles, testWind, node) {
    return fromStyles(computedStyles, testWind, node, ':before');
}

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getAfter_FromStyles(computedStyles, testWind, node) {
    return fromStyles(computedStyles, testWind, node, ':after');
}
