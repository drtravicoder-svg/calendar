/**
 * Venkatrama Telugu Calendar - Main Entry Point
 * Loads JSON data and initializes the renderer
 */

import { renderHeader } from './header-renderer.js';
import { renderSubHeader } from './subheader-renderer.js';

// Data objects (loaded from JSON files)
let designTemplate = null;
let companyData = null;
let monthlyData = null;

// Current selected month (default: September = index 1 in our data)
let currentMonthIndex = 1;

/**
 * Load all JSON data files
 */
async function loadData() {
    const statusEl = document.getElementById('status');

    try {
        statusEl.textContent = 'Loading configuration files...';

        // Load all 3 JSON files in parallel
        const [design, company, monthly] = await Promise.all([
            fetch('../data/design_template.json').then(r => r.json()),
            fetch('../data/company_data.json').then(r => r.json()),
            fetch('../data/monthly_data.json').then(r => r.json())
        ]);

        designTemplate = design;
        companyData = company;
        monthlyData = monthly;

        console.log('✅ Design Template loaded:', designTemplate);
        console.log('✅ Company Data loaded:', companyData);
        console.log('✅ Monthly Data loaded:', monthlyData);

        statusEl.textContent = '✓ Data loaded successfully';
        statusEl.className = 'loaded';

        // Set up CSS custom properties from design template
        setupCSSVariables();

        // Initial render
        renderCalendar(currentMonthIndex);

    } catch (error) {
        console.error('❌ Error loading data:', error);
        statusEl.textContent = `Error loading data: ${error.message}`;
        statusEl.className = 'error';
    }
}

/**
 * Set up CSS custom properties from design_template.json colors
 */
function setupCSSVariables() {
    if (!designTemplate || !designTemplate.colors) {
        console.warn('No color palette found in design template');
        return;
    }

    const root = document.documentElement;
    const colors = designTemplate.colors;

    // Set each color as a CSS variable
    for (const [key, value] of Object.entries(colors)) {
        root.style.setProperty(`--${key}`, value);
    }

    console.log('✅ CSS custom properties set from design template');
}

/**
 * Main render function - renders the entire calendar for a given month
 */
function renderCalendar(monthIndex) {
    console.log(`Rendering calendar for month index: ${monthIndex}`);

    if (!monthlyData || !monthlyData.months || !monthlyData.months[monthIndex]) {
        console.error('Month data not available for index:', monthIndex);
        return;
    }

    const monthData = monthlyData.months[monthIndex];
    console.log('Selected month data:', monthData);

    // Clear content area
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';

    // Render Header (H1-H12) - Tasks 2-3
    const header = renderHeader(designTemplate, companyData);
    contentArea.appendChild(header);

    // Render Sub-Header (B1 + B2) - Tasks 4-7
    const subheader = renderSubHeader(designTemplate, companyData, monthData);
    contentArea.appendChild(subheader);

    // TODO: Remaining zones
    // Task 8-10: renderGrid(designTemplate, monthData);
    // Task 11: renderFooter(designTemplate, monthData);
    // Task 12: renderWatermarks(companyData);
}

/**
 * Export calendar as PNG
 */
async function exportPNG() {
    const statusEl = document.getElementById('status');

    try {
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            alert('PNG export requires html2canvas library. Add it to index.html');
            return;
        }

        statusEl.textContent = 'Generating PNG...';

        const page = document.getElementById('calendar-page');
        const canvas = await html2canvas(page, {
            width: 924,
            height: 1316,
            scale: 1,
            useCORS: true,
            backgroundColor: '#FFFFFF'
        });

        const monthData = monthlyData.months[currentMonthIndex];
        const fileName = `Venkatrama-Calendar-${monthData.month_english}-${companyData.year}.png`;

        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();

        statusEl.textContent = `✓ Exported: ${fileName}`;
        statusEl.className = 'loaded';

    } catch (error) {
        console.error('Export error:', error);
        statusEl.textContent = `Export failed: ${error.message}`;
        statusEl.className = 'error';
    }
}

/**
 * Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    // Load data on page load
    loadData();

    // Month selector change
    document.getElementById('month-selector').addEventListener('change', (e) => {
        currentMonthIndex = parseInt(e.target.value);
        renderCalendar(currentMonthIndex);
    });

    // Export button click
    document.getElementById('export-btn').addEventListener('click', exportPNG);
});
