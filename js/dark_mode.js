(function () {
    function getTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') return stored;
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }

    function updateIcons(isDark) {
        const icons = document.querySelectorAll('#toggleDarkIcon, #toggleDark i');
        icons.forEach(icon => {
            if (isDark) {
                icon.className = 'bi bi-brightness-high-fill';
            } else {
                icon.className = 'bi bi-moon-stars-fill';
            }
        });
        const toggle = document.getElementById('toggleDark');
        if (toggle) {
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        updateIcons(isDark);
    }

    function initTheme() {
        const currentTheme = getTheme();
        applyTheme(currentTheme);

        const toggle = document.getElementById('toggleDark');
        if (toggle) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
                const nextTheme = isCurrentlyDark ? 'light' : 'dark';
                localStorage.setItem('theme', nextTheme);
                applyTheme(nextTheme);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // Sync when system theme changes and user has no custom stored preference
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();
