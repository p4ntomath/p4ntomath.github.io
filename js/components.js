class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const isHome = window.location.pathname === '/' ||
            window.location.pathname.endsWith('/index.html') ||
            window.location.pathname.endsWith('index.html') ||
            window.location.pathname === '';
        const inSubdir = window.location.pathname.includes('/social/');
        const prefix = isHome ? '' : (inSubdir ? '../index.html' : 'index.html');

        this.innerHTML = `
<nav class="navbar">
    <div class="navbar-container">
        <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a href="${prefix}#Bio" class="nav-link nav-desktop">Bio</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Experience" class="nav-link">Experience</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Education" class="nav-link">Education</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Project" class="nav-link">Projects</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Technical_Skill" class="nav-link nav-desktop">Technical Skills</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Research" class="nav-link nav-desktop">Research</a>
        <span class="navbar-separator">|</span>
        <a href="${prefix}#Miscellaneous" class="nav-link nav-desktop">Leadership</a>
        <span class="navbar-separator nav-desktop">|</span>
        <button id="toggleDark" class="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark/light mode">
            <i class="bi bi-moon-stars-fill" id="toggleDarkIcon"></i>
        </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
        <a href="${prefix}#Bio">Bio</a>
        <a href="${prefix}#Experience">Experience</a>
        <a href="${prefix}#Education">Education</a>
        <a href="${prefix}#Project">Projects</a>
        <a href="${prefix}#Technical_Skill">Technical Skills</a>
        <a href="${prefix}#Research">Research</a>
        <a href="${prefix}#Miscellaneous">Leadership</a>
    </div>
</nav>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const inSubdir = window.location.pathname.includes('/social/');
        const isSocial = window.location.pathname.includes('social');
        const footerSocialHref = isSocial ? (inSubdir ? '../index.html' : 'index.html') : 'social.html';
        const footerSocialLabel = isSocial ? 'Main Portfolio' : 'Social Media';

        this.innerHTML = `
<div class="popup-overlay">
    <div class="popup-content">
        <button class="popup-close" aria-label="Close message form">&times;</button>
        <h2>Send a Message</h2>
        <form action="https://formsubmit.co/ajax/morwawarabothata5@gmail.com" method="post">
            <input type="hidden" name="_captcha" value="false">
            <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
            <div class="form-group">
                <label for="popup-name">Name</label>
                <input type="text" id="popup-name" name="name" placeholder="Your name" required>
            </div>
            <div class="form-group">
                <label for="popup-email">Email</label>
                <input type="email" id="popup-email" name="email" placeholder="Your email address" required>
            </div>
            <div class="form-group">
                <label for="popup-subject">Subject</label>
                <input type="text" id="popup-subject" name="subject" placeholder="Subject">
            </div>
            <div class="form-group textarea-group">
                <label for="popup-message">Message (required)</label>
                <textarea id="popup-message" name="message" placeholder="Type your message here..." required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Send Message">
            </div>
        </form>
    </div>
</div>
<footer style="background-color:rgba(0,0,0,0.05);padding:14px 15px;text-align:center;margin-top:25px;">
    <p style="margin:8px 0;font-size:0.95em;">
          <a href="${footerSocialHref}" id="footerSocialLink" style="font-weight:bold;text-decoration:underline;">${footerSocialLabel}</a>
        &nbsp;|&nbsp;
          <a href="#" id="anonymousMessageFooterLink" style="font-weight:bold;text-decoration:underline;">Contact / Message</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/p4ntomath" target="_blank" rel="noopener noreferrer" style="font-weight:bold;text-decoration:underline;">GitHub</a>
    </p>
    <p style="margin:8px 0;font-size:0.85em;color:#666;">
        <span id="lastModified">Last Modified: —</span> &nbsp;&bull;&nbsp; &copy; Mahlatse Rabothata
    </p>
</footer>`;

        const socialLink = document.getElementById('footerSocialLink');
        if (socialLink) {
            socialLink.addEventListener('click', function () {
                sessionStorage.setItem('scrollFromBottom', '1');
            });
        }
    }
}

customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
