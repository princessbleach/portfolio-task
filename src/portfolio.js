
/**
 * Portfolio footer utilities.
 * @file
 */

/**
 * Updates the copyright year displayed in the footer.
 *
 * This function keeps the portfolio's copyright notice current
 * automatically, without requiring manual edits each year.
 *
 * @param {HTMLElement|null} yearElement - The element displaying the year.
 * @returns {void}
 */
function updateCopyrightYear(yearElement) {
    if (!yearElement) {
        return;
    }

    yearElement.textContent = String(new Date().getFullYear());
}

/**
 * Finds the footer year element and updates it when the page loads.
 *
 * @returns {void}
 */
function initialisePortfolioFooter() {
    const yearElement = document.querySelector("#year");
    updateCopyrightYear(yearElement);
}

document.addEventListener("DOMContentLoaded", initialisePortfolioFooter);
