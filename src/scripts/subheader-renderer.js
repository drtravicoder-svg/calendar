/**
 * Sub-header Renderer - Zones B1 + B2
 * Renders the panchangam credit bar and three-column sub-header panel
 */

/**
 * Render the complete sub-header (B1 + B2)
 * @param {Object} design - design_template.json
 * @param {Object} company - company_data.json
 * @param {Object} monthData - monthly_data.months[index]
 * @returns {HTMLElement} - sub-header container div
 */
export function renderSubHeader(design, company, monthData) {
    const subheader = document.createElement('div');
    subheader.className = 'subheader-section';
    subheader.style.cssText = 'position: absolute; left: 0; top: 346px; width: 100%; height: 153px;';

    // B1: Panchangam credit bar
    const b1 = createB1(company);
    subheader.appendChild(b1);

    // B2: Sub-header panel with three columns
    const b2 = createB2(company, monthData);
    subheader.appendChild(b2);

    return subheader;
}

/**
 * B1: Panchangam credit bar (Y: 346-374, 29px)
 */
function createB1(company) {
    const b1 = document.createElement('div');
    b1.className = 'zone zone-b1';

    // Top border
    const topBorder = document.createElement('div');
    topBorder.className = 'b1-top-border';
    b1.appendChild(topBorder);

    // Credit text
    const text = document.createElement('div');
    text.className = 'b1-text';
    text.textContent = company.credits.b1_full_text;
    b1.appendChild(text);

    return b1;
}

/**
 * B2: Sub-header panel (Y: 375-498, 124px)
 * Three columns: LEFT (sunrise/sunset), CENTER (year/month), RIGHT (gulika kalam)
 */
function createB2(company, monthData) {
    const b2 = document.createElement('div');
    b2.className = 'zone zone-b2';

    // Top border
    const topBorder = document.createElement('div');
    topBorder.className = 'b2-top-border';
    b2.appendChild(topBorder);

    // Bottom border
    const bottomBorder = document.createElement('div');
    bottomBorder.className = 'b2-bottom-border';
    b2.appendChild(bottomBorder);

    // B2-LEFT: Telugu year + sunrise/sunset table
    const left = createB2Left(monthData);
    b2.appendChild(left);

    // Divider 1
    const div1 = document.createElement('div');
    div1.className = 'b2-divider-1';
    b2.appendChild(div1);

    // B2-CENTER: Year + month name
    const center = createB2Center(company, monthData);
    b2.appendChild(center);

    // Divider 2
    const div2 = document.createElement('div');
    div2.className = 'b2-divider-2';
    b2.appendChild(div2);

    // B2-RIGHT: Gulika kalam table
    const right = createB2Right(monthData);
    b2.appendChild(right);

    // Right border
    const rightBorder = document.createElement('div');
    rightBorder.className = 'b2-right-border';
    b2.appendChild(rightBorder);

    return b2;
}

/**
 * B2-LEFT: Telugu year/masam info + sunrise/sunset table
 */
function createB2Left(monthData) {
    const left = document.createElement('div');
    left.className = 'b2-left';

    // Area 1: Year/Masam text
    const yearMasam = document.createElement('div');
    yearMasam.className = 'b2-left-year-masam';

    const line1 = document.createElement('div');
    line1.className = 'b2-left-line1';
    line1.textContent = monthData.b2_left.year_masam_line1;
    yearMasam.appendChild(line1);

    const line2 = document.createElement('div');
    line2.className = 'b2-left-line2';
    line2.textContent = monthData.b2_left.year_masam_line2;
    yearMasam.appendChild(line2);

    left.appendChild(yearMasam);

    // Divider
    const divider = document.createElement('div');
    divider.className = 'b2-left-divider';
    left.appendChild(divider);

    // Area 2: Sunrise/Sunset table
    const table = document.createElement('div');
    table.className = 'b2-left-table';

    // Header
    const header = document.createElement('div');
    header.className = 'b2-left-table-header';
    header.textContent = 'సూ.ది.  అస్త';
    table.appendChild(header);

    // Rows (4 sample dates)
    const sunriseSunset = monthData.sunrise_sunset;
    for (let i = 0; i < sunriseSunset.sample_dates.length; i++) {
        const row = document.createElement('div');
        row.className = 'b2-left-table-row';

        const date = sunriseSunset.sample_dates[i];
        const sunrise = sunriseSunset.sunrise[i];
        const sunset = sunriseSunset.sunset[i];

        row.innerHTML = `<span>${date} ల. ${sunrise}</span><span>గ. ${sunset}</span>`;
        table.appendChild(row);
    }

    left.appendChild(table);

    // Panchangam text (right sub-column)
    if (monthData.b2_left.panchangam_text) {
        const panchangam = document.createElement('div');
        panchangam.className = 'b2-left-panchangam';
        panchangam.textContent = monthData.b2_left.panchangam_text;
        left.appendChild(panchangam);
    }

    return left;
}

/**
 * B2-CENTER: Year + month name display
 */
function createB2Center(company, monthData) {
    const center = document.createElement('div');
    center.className = 'b2-center';

    const content = document.createElement('div');
    content.className = 'b2-center-content';

    // Left half: Year
    const leftHalf = document.createElement('div');
    leftHalf.className = 'b2-center-left';

    const year = document.createElement('div');
    year.className = 'b2-year';
    year.textContent = company.year;
    leftHalf.appendChild(year);

    content.appendChild(leftHalf);

    // Right half: Month names
    const rightHalf = document.createElement('div');
    rightHalf.className = 'b2-center-right';

    const monthTelugu = document.createElement('div');
    monthTelugu.className = 'b2-month-telugu';
    monthTelugu.textContent = monthData.month_telugu;
    rightHalf.appendChild(monthTelugu);

    const dots = document.createElement('div');
    dots.className = 'b2-month-dots';
    dots.textContent = ':::';
    rightHalf.appendChild(dots);

    const monthEnglish = document.createElement('div');
    monthEnglish.className = 'b2-month-english';
    monthEnglish.textContent = monthData.month_english;
    rightHalf.appendChild(monthEnglish);

    content.appendChild(rightHalf);
    center.appendChild(content);

    return center;
}

/**
 * B2-RIGHT: Gulika Kalam table
 */
function createB2Right(monthData) {
    const right = document.createElement('div');
    right.className = 'b2-right';

    // Title box
    const titleBox = document.createElement('div');
    titleBox.className = 'b2-right-title-box';

    const title = document.createElement('div');
    title.className = 'b2-right-title';
    title.textContent = 'గులిక కాలం :';
    titleBox.appendChild(title);

    right.appendChild(titleBox);

    // Table
    const table = document.createElement('div');
    table.className = 'b2-right-table';

    // Rows (7 weekdays)
    monthData.gulika_kalam.forEach(entry => {
        const row = document.createElement('div');
        row.className = 'b2-right-row';

        const weekday = document.createElement('span');
        weekday.className = 'b2-right-weekday';
        weekday.textContent = entry.weekday;
        row.appendChild(weekday);

        const start = document.createElement('span');
        start.className = 'b2-right-start';
        start.textContent = entry.start;
        row.appendChild(start);

        const marker = document.createElement('span');
        marker.className = 'b2-right-marker';
        marker.textContent = entry.marker;
        row.appendChild(marker);

        const end = document.createElement('span');
        end.className = 'b2-right-end';
        end.textContent = entry.end;
        row.appendChild(end);

        table.appendChild(row);
    });

    right.appendChild(table);

    return right;
}
