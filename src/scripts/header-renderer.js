/**
 * Header Renderer - Zones H1-H6
 * Renders the top border and branding area
 */

/**
 * Render the complete header (H1-H6)
 * @param {Object} design - design_template.json
 * @param {Object} company - company_data.json
 * @returns {HTMLElement} - header container div
 */
export function renderHeader(design, company) {
    const header = document.createElement('div');
    header.className = 'header-section';
    header.style.cssText = 'position: absolute; left: 0; top: 0; width: 100%; height: 346px;';

    // H1: Yellow top border
    const h1 = createH1();
    header.appendChild(h1);

    // H2: Orange→Red gradient
    const h2 = createH2();
    header.appendChild(h2);

    // H3: Copyright bar
    const h3 = createH3(company);
    header.appendChild(h3);

    // H5: Main branding area
    const h5 = createH5(company);
    header.appendChild(h5);

    // H6: Warm separator line
    const h6 = createH6();
    header.appendChild(h6);

    return header;
}

/**
 * H1: Yellow top border (Y: 0-15, 16px)
 */
function createH1() {
    const h1 = document.createElement('div');
    h1.className = 'zone zone-h1';
    return h1;
}

/**
 * H2: Orange→Red gradient border (Y: 16-19, 4px)
 */
function createH2() {
    const h2 = document.createElement('div');
    h2.className = 'zone zone-h2';

    // Yellow sides
    const sides = document.createElement('div');
    sides.className = 'zone-h2-sides';
    h2.appendChild(sides);

    // Gradient center
    const gradient = document.createElement('div');
    gradient.className = 'zone-h2-gradient';
    h2.appendChild(gradient);

    return h2;
}

/**
 * H3: Copyright bar with beveled frame (Y: 20-48, 29px)
 */
function createH3(company) {
    const h3 = document.createElement('div');
    h3.className = 'zone zone-h3';

    // Left frame border
    const frameLeft = document.createElement('div');
    frameLeft.className = 'h3-frame-left';
    h3.appendChild(frameLeft);

    // Right frame border
    const frameRight = document.createElement('div');
    frameRight.className = 'h3-frame-right';
    h3.appendChild(frameRight);

    // Copyright text
    const text = document.createElement('div');
    text.className = 'h3-text';

    // Build copyright line
    const copyrightLine = `© ${company.year} ${company.company.name_english}, Official Permission Website - ${company.company.website}`;
    text.textContent = copyrightLine;
    h3.appendChild(text);

    // Bottom bevel
    const bevel = document.createElement('div');
    bevel.className = 'h3-bevel-bottom';
    h3.appendChild(bevel);

    return h3;
}

/**
 * H5: Main branding area (Y: 49-284, 236px)
 * Contains: Logo, Badge, Company Name, Contact Info, Branches, App Promo
 */
function createH5(company) {
    const h5 = document.createElement('div');
    h5.className = 'zone zone-h5';
    console.log('Creating H5 zone...');

    // V Logo (left)
    const logo = document.createElement('img');
    logo.className = 'h5-logo';
    const logoPath = `../${company.company.logo_file}`;
    logo.src = logoPath;
    logo.alt = 'V Logo';
    logo.onerror = (e) => console.error('❌ Failed to load logo:', logoPath, e);
    logo.onload = () => console.log('✅ Logo loaded:', logoPath, `(${logo.naturalWidth}×${logo.naturalHeight})`);
    h5.appendChild(logo);

    // JRRC Badge (right)
    const badge = document.createElement('img');
    badge.className = 'h5-badge';
    const badgePath = `../${company.company.badge_file}`;
    badge.src = badgePath;
    badge.alt = 'JRRC Publisher Badge';
    badge.onerror = (e) => console.error('❌ Failed to load badge:', badgePath, e);
    badge.onload = () => console.log('✅ Badge loaded:', badgePath, `(${badge.naturalWidth}×${badge.naturalHeight})`);
    h5.appendChild(badge);

    // Center content area
    const center = document.createElement('div');
    center.className = 'h5-center';

    // Decorative symbol శ్రీ
    const symbol = document.createElement('div');
    symbol.className = 'h5-symbol';
    symbol.textContent = company.company.decorative_symbol;
    center.appendChild(symbol);

    // Company name (large Telugu)
    const companyName = document.createElement('div');
    companyName.className = 'h5-company-name';
    companyName.textContent = company.company.name_telugu;
    center.appendChild(companyName);

    // Decorative triangle
    const triangle = document.createElement('div');
    triangle.className = 'h5-triangle';
    center.appendChild(triangle);

    // Contact info section
    const contact = document.createElement('div');
    contact.className = 'h5-contact';

    // Tagline
    const tagline = document.createElement('div');
    tagline.className = 'h5-tagline';
    tagline.textContent = company.contact.tagline;
    contact.appendChild(tagline);

    // Phone & Email
    const phoneEmail = document.createElement('div');
    phoneEmail.className = 'h5-phone-email';

    const phone = document.createElement('span');
    phone.className = 'phone';
    phone.textContent = company.contact.phone;
    phoneEmail.appendChild(phone);

    const cell = document.createElement('span');
    cell.className = 'cell';
    cell.textContent = company.contact.cell;
    phoneEmail.appendChild(cell);

    const email = document.createElement('span');
    email.className = 'email';
    email.textContent = company.contact.email;
    phoneEmail.appendChild(email);

    contact.appendChild(phoneEmail);
    center.appendChild(contact);

    // Branches
    const branches = document.createElement('div');
    branches.className = 'h5-branches';
    branches.textContent = company.branches.join(', ');
    center.appendChild(branches);

    // App promo
    const appPromo = document.createElement('div');
    appPromo.className = 'h5-app-promo';

    const appText = document.createElement('div');
    appText.className = 'h5-app-text';
    appText.textContent = company.promo.app_text_telugu;
    appPromo.appendChild(appText);

    const appUrl = document.createElement('span');
    appUrl.className = 'h5-app-url';
    appUrl.textContent = company.promo.app_url_display;
    appPromo.appendChild(appUrl);

    center.appendChild(appPromo);

    h5.appendChild(center);

    return h5;
}

/**
 * H6: Warm separator line (Y: 285-286, 2px)
 */
function createH6() {
    const h6 = document.createElement('div');
    h6.className = 'zone zone-h6';
    return h6;
}
