const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const themeLabel = toggleBtn?.querySelector('.theme-label');
const themeIcon = toggleBtn?.querySelector('.theme-icon');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === 'light';
  themeLabel.textContent = isLight ? 'حالت تیره' : 'حالت روشن';
  themeIcon.textContent = isLight ? '☾' : '☀';
  localStorage.setItem('portfolio-theme', theme);
}

applyTheme(localStorage.getItem('portfolio-theme') || 'dark');
toggleBtn?.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const projectGrid = document.getElementById('projectGrid');

function makeProjectCard(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card github-project';
  const content = document.createElement('div'); content.className = 'project-content';
  const top = document.createElement('div'); top.className = 'project-top';
  const number = document.createElement('span'); number.textContent = String(index + 1).padStart(2, '0');
  const link = document.createElement('a'); link.href = project.githubUrl; link.target = '_blank'; link.rel = 'noreferrer'; link.ariaLabel = `مشاهده ${project.name} در گیت‌هاب`; link.textContent = '↗';
  top.append(number, link);
  const title = document.createElement('h3'); title.textContent = project.name;
  const description = document.createElement('p'); description.textContent = project.description || 'توضیحی برای این پروژه ثبت نشده است.';
  const meta = document.createElement('div'); meta.className = 'project-meta';
  [...new Set([project.language, ...(project.topics || [])])].filter(Boolean).slice(0, 4).forEach((item) => { const tag = document.createElement('span'); tag.textContent = item; meta.append(tag); });
  content.append(top, title, description, meta);
  if (project.demoUrl) { const demo = document.createElement('a'); demo.className = 'project-demo'; demo.href = project.demoUrl; demo.target = '_blank'; demo.rel = 'noreferrer'; demo.textContent = 'مشاهده دمو ↗'; content.append(demo); }
  card.append(content);
  return card;
}

async function loadPinnedProjects() {
  if (!projectGrid) return;
  try {
    const response = await fetch('pinned-projects.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Project list unavailable');
    const { projects = [] } = await response.json();
    projectGrid.replaceChildren();
    if (!projects.length) { const message = document.createElement('p'); message.className = 'projects-loading'; message.textContent = 'هنوز پروژه‌ای پین نشده است. به‌زودی اینجا نمایش داده می‌شود.'; projectGrid.append(message); return; }
    projects.forEach((project, index) => projectGrid.append(makeProjectCard(project, index)));
  } catch { projectGrid.innerHTML = '<p class="projects-loading">فهرست پروژه‌ها فعلاً در دسترس نیست.</p>'; }
}
loadPinnedProjects();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
