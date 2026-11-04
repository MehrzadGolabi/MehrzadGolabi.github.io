(function () {
  'use strict';

  var GITHUB_USER = 'MehrzadGolabi';

  var RESUME = { en: 'Mehrzad-Golabi-CV-EN.pdf', fa: 'Mehrzad-Golabi-Resume-FA.pdf' };

  var T = {
    en: {
      'nav.projects': 'Projects',
      'nav.resume': 'Resume',
      'lang.switch': 'فارسی',
      'theme.dark': 'Dark',
      'theme.light': 'Light',
      'skip': 'Skip to content',
      'name': 'Mehrzad Golabi',
      'role': 'M.Sc. student in Control Engineering, Iran University of Science and Technology · Robotics, embedded systems and industrial automation',
      'intro.p1': 'I am an M.Sc. student in control engineering at Iran University of Science and Technology (IUST), with a B.Sc. in Electrical Engineering (Control) from Shahid Beheshti University. I build robots and control systems from model to working hardware: ROS 2, SLAM and Gazebo simulation, real-time control on microcontrollers and FPGAs, and industrial automation with Siemens PLCs.',
      'intro.p2': 'My interests are localization and state estimation for mobile robots (SLAM and sensor fusion), real-time control on FPGAs and embedded systems, and industrial automation and digital twins. I was a teaching assistant for industrial control, modern control and power systems analysis, and supervised the industrial control laboratory.',
      'link.resume.en': 'Resume (English, PDF)',
      'link.resume.fa': 'Resume (Persian, PDF)',
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
      'edited': 'Last edited'
    },
    fa: {
      'nav.projects': 'پروژه‌ها',
      'nav.resume': 'رزومه',
      'lang.switch': 'English',
      'theme.dark': 'تیره',
      'theme.light': 'روشن',
      'skip': 'رفتن به محتوا',
      'name': 'مهرزاد گلابی',
      'role': 'دانشجوی کارشناسی ارشد مهندسی برق کنترل، دانشگاه علم و صنعت ایران · رباتیک، سیستم‌های نهفته و اتوماسیون صنعتی',
      'intro.p1': 'دانشجوی کارشناسی ارشد مهندسی برق کنترل در دانشگاه علم و صنعت ایران و دانش‌آموخته‌ی کارشناسی مهندسی برق (گرایش کنترل) از دانشگاه شهید بهشتی هستم. تجربه‌ی عملی من طراحی و ساخت ربات و سامانه‌های کنترلی از مدل‌سازی تا نمونه‌ی واقعی است: ROS2، SLAM و شبیه‌سازی در Gazebo، پیاده‌سازی بلادرنگ کنترل روی میکروکنترلر و FPGA، و اتوماسیون صنعتی با PLC زیمنس.',
      'intro.p2': 'علاقه‌مندی‌های من مکان‌یابی و تخمین حالت در ربات‌های متحرک (SLAM و ادغام حسگرها)، پیاده‌سازی بلادرنگ کنترل روی FPGA و سیستم‌های نهفته، و اتوماسیون صنعتی و دوقلوی دیجیتال است. دستیار آموزشی دروس کنترل صنعتی، کنترل مدرن و تحلیل سیستم‌های قدرت و مسئول آزمایشگاه کنترل صنعتی بوده‌ام.',
      'link.resume.en': 'رزومه انگلیسی (PDF)',
      'link.resume.fa': 'رزومه فارسی (PDF)',
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
      'edited': 'آخرین ویرایش'
    }
  };

  var EXPERIENCE = [
    {
      when: { en: 'Sep 2026 – present', fa: 'مهر ۱۴۰۵ – اکنون' },
      what: { en: 'M.Sc. Electrical Engineering (Control)', fa: 'کارشناسی ارشد مهندسی برق (کنترل)' },
      where: { en: 'Iran University of Science and Technology (IUST), Tehran', fa: 'دانشگاه علم و صنعت ایران، تهران' }
    },
    {
      when: { en: 'Summer 2025 – present', fa: 'تابستان ۱۴۰۴ – اکنون' },
      what: { en: 'Engineering documentation and R&D', fa: 'مستندات مهندسی و تحقیق و توسعه' },
      where: { en: 'Nasb Niroo Iran', fa: 'شرکت نصب نیرو ایران' },
      desc: {
        en: 'Review and correct P&ID drawings and validate engineering data; drafted instrumentation P&IDs in AutoCAD Plant 3D. R&D internship (summer 2025): reviewed and completed technical documentation for turbines and related components.',
        fa: 'بازبینی و اصلاح نقشه‌های P&ID و صحت‌سنجی داده‌های مهندسی؛ تهیه‌ی نقشه‌های P&ID بخش ابزار دقیق با AutoCAD Plant 3D. کارآموزی تحقیق و توسعه (تابستان ۱۴۰۴): بررسی و تکمیل مستندات فنی توربین و قطعات مرتبط.'
      }
    },
    {
      when: { en: 'Sep 2021 – Feb 2026', fa: 'مهر ۱۴۰۰ – بهمن ۱۴۰۴' },
      what: { en: 'B.Sc. Electrical Engineering (Control)', fa: 'کارشناسی مهندسی برق (گرایش کنترل)' },
      where: { en: 'Shahid Beheshti University, Tehran · GPA 15.69/20 · last three semesters 18.60/20', fa: 'دانشگاه شهید بهشتی، تهران · معدل کل ۱۵٫۶۹ · معدل سه نیمسال آخر ۱۸٫۶۰' },
      desc: {
        en: 'Thesis (grade 20/20, supervisor Dr. Mostafa Abedi): comparison of SLAM algorithms on the TurtleBot3. Implemented Hector SLAM from scratch in MATLAB and a pose-graph SLAM with dynamic obstacle removal and false loop-closure rollback, evaluated in Gazebo and four real-world scenarios on ROS 2 Humble.',
        fa: 'پروژه‌ی کارشناسی (نمره‌ی ۲۰، استاد راهنما دکتر مصطفی عابدی): مقایسه‌ی الگوریتم‌های SLAM روی ربات TurtleBot3. پیاده‌سازی Hector SLAM از پایه در MATLAB و توسعه‌ی Pose-Graph SLAM با حذف پویای موانع موقت و برگشت خودکار بستن‌حلقه‌های نادرست، و ارزیابی در Gazebo و چهار سناریوی واقعی در ROS2 Humble.'
      }
    },
    {
      when: { en: 'Sep 2025 – Feb 2026', fa: 'مهر ۱۴۰۴ – بهمن ۱۴۰۴' },
      what: { en: 'Industrial Control Laboratory Supervisor', fa: 'مسئول آزمایشگاه کنترل صنعتی' },
      where: { en: 'Shahid Beheshti University', fa: 'دانشگاه شهید بهشتی' }
    },
    {
      when: { en: 'Feb 2025 – Feb 2026', fa: 'بهمن ۱۴۰۳ – بهمن ۱۴۰۴' },
      what: { en: 'Teaching Assistant', fa: 'دستیار آموزشی' },
      where: { en: 'Shahid Beheshti University', fa: 'دانشگاه شهید بهشتی' },
      desc: {
        en: 'Industrial Control (2 semesters), Modern Control (MATLAB and Simulink instruction), Power Systems Analysis I.',
        fa: 'کنترل صنعتی (۲ ترم)، کنترل مدرن (آموزش MATLAB و Simulink)، تحلیل سیستم‌های قدرت ۱.'
      }
    },
    {
      when: { en: '2025', fa: '۱۴۰۴' },
      what: { en: 'Course paper: Digital Twins in Industrial Automation', fa: 'مقاله‌ی درسی: دوقلوی دیجیتال در اتوماسیون صنعتی' },
      where: { en: 'Industrial Automation course, Shahid Beheshti University', fa: 'درس اتوماسیون صنعتی، دانشگاه شهید بهشتی' },
      desc: {
        en: 'Reviewed multi-layer digital-twin architectures, IIoT technologies and industrial protocols (Modbus, Profibus, OPC UA, MQTT); analysed brownfield retrofitting, edge-first architecture and a low-cost "good-enough twin" approach for Iranian industry.',
        fa: 'مرور معماری‌های چندلایه‌ی دوقلوی دیجیتال، فناوری‌های IIoT و پروتکل‌های صنعتی (Modbus، Profibus، OPC UA، MQTT)؛ تحلیل نوسازی تجهیزات brownfield، معماری edge-first و رویکرد «دوقلوی کافی» کم‌هزینه برای صنایع ایران.'
      }
    }
  ];

  var SKILLS = [
    { k: { en: 'Programming and HDL', fa: 'برنامه‌نویسی و توصیف سخت‌افزار' }, v: 'C, C++, Python, MATLAB/Simulink, VHDL, Assembly (AVR/ARM), Bash' },
    { k: { en: 'Robotics', fa: 'رباتیک' }, v: 'ROS2 (Humble, Jazzy), ros2_control, Nav2, tf2, micro-ROS, SLAM (pose-graph, Hector)' },
    { k: { en: 'Simulation and modelling', fa: 'شبیه‌سازی و مدل‌سازی' }, v: 'Gazebo Sim, URDF/SDF, ros_gz_bridge, RViz2, rqt, System Identification Toolbox' },
    { k: { en: 'Embedded and FPGA', fa: 'سیستم‌های نهفته و FPGA' }, v: 'ESP32, STM32, Raspberry Pi 5 / Pico, Arduino, Xilinx Spartan-6, STM32CubeIDE, Xilinx ISE' },
    { k: { en: 'Circuit design', fa: 'طراحی مدار' }, v: 'Altium Designer, Proteus, LTspice' },
    { k: { en: 'Industrial automation', fa: 'اتوماسیون صنعتی' }, v: 'Siemens PLC (TIA Portal, STEP 7, LOGO! Soft Comfort), Modbus, Profibus, AutoCAD, AutoCAD Plant 3D (P&ID)' },
    { k: { en: 'Tools', fa: 'ابزارها' }, v: 'Linux, Git, Docker, OpenSCAD, 3D printing' },
    { k: { en: 'Languages', fa: 'زبان‌ها' }, v: { en: 'Persian (native), English (professional working proficiency)', fa: 'فارسی (زبان مادری)، انگلیسی (تسلط حرفه‌ای)' } }
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
    document.querySelectorAll('[data-resume]').forEach(function (el) {
      var which = el.getAttribute('data-resume');
      el.setAttribute('href', RESUME[which === 'auto' ? lang : which]);
    });
    var l = $('lang-toggle');
    if (l) l.textContent = t('lang.switch');
    applyTheme();
    renderFooter();
  }

  function renderFooter() {
    var c = $('copyright'), e = $('edited');
    var locale = lang === 'fa' ? 'fa-IR-u-ca-persian' : 'en-GB';
    var yearLocale = lang === 'fa' ? 'fa-IR' : 'en-GB';
    if (c) c.textContent = '© ' + new Date().toLocaleString(yearLocale, { year: 'numeric', useGrouping: false }) + ' ' + t('name');
    if (e) {
      var d = new Date(document.lastModified);
      if (isNaN(d)) { e.textContent = ''; return; }
      e.textContent = t('edited') + ': ' + d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
    }
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
      if (typeof s.v === 'object') return '<dt>' + esc(loc(s.k)) + '</dt><dd>' + esc(loc(s.v)) + '</dd>';
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
