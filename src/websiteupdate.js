
/**
 * Portfolio website functionality.
 * Updates the copyright year automatically.
 */

/**
 * Updates the year displayed in the website footer.
 *
 * @returns {void} This function does not return a value.
 */
function updateCopyrightYear() {
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
}

// Run the function once the HTML document has loaded.
document.addEventListener("DOMContentLoaded", updateCopyrightYear);
