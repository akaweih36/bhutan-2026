/* Public navigation and rendering only. Private content stays in the encrypted payload. */
window.bhutanPage = function (html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const file = location.pathname.split('/').pop();
  const page = file === 'flights.html' ? 'flights' : file === 'experiences.html' ? 'experiences' : 'itinerary';
  const keep = { itinerary: ['top', 'itinerary', 'stays'], flights: ['flights'], experiences: ['experiences'] }[page];
  doc.querySelectorAll('main > section').forEach(section => {
    if (!keep.includes(section.id) && !(page === 'itinerary' && section.classList.contains('route-overview'))) section.remove();
  });
  const names = { itinerary: 'Itinerary', flights: 'Booked flights', experiences: 'Experiences' };
  doc.title = names[page] + ' | Bhutan 2026';
  if (page !== 'itinerary') {
    const heading = doc.querySelector('main h2');
    if (heading) {
      const h1 = doc.createElement('h1');
      h1.innerHTML = heading.innerHTML; h1.id = heading.id; heading.replaceWith(h1);
    }
    doc.querySelectorAll('main h3').forEach(heading => {
      const h2 = doc.createElement('h2'); h2.innerHTML = heading.innerHTML;
      h2.className = heading.className + ' trip-card-heading'; heading.replaceWith(h2);
    });
  }
  const brand = doc.querySelector('.brand');
  if (brand) brand.setAttribute('href', 'index.html');
  const nav = doc.querySelector('.site-nav');
  if (nav) nav.innerHTML = tripNavigation(page);
  const theme = doc.querySelector('#theme-toggle');
  if (theme) theme.textContent = 'Dark mode';
  const link = doc.createElement('link'); link.rel = 'stylesheet'; link.href = 'trip-pages.css?v=20261010-pages'; doc.head.append(link);
  const script = doc.createElement('script'); script.src = 'trip-pages.js?v=20261010-pages'; script.defer = true; doc.head.append(script);
  return '<!doctype html>' + doc.documentElement.outerHTML;
};
function tripNavigation(current) {
  return [['index.html','Itinerary','itinerary'],['flights.html','Booked flights','flights'],['experiences.html','Experiences','experiences'],['guide.html','Preparation','guide']]
    .map(([url,label,id]) => '<a href="'+url+'"'+(id===current?' aria-current="page"':'')+'>'+label+'</a>').join('');
}
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('#site-shell')) {
    const themeButton = document.querySelector('#theme-toggle');
    const setTheme = theme => {
      document.documentElement.dataset.theme = theme;
      themeButton?.setAttribute('aria-pressed', String(theme === 'dark'));
    };
    let savedTheme;
    try { savedTheme = localStorage.getItem('bhutan-2026-theme'); } catch (_) {}
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    themeButton?.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(theme);
      try { localStorage.setItem('bhutan-2026-theme', theme); } catch (_) {}
    });
    const button = document.querySelector('#nav-toggle'), panel = document.querySelector('#nav-panel');
    const close = () => { panel?.classList.remove('is-open'); button?.setAttribute('aria-expanded', 'false'); };
    button?.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      panel.classList.toggle('is-open', open); button.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', event => { if(event.key === 'Escape' && button?.getAttribute('aria-expanded') === 'true') { close(); button.focus(); } });
  }
  const toggle = document.querySelector('#theme-toggle');
  if (toggle) {
    const sync = () => { toggle.textContent = document.documentElement.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode'; };
    sync(); toggle.addEventListener('click', () => queueMicrotask(sync));
  }
  const logout = document.createElement('a');
  if (document.querySelector('#site-shell') && !document.querySelector('#trip-lock')) {
    logout.id = 'trip-lock';
    logout.href = 'index.html#staticrypt_logout'; logout.textContent = 'Lock private pages';
    logout.addEventListener('click', event => {
      event.preventDefault();
      ['bhutan-2026-decryption-key','bhutan-2026-expiration'].forEach(key => { localStorage.removeItem(key); sessionStorage.removeItem(key); });
      const target = new URL(logout.href);
      if (target.pathname === location.pathname) { location.hash = 'staticrypt_logout'; location.reload(); }
      else location.assign(target.href);
    });
    document.querySelector('.site-footer')?.append(logout);
  }
});
