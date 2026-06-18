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

/* === Cosmic Drifting Background === */
(function() {
  var canvas = document.getElementById('starfield');
  var ctx = canvas.getContext('2d');
  var w, h;
  var mouse = { x: -1000, y: -1000 };

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Distant layer: tiny dim stars, very slow drift
  function createStarLayer(count, sizeRange, speed, opacityRange, color) {
    var layer = [];
    for (var i = 0; i < count; i++) {
      layer.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        opacity: opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]),
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.003 + Math.random() * 0.015,
        color: color
      });
    }
    return layer;
  }

  var layerFar = createStarLayer(150, [1.2, 2.2], 0.06, [0.25, 0.6], '#c8d6ff');
  var layerMid = createStarLayer(90, [1.8, 3.2], 0.12, [0.4, 0.85], '#e0e8ff');
  var layerNear = createStarLayer(35, [2.5, 5.0], 0.20, [0.55, 1.0], '#f8fcff');

  // Large glowing "nebula" particles — very slow, soft glow
  var nebula = [];
  for (var _i = 0; _i < 8; _i++) {
    nebula.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 80 + Math.random() * 160,
      vx: (Math.random() - 0.5) * 0.03,
      vy: (Math.random() - 0.5) * 0.03,
      hue: 200 + Math.random() * 80,
      alpha: 0.03 + Math.random() * 0.04
    });
  }

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function updateLayer(layer) {
    for (var _i2 = 0, _a = layer; _i2 < _a.length; _i2++) {
      var s = _a[_i2];
      // Gentle sinusoidal drift
      s.x += s.vx + Math.sin(s.twinkle) * 0.03;
      s.y += s.vy + Math.cos(s.twinkle * 1.3) * 0.03;
      s.twinkle += s.twinkleSpeed;

      // Wrap around edges
      if (s.x < -10) s.x = w + 10;
      if (s.x > w + 10) s.x = -10;
      if (s.y < -10) s.y = h + 10;
      if (s.y > h + 10) s.y = -10;
    }
  }

  function drawLayer(layer, mouseInfluence) {
    for (var _i3 = 0, _a = layer; _i3 < _a.length; _i3++) {
      var s = _a[_i3];
      var alpha = s.opacity * (0.6 + 0.4 * Math.sin(s.twinkle));
      var drawX = s.x;
      var drawY = s.y;

      // Gentle mouse gravity
      if (mouseInfluence) {
        var dx = mouse.x - s.x;
        var dy = mouse.y - s.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var radius = mouseInfluence.radius;
        var strength = mouseInfluence.strength;
        if (dist < radius && dist > 0) {
          var force = (1 - dist / radius) * strength;
          drawX += dx * force;
          drawY += dy * force;
          alpha = Math.min(1, alpha + force * 0.4);
        }
      }

      ctx.beginPath();
      ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
    }
  }

  function drawNebula() {
    for (var _i4 = 0, _a = nebula; _i4 < _a.length; _i4++) {
      var n = _a[_i4];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -n.radius) n.x = w + n.radius;
      if (n.x > w + n.radius) n.x = -n.radius;
      if (n.y < -n.radius) n.y = h + n.radius;
      if (n.y > h + n.radius) n.y = -n.radius;

      var gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
      gradient.addColorStop(0, 'hsla(' + n.hue + ', 60%, 50%, ' + n.alpha + ')');
      gradient.addColorStop(0.5, 'hsla(' + n.hue + ', 40%, 30%, ' + (n.alpha * 0.4) + ')');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 1;
      ctx.fillRect(n.x - n.radius, n.y - n.radius, n.radius * 2, n.radius * 2);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    drawNebula();

    updateLayer(layerFar);
    updateLayer(layerMid);
    updateLayer(layerNear);

    // Draw layers — farthest first, no mouse for far layer
    drawLayer(layerFar, null);
    drawLayer(layerMid, { radius: 200, strength: 0.12 });
    drawLayer(layerNear, { radius: 260, strength: 0.2 });

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
  }, { threshold: 0.15 });

  for (var _i6 = 0, _a = document.querySelectorAll('.reveal'); _i6 < _a.length; _i6++) {
    observer.observe(_a[_i6]);
  }

  // Skills staggered pop-in
  var skillsObserver = new IntersectionObserver(function(entries) {
    for (var _i7 = 0, _a = entries; _i7 < _a.length; _i7++) {
      var entry = _a[_i7];
      if (entry.isIntersecting) {
        var items = entry.target.querySelectorAll('.skill-item');
        items.forEach(function(item, index) {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.6)';
          item.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
          setTimeout(function() {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, index * 80);
        });
        skillsObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.3 });

  var skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
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
