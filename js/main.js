/* === i18n System === */
(function() {
  var data = {
    'zh-CN': {
      title: '我的空间',
      'nav.about': '关于',
      'nav.skills': '技能',
      'nav.gallery': '影像',
      'nav.projects': '项目',
      'nav.contact': '联系',
      'hero.name': '武浩',
      'hero.scroll': '向下滚动',
      'hero.typing': '全栈开发者 / 技术探索者 / 终身学习者',
      'about.title': '/ 关于我',
      'about.p1': '全栈开发者，热爱技术，专注于构建优雅的 Web 应用。擅长前端工程化、性能优化和用户体验设计。',
      'about.p2': '始终相信代码是一种表达方式 —— 简洁、高效、可维护是我不变的追求。持续学习，持续创造。',
      'skills.title': '/ 技能',
      'gallery.title': '/ 影像',
      'projects.title': '/ 项目',
      'projects.item1.title': '项目一',
      'projects.item1.desc': '项目简介，描述一下这个项目是做什么的，用了什么技术。',
      'projects.item2.title': '项目二',
      'projects.item2.desc': '项目简介，描述一下这个项目是做什么的，用了什么技术。',
      'projects.view': '查看项目',
      'contact.title': '/ 联系',
      footer: '由 Claude Code 构建 </>'
    },
    'en': {
      title: 'My Space',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.gallery': 'Gallery',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.name': 'Wu Hao',
      'hero.scroll': 'SCROLL',
      'hero.typing': 'Full-Stack Dev / Tech Explorer / Lifelong Learner',
      'about.title': '/ About',
      'about.p1': 'Full-stack developer passionate about building elegant web applications. Skilled in frontend engineering, performance optimization, and UX design.',
      'about.p2': 'I believe code is a form of expression — clean, efficient, and maintainable is my constant pursuit. Always learning, always creating.',
      'skills.title': '/ Skills',
      'gallery.title': '/ Gallery',
      'projects.title': '/ Projects',
      'projects.item1.title': 'Project One',
      'projects.item1.desc': 'A brief description of this project, what it does, and the tech stack used.',
      'projects.item2.title': 'Project Two',
      'projects.item2.desc': 'A brief description of this project, what it does, and the tech stack used.',
      'projects.view': 'View Project',
      'contact.title': '/ Contact',
      footer: 'Built with Claude Code </>'
    }
  };

  var currentLang = localStorage.getItem('lang') || 'zh-CN';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update lang select value
    document.getElementById('lang-toggle').value = lang;

    // Update all data-i18n elements
    for (var _i = 0, _a = document.querySelectorAll('[data-i18n]'); _i < _a.length; _i++) {
      var el = _a[_i];
      var key = el.getAttribute('data-i18n');
      if (data[lang][key]) {
        el.textContent = data[lang][key];
      }
    }

    // Update document title
    document.title = data[lang].title;

    // Re-trigger typing effect with new text
    restartTyping(data[lang]['hero.typing']);
  }

  document.getElementById('lang-toggle').addEventListener('change', function() {
    applyLang(this.value);
  });

  // Expose for typing restart
  window._i18n = { data: data, currentLang: currentLang, applyLang: applyLang };
  applyLang(currentLang);
})();

/* === Typing Effect === */
(function() {
  var el = document.getElementById('typing-text');
  var i = 0;
  var forward = true;
  var currentText = '';
  var timer = null;

  function getText() {
    var lang = window._i18n.currentLang;
    return window._i18n.data[lang]['hero.typing'];
  }

  currentText = getText();

  function type() {
    if (forward) {
      if (i < currentText.length) {
        el.textContent += currentText[i];
        i++;
        timer = setTimeout(type, 80 + Math.random() * 60);
      } else {
        forward = false;
        timer = setTimeout(type, 3000);
      }
    } else {
      if (i > 0) {
        el.textContent = currentText.substring(0, i - 1);
        i--;
        timer = setTimeout(type, 30);
      } else {
        forward = true;
        currentText = getText();
        timer = setTimeout(type, 800);
      }
    }
  }

  window.restartTyping = function(newText) {
    clearTimeout(timer);
    currentText = newText;
    i = 0;
    forward = true;
    el.textContent = '';
    type();
  };

  type();
})();

/* === Scroll Reveal === */
(function() {
  var observer = new IntersectionObserver(function(entries) {
    for (var _i5 = 0, _a = entries; _i5 < _a.length; _i5++) {
      var entry = _a[_i5];
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }
  }, { threshold: 0.1 });

  var revealEls = document.querySelectorAll('.reveal');
  for (var _i6 = 0; _i6 < revealEls.length; _i6++) {
    observer.observe(revealEls[_i6]);
  }

  // Fallback: reveal all after 1s if observer hasn't fired
  setTimeout(function() {
    for (var _j = 0; _j < revealEls.length; _j++) {
      var el = revealEls[_j];
      if (!el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    }
  }, 1000);

  // Skills staggered pop-in
  function initSkills() {
    var section = document.getElementById('skills');
    if (!section) return;
    var items = section.querySelectorAll('.skill-item');
    if (items.length > 0 && items[0].style.opacity !== '0') {
      return; // already initialized
    }
    items.forEach(function(item, index) {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.6)';
      item.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      setTimeout(function() {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }, index * 80);
    });
  }

  var skillsObserver = new IntersectionObserver(function(entries) {
    for (var _i7 = 0, _a = entries; _i7 < _a.length; _i7++) {
      if (_a[_i7].isIntersecting) {
        initSkills();
        skillsObserver.unobserve(_a[_i7].target);
      }
    }
  }, { threshold: 0.1 });

  var skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Fallback: init skills after 1.5s if observer hasn't fired
  setTimeout(function() {
    var section = document.getElementById('skills');
    if (section && section.classList.contains('visible')) {
      initSkills();
    }
  }, 1500);
})();

/* === Smooth Scroll for Nav Links === */
(function() {
  for (var _i8 = 0, _a = document.querySelectorAll('.nav-links a, .nav-logo'); _i8 < _a.length; _i8++) {
    _a[_i8].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();

/* === Lightbox === */
(function() {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  for (var _i9 = 0, _a = document.querySelectorAll('.gallery-item'); _i9 < _a.length; _i9++) {
    _a[_i9].addEventListener('click', function() {
      var img = this.querySelector('img');
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  }

  closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    }
  });
})();
