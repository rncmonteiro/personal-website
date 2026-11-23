// Preserve bookmarks to sections on the former single-page CV.
if (document.body.classList.contains('page-home')) {
  const legacySections = {
    'profile-details': 'about.html',
    'current-roles': 'about.html',
    education: 'about.html',
    team: 'research-team.html',
    teaching: 'teaching.html',
    projects: 'projects.html',
    'journal-articles': 'publications.html',
    'conference-papers': 'publications.html',
    lectures: 'activities.html',
    awards: 'about.html',
    languages: 'about.html'
  };
  const section = location.hash.slice(1);
  if (Object.prototype.hasOwnProperty.call(legacySections, section)) {
    location.replace(legacySections[section] + location.hash);
  }
}

// Keep external publication and affiliation links in a separate tab.
for (const link of document.querySelectorAll('a[href]')) {
  if (/^https?:\/\//i.test(link.getAttribute('href'))) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const updateBackToTop = () => {
    backToTop.hidden = window.scrollY < 320 && document.activeElement !== backToTop;
  };
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('blur', updateBackToTop);
  updateBackToTop();
}
