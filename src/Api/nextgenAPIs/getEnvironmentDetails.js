import {aeKernel} from "../../Kernel/AEKernel.js";

/**
 * Gets the environment-level details from the `window` and `document` objects of the page under test
 */
export function getEnvironmentDetails() {
    const {window, document} = aeKernel;
    
    return {
        width: window ? window.innerWidth : null,
        height: window ? window.innerHeight : null,
        docWidth: document ? document.body.scrollWidth : null,
        docHeight: document ? document.body.scrollHeight : null,
        orientation: window ? (window.screen.orientation && window.screen.orientation.type) : null,
        userAgent: window ? window.navigator.userAgent : null
    };
}