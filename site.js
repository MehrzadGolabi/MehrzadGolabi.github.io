(function () {
  'use strict';

  var GITHUB_USER = 'MehrzadGolabi';

  var T = {
    en: {
      'nav.projects': 'Projects',
      'nav.resume': 'Resume',
      'lang.switch': 'فارسی',
      'theme.dark': 'Dark',
      'theme.light': 'Light',
      'skip': 'Skip to content',
      'name': 'Mehrzad Golabi',
      'role': 'Electrical Engineer (Control) · Robotics and embedded systems',
      'intro.p1': 'I hold a B.Sc. in Electrical Engineering (Control) from Shahid Beheshti University. My work is in robotics and embedded systems: ROS2, SLAM and Gazebo simulation, and control implemented on microcontrollers and FPGAs.',
      'intro.p2': 'I was a teaching assistant for industrial control, modern control and power systems analysis.',
      'link.resume': 'Resume (PDF, Persian)',
      'h.experience': 'Education and experience',
      'h.projects': 'Projects',
      'h.skills': 'Skills',
      'h.repos': 'Recent repositories',
      'more.projects': 'All projects',
      'more.github': 'All repositories on GitHub',
      'projects.title': 'Projects',
      'projects.sub': 'Selected academic and personal engineering projects.',
      'projects.back': 'Home',
      'repo': 'Repository',
      'details': 'Details',
      'footer': '© 2026 Mehrzad Golabi'
    },
    fa: {
      'nav.projects': 'پروژه‌ها',
      'nav.resume': 'رزومه',
      'lang.switch': 'English',
      'theme.dark': 'تیره',
      'theme.light': 'روشن',
      'skip': 'رفتن به محتوا',
      'name': 'مهرزاد گلابی',
      'role': 'مهندس برق (گرایش کنترل) · رباتیک و سیستم‌های نهفته',
      'intro.p1': 'کارشناسی مهندسی برق (گرایش کنترل) از دانشگاه شهید بهشتی. حوزه‌ی کاری من رباتیک و سیستم‌های نهفته است: ROS2، SLAM و شبیه‌سازی در Gazebo، و پیاده‌سازی کنترل‌کننده‌ها روی میکروکنترلر و FPGA.',
      'intro.p2': 'دستیار آموزشی دروس کنترل صنعتی، کنترل مدرن و تحلیل سیستم‌های قدرت بودم.',
      'link.resume': 'رزومه (PDF)',
      'h.experience': 'تحصیلات و سوابق',
      'h.projects': 'پروژه‌ها',
      'h.skills': 'مهارت‌ها',
      'h.repos': 'مخازن اخیر',
      'more.projects': 'همه‌ی پروژه‌ها',
      'more.github': 'همه‌ی مخازن در گیت‌هاب',
      'projects.title': 'پروژه‌ها',
      'projects.sub': 'گزیده‌ای از پروژه‌های مهندسی دانشگاهی و شخصی.',
      'projects.back': 'خانه',
      'repo': 'مخزن',
      'details': 'جزئیات',
      'footer': '© ۲۰۲۶ مهرزاد گلابی'
    }
  };

  var EXPERIENCE = [
    {
      when: { en: 'Sep 2021 – Feb 2026', fa: 'مهر ۱۴۰۰ – بهمن ۱۴۰۴' },
      what: { en: 'B.Sc. Electrical Engineering (Control)', fa: 'کارشناسی مهندسی برق (گرایش کنترل)' },
      where: { en: 'Shahid Beheshti University, Tehran · GPA 15.69/20', fa: 'دانشگاه شهید بهشتی، تهران · معدل ۱۵٫۶۹' },
      desc: {
        en: 'Thesis: comparison of SLAM algorithms (Pose-Graph and Hector) on a TurtleBot3 with ROS2 Humble and MATLAB.',
        fa: 'پروژه کارشناسی: مقایسه الگوریتم‌های SLAM (Pose-Graph و Hector) بر روی TurtleBot3 با ROS2 Humble و MATLAB.'
      }
    },
    {
      when: { en: 'Oct 2025 – Feb 2026', fa: 'مهر ۱۴۰۴ – بهمن ۱۴۰۴' },
      what: { en: 'Industrial Control Lab Manager', fa: 'مسئول آزمایشگاه کنترل صنعتی' },
      where: { en: 'Shahid Beheshti University', fa: 'دانشگاه شهید بهشتی' }
    },
    {
      when: { en: 'Feb 2025 – Feb 2026', fa: 'بهمن ۱۴۰۳ – بهمن ۱۴۰۴' },
      what: { en: 'Teaching Assistant', fa: 'دستیار آموزشی' },
      where: { en: 'Shahid Beheshti University', fa: 'دانشگاه شهید بهشتی' },
      desc: {
        en: 'Industrial Control, Modern Control, Power Systems Analysis I.',
        fa: 'کنترل صنعتی، کنترل مدرن، تحلیل سیستم‌های قدرت ۱.'
      }
    },
    {
      when: { en: 'Summer 2025', fa: 'تابستان ۱۴۰۴' },
      what: { en: 'Intern, Research and Development', fa: 'کارآموز، بخش تحقیق و توسعه' },
      where: { en: 'Niroo Nasb Iran', fa: 'شرکت نصب نیرو ایران' },
      desc: {
        en: 'Reviewed turbine technical documents and parts; produced P&ID drawings in AutoCAD Plant 3D.',
        fa: 'بررسی و تکمیل مستندات فنی توربین و قطعات مرتبط؛ تهیه‌ی نقشه‌های P&ID با AutoCAD Plant 3D.'
      }
    }
  ];

  var SKILLS = [
    { k: { en: 'Languages', fa: 'زبان‌ها' }, v: 'C, C++, Python, MATLAB, VHDL, Bash, Assembly (AVR/ARM)' },
    { k: { en: 'Robotics', fa: 'رباتیک' }, v: 'ROS2 (Jazzy, Humble), ros2_control, Nav2, micro-ROS, tf2, SLAM, Gazebo Sim, URDF/SDF, RViz2' },
    { k: { en: 'Embedded and FPGA', fa: 'سیستم‌های نهفته و FPGA' }, v: 'STM32, ESP32, Raspberry Pi Pico / Pi 5, Xilinx Spartan-6, Xilinx ISE, STM32CubeIDE' },
    { k: { en: 'Circuit design', fa: 'طراحی مدار' }, v: 'Altium Designer, Proteus, LTspice' },
    { k: { en: 'Industrial automation', fa: 'اتوماسیون صنعتی' }, v: 'Siemens PLC (TIA Portal, STEP 7, LOGO! Soft Comfort), AutoCAD, AutoCAD Plant 3D (P&ID)' },
    { k: { en: 'Tools', fa: 'ابزارها' }, v: 'Git, Docker, Linux, OpenSCAD, 3D printing' }
  ];

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }
  function safe(fn) { try { return fn(); } catch (e) { return null; } }

  var lang = safe(function () { return localStorage.getItem('language'); }) === 'fa' ? 'fa' : 'en';
  var theme = document.documentElement.getAttribute('data-theme') || 'light';
  var projects = null;
  var repos = null;

  function t(key) { return T[lang][key] || key; }
  function pick(obj, field) { return (lang === 'fa' && obj[field + '_fa']) || obj[field]; }
  function loc(o) { return o[lang]; }

  // ---------- theme ----------
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    var b = $('theme-toggle');
    if (b) b.textContent = theme === 'dark' ? t('theme.light') : t('theme.dark');
  }

  // ---------- static text ----------
  function applyStatic() {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    var l = $('lang-toggle');
    if (l) l.textContent = t('lang.switch');
    applyTheme();
  }

  // ---------- dynamic sections ----------
  function renderExperience() {
    var el = $('experience');
    if (!el) return;
    el.innerHTML = EXPERIENCE.map(function (e) {
      return '<div class="entry"><div class="when">' + esc(loc(e.when)) + '</div><div>' +
        '<div class="what">' + esc(loc(e.what)) + '</div>' +
        '<div class="where">' + esc(loc(e.where)) + '</div>' +
        (e.desc ? '<p>' + esc(loc(e.desc)) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  function renderSkills() {
    var el = $('skills');
    if (!el) return;
    el.innerHTML = SKILLS.map(function (s) {
      return '<dt>' + esc(loc(s.k)) + '</dt><dd dir="ltr" style="text-align:start">' + esc(s.v) + '</dd>';
    }).join('');
  }

  function renderProjectsHome() {
    var el = $('projects-home');
    if (!el || !projects) return;
    el.innerHTML = projects.map(function (p) {
      var when = pick(p, 'year') || '';
      return '<div class="entry"><div class="when">' + esc(when) + '</div><div>' +
        '<div class="what">' + esc(pick(p, 'title')) + '</div>' +
        '<p>' + esc(pick(p, 'summary')) + '</p>' +
        '</div></div>';
    }).join('');
  }

  function isRealImage(url) { return url && url.indexOf('images.unsplash.com') === -1; }

  function gallery(p) {
    var imgs = p.images || (isRealImage(p.image) ? [{ src: p.image }] : []);
    if (!imgs.length) return '';
    return '<div class="gallery">' + imgs.map(function (im) {
      var cap = pick(im, 'caption') || '';
      return '<figure><img src="' + esc(im.src) + '" alt="' + esc(cap) + '" loading="lazy">' +
        (cap ? '<figcaption>' + esc(cap) + '</figcaption>' : '') + '</figure>';
    }).join('') + '</div>';
  }

  function renderProjectsPage() {
    var el = $('projects-list');
    if (!el || !projects) return;
    el.innerHTML = projects.map(function (p) {
      var when = pick(p, 'year') || '';
      var stack = (p.stack || []).join(' · ');
      return '<div class="entry"><div class="when">' + esc(when) + '</div><div>' +
        '<div class="what">' + esc(pick(p, 'title')) + '</div>' +
        '<div class="meta" dir="ltr" style="text-align:start">' + esc(stack) + '</div>' +
        '<p>' + esc(pick(p, 'learnings')) + '</p>' +
        (p.link ? '<div class="actions"><a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(t('repo')) + ' &rarr;</a></div>' : '') +
        gallery(p) +
        '</div></div>';
    }).join('');
  }

  function renderRepos() {
    var el = $('repos');
    var sec = $('repos-section');
    if (!el) return;
    if (!repos || !repos.length) { if (sec) sec.hidden = true; return; }
    if (sec) sec.hidden = false;
    el.innerHTML = repos.map(function (r) {
      return '<div class="entry"><div class="when" dir="ltr" style="text-align:start">' + esc(r.language || '') + '</div><div>' +
        '<div class="what"><a href="' + esc(r.html_url) + '" target="_blank" rel="noopener">' + esc(r.name) + '</a></div>' +
        (r.description ? '<p dir="ltr" style="text-align:start">' + esc(r.description) + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  function renderAll() {
    applyStatic();
    renderExperience();
    renderSkills();
    renderProjectsHome();
    renderProjectsPage();
    renderRepos();
  }

  // ---------- data ----------
  function loadProjects() {
    if (!$('projects-home') && !$('projects-list')) return;
    fetch('projects.json').then(function (r) { return r.json(); })
      .then(function (d) { projects = d; renderProjectsHome(); renderProjectsPage(); })
      .catch(function () {});
  }

  function loadRepos() {
    if (!$('repos')) return;
    fetch('https://api.github.com/users/' + GITHUB_USER + '/repos?sort=updated&per_page=12')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) {
        repos = d.filter(function (r) { return !r.fork; }).slice(0, 6);
        renderRepos();
      })
      .catch(function () { repos = []; renderRepos(); });
  }

  // ---------- events ----------
  document.addEventListener('DOMContentLoaded', function () {
    var l = $('lang-toggle');
    if (l) l.addEventListener('click', function () {
      lang = lang === 'en' ? 'fa' : 'en';
      safe(function () { localStorage.setItem('language', lang); });
      renderAll();
    });
    var b = $('theme-toggle');
    if (b) b.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      safe(function () { localStorage.setItem('theme', theme); });
      applyTheme();
    });
    renderAll();
    loadProjects();
    loadRepos();
    var y = $('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
