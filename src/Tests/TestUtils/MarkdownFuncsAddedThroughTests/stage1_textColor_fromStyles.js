// defines which presentational SVG node types should should have their 'fill' attributes treated as foreground colors versus background colors
// (each array is a subset of tag names from the one in this list: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
const PRESENTATIONAL_SVG_NODES_FILL_BACKGROUND = ['circle', 'ellipse', 'path', 'polygon', 'polyline', 'rect'];
const PRESENTATIONAL_SVG_NODES_FILL_FOREGROUND = ['altglyph', 'text', 'textPath', 'tref', 'tspan'];

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getBackgroundColor_FromStyles(computedStyles, testWind, node) {
    let backgroundColor;
    if (node && node.tagName && PRESENTATIONAL_SVG_NODES_FILL_BACKGROUND.indexOf(node.tagName.toLowerCase()) !== -1) {
        backgroundColor = computedStyles["fill"];
    } else {
        backgroundColor = computedStyles["background-color"];
    }
    return "background-color;" + backgroundColor;
}

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getFontSize_FromStyles(computedStyles) {
    return "font-size;" + computedStyles["font-size"];
}

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getFontWeight_FromStyles(computedStyles) {
   return "font-weight;" + computedStyles["font-weight"];
    
}

/**
 * Extract the information we need for color contrast testing from computed styles
 */
export function getColor_FromStyles(computedStyles, testWind, node) {
    let color;
    if (node && node.tagName && PRESENTATIONAL_SVG_NODES_FILL_FOREGROUND.indexOf(node.tagName.toLowerCase()) !== -1) {
        color = computedStyles["fill"];
    } else {
        color = computedStyles["color"];
    }
    return "color;" + color;
}
