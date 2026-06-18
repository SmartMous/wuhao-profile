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

/* === Data Stream Background === */
(function() {
  var canvas = document.getElementById('starfield');
  var ctx = canvas.getContext('2d');
  var w, h;
  var mouse = { x: -1000, y: -1000 };
  var time = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Data streams — horizontal flowing dashed lines
  var streams = [];
  for (var i = 0; i < 28; i++) {
    streams.push({
      y: Math.random() * h,
      speed: 0.4 + Math.random() * 1.2,
      width: 80 + Math.random() * 220,
      opacity: 0.12 + Math.random() * 0.22,
      hue: Math.random() < 0.5 ? 188 : 292,
      dashLen: 4 + Math.random() * 10,
      gapLen: 12 + Math.random() * 40,
      x: Math.random() * w
    });
  }

  // Floating nodes (small glowing dots)
  var nodes = [];
  for (var _j = 0; _j < 35; _j++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.2 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      hue: Math.random() < 0.5 ? 188 : 292,
      phase: Math.random() * Math.PI * 2,
      pulse: 0.01 + Math.random() * 0.03
    });
  }

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function drawStream(s) {
    var x = s.x;
    var dash = s.dashLen + s.gapLen;
    var segCount = Math.floor(s.width / dash);

    for (var k = 0; k < segCount; k++) {
      var segX = x + k * dash;
      if (segX > w + dash) segX -= w + dash + 20;
      if (segX < -dash) segX += w + dash + 20;

      var alpha = s.opacity;
      // Brighten near mouse
      var dy = Math.abs(mouse.y - s.y);
      if (dy < 80) {
        alpha = Math.min(0.45, alpha + 0.15 * (1 - dy / 80));
      }

      ctx.beginPath();
      ctx.moveTo(segX, s.y);
      ctx.lineTo(segX + s.dashLen, s.y);
      ctx.strokeStyle = 'hsla(' + s.hue + ', 80%, 65%, ' + alpha + ')';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function drawNode(n) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < -10) n.x = w + 10;
    if (n.x > w + 10) n.x = -10;
    if (n.y < -10) n.y = h + 10;
    if (n.y > h + 10) n.y = -10;

    var alpha = 0.3 + 0.3 * Math.sin(time * n.pulse + n.phase);

    // Brighten near mouse
    var dx = mouse.x - n.x;
    var dy = mouse.y - n.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      alpha = Math.min(0.9, alpha + 0.35 * (1 - dist / 150));
    }

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'hsla(' + n.hue + ', 80%, 65%, ' + alpha + ')';
    ctx.fill();

    // Glow halo
    if (dist < 150) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'hsla(' + n.hue + ', 80%, 65%, ' + (alpha * 0.2) + ')';
      ctx.fill();
    }
  }

  // Draw connection lines between nearby nodes
  function drawConnections() {
    for (var _a = 0; _a < nodes.length; _a++) {
      for (var _b = _a + 1; _b < nodes.length; _b++) {
        var a = nodes[_a];
        var b = nodes[_b];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var maxDist = 160;

        if (dist < maxDist) {
          var alpha = (1 - dist / maxDist) * 0.06;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(0, 220, 255, ' + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    time++;

    drawConnections();

    for (var _s = 0; _s < streams.length; _s++) {
      var s = streams[_s];
      s.x += s.speed;
      if (s.x > w + 10) s.x = -s.width;
      if (s.x < -s.width - 10) s.x = w + 10;
      drawStream(s);
    }

    for (var _n = 0; _n < nodes.length; _n++) {
      drawNode(nodes[_n]);
    }

    requestAnimationFrame(animate);
  }

  animate();
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
