// ====== EDIT YOUR DATA HERE ======
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'Problem solving', level: 80 },
  { name: 'Python / Java (basics)', level: 60 }
];

// Replace titles, descriptions and links with your real GitHub projects.
const projects = [
  { title: 'Personal Portfolio', type: 'Web', desc: 'This responsive portfolio built with plain HTML, CSS and JavaScript.', tags: ['HTML', 'CSS', 'JS'], code: 'https://github.com/', demo: '#', color: '#f2a93b' },
  { title: 'To-Do List App', type: 'Web', desc: 'Add, complete and delete tasks. Tasks are saved in the browser.', tags: ['JavaScript', 'localStorage'], code: 'https://github.com/', demo: '#', color: '#a9d3ee' },
  { title: 'Student Management', type: 'Software', desc: 'A small program to store and search student records.', tags: ['Java', 'OOP'], code: 'https://github.com/', demo: '', color: '#8fe0b5' }
];

const roles = ['Software Engineering Student', 'Web Developer', 'Problem Solver'];

// ====== Typing effect ======
const typed = document.getElementById('typed');
let r = 0, c = 0, del = false;
(function type() {
  const word = roles[r];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 40 : 90);
})();

// ====== Skills ======
const skillList = document.getElementById('skillList');
skills.forEach(s => {
  const el = document.createElement('div');
  el.className = 'skill reveal';
  el.innerHTML = `<div><span>${s.name}</span><span>${s.level}%</span></div><div class="bar"><i data-w="${s.level}"></i></div>`;
  skillList.appendChild(el);
});
// ====== Projects with filter ======
const list = document.getElementById('projectList');
const filters = document.getElementById('filters');
function renderProjects(type) {
  list.innerHTML = '';
  projects.filter(p => type === 'All' || p.type === type).forEach(p => {
    const el = document.createElement('article');
    el.className = 'project reveal in';
    el.innerHTML = `
      <div class="thumb" style="background:${p.color}">${p.title.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
      <div class="pbody">
        <h3>${p.title}</h3><p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="plinks"><a href="${p.code}" target="_blank" rel="noopener">GitHub</a>${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ''}</div>
      </div>`;
    list.appendChild(el);
  });
}

