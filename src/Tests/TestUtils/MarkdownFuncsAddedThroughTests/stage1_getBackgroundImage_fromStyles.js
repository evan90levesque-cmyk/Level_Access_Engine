/**
 * Extract the information we need for background image testing from computed styles
 */
export function getBackgroundImage_FromStyles(computedStyles) {
    let backImg = computedStyles["background-image"];
    if (backImg !== "none") {
        return "background-image;yes";
    }
    return null;
}