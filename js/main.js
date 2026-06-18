/* === i18n System (Load from JSON config) === */
(function() {
  // Configured default data as synchronous fallback (to prevent flash of unstyled content)
  var data = {
    'zh-CN': {
      title: '我的空间',
      'nav.about': '关于',
      'nav.pipeline': '全流程',
      'nav.skills': '技能',
      'nav.gallery': '影像',
      'nav.projects': '项目',
      'nav.contact': '联系',
      'hero.name': '武浩',
      'hero.scroll': '向下滚动',
      'hero.typing': 'AI 算法工程师 / C++高性能计算 / 终身探索者',
      'about.title': '/ 关于我',
      'about.p1': 'AI 算法研发工程师，深耕于深度学习、大语言模型与高性能计算。擅长使用 C++ 和 Python 构建高吞吐、低延迟的模型推理与计算系统。',
      'about.p2': '在 CUDA 并行计算、TensorRT 模型编译部署及多模态大模型应用有丰富实践。追求极致的计算性能与优雅的代码架构，持续探索人工智能边界。',
      'pipeline.title': '/ 全流程能力',
      'pipeline.intro': '从数据构建到线上运维闭环，覆盖大模型训练、评测、部署与持续优化。',
      'pipeline.step1.title': '数据工程',
      'pipeline.step1.desc': '构建清洗、去重、指令构造与质检流程，形成可复用训练语料资产。',
      'pipeline.step1.stack': 'DataOps / Python / 规则引擎',
      'pipeline.step1.outcome': '产出：高质量数据集与版本追踪',
      'pipeline.step1.proof': '查看证据',
      'pipeline.step1.proofUrl': '#',
      'pipeline.step2.title': '训练与对齐',
      'pipeline.step2.desc': '负责 SFT、参数高效微调与对齐策略迭代，平衡效果与训练成本。',
      'pipeline.step2.stack': 'PyTorch / LoRA / 分布式训练',
      'pipeline.step2.outcome': '产出：可上线模型权重与训练报告',
      'pipeline.step2.proof': '查看证据',
      'pipeline.step2.proofUrl': '#',
      'pipeline.step3.title': '评测与迭代',
      'pipeline.step3.desc': '建立离线评测集和人工评审标准，持续压低幻觉率并提升稳健性。',
      'pipeline.step3.stack': 'Benchmark / A-B / 自动评测',
      'pipeline.step3.outcome': '产出：指标看板与版本回归基线',
      'pipeline.step3.proof': '查看证据',
      'pipeline.step3.proofUrl': '#',
      'pipeline.step4.title': '推理部署',
      'pipeline.step4.desc': '完成量化、图优化与服务化封装，支撑高并发低延迟推理场景。',
      'pipeline.step4.stack': 'TensorRT / CUDA / Serving',
      'pipeline.step4.outcome': '产出：可扩展线上推理服务',
      'pipeline.step4.proof': '查看证据',
      'pipeline.step4.proofUrl': '#',
      'pipeline.step5.title': '线上运维',
      'pipeline.step5.desc': '接入监控告警与灰度发布，打通反馈数据回流与周期性再训练。',
      'pipeline.step5.stack': 'Observability / CI-CD / 反馈闭环',
      'pipeline.step5.outcome': '产出：稳定 SLA 与持续优化机制',
      'pipeline.step5.proof': '查看证据',
      'pipeline.step5.proofUrl': '#',
      'skills.title': '/ 技能',
      'gallery.title': '/ 影像',
      'projects.title': '/ 项目',
      'projects.item1.title': '高性能神经网络推理引擎',
      'projects.item1.desc': '基于 C++ 和 CUDA 编写的极致推理加速引擎，支持模型剪枝、INT8 量化及算子融合，极其轻量低延迟。',
      'projects.item2.title': '多模态大模型智能体平台',
      'projects.item2.desc': '结合 RAG（检索增强生成）与高吞吐算子优化的离线 AI 助手系统，利用 Python 及自定义 C++ 算子加速。',
      'projects.view': '查看项目',
      'contact.title': '/ 联系',
      'contact.github': 'https://github.com/your-github-id',
      'contact.email': 'your@email.com'
    },
    'en': {
      title: 'My Space',
      'nav.about': 'About',
      'nav.pipeline': 'Pipeline',
      'nav.skills': 'Skills',
      'nav.gallery': 'Gallery',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.name': 'Wu Hao',
      'hero.scroll': 'SCROLL',
      'hero.typing': 'AI R&D Engineer / C++ High-Performance Computing / Lifelong Explorer',
      'about.title': '/ About',
      'about.p1': 'AI Algorithm Engineer specialized in Deep Learning, Large Language Models, and High-Performance Computing. Skilled in designing high-throughput, low-latency inference and compute engines using C++ and Python.',
      'about.p2': 'Deep hands-on experience in CUDA parallel programming, TensorRT compiler optimizations, and Multimodal LLMs. Dedicated to squeezing maximum computing power through clean, elegant software architectures.',
      'pipeline.title': '/ End-to-End Pipeline',
      'pipeline.intro': 'Covers the full lifecycle from data engineering to production operations: training, evaluation, deployment, and continuous optimization.',
      'pipeline.step1.title': 'Data Engineering',
      'pipeline.step1.desc': 'Built cleaning, deduplication, instruction construction, and quality-control pipelines for reusable training datasets.',
      'pipeline.step1.stack': 'DataOps / Python / Rule Engine',
      'pipeline.step1.outcome': 'Output: versioned high-quality datasets',
      'pipeline.step1.proof': 'Proof',
      'pipeline.step1.proofUrl': '#',
      'pipeline.step2.title': 'Training and Alignment',
      'pipeline.step2.desc': 'Owned SFT and parameter-efficient fine-tuning strategies, balancing model quality with compute budget.',
      'pipeline.step2.stack': 'PyTorch / LoRA / Distributed Training',
      'pipeline.step2.outcome': 'Output: deployable checkpoints and training reports',
      'pipeline.step2.proof': 'Proof',
      'pipeline.step2.proofUrl': '#',
      'pipeline.step3.title': 'Evaluation and Iteration',
      'pipeline.step3.desc': 'Designed offline benchmarks and human-review standards to reduce hallucinations and improve robustness.',
      'pipeline.step3.stack': 'Benchmark / A-B / Auto Eval',
      'pipeline.step3.outcome': 'Output: metric dashboard and regression baseline',
      'pipeline.step3.proof': 'Proof',
      'pipeline.step3.proofUrl': '#',
      'pipeline.step4.title': 'Inference Deployment',
      'pipeline.step4.desc': 'Delivered quantization, graph optimization, and service packaging for high-throughput low-latency inference.',
      'pipeline.step4.stack': 'TensorRT / CUDA / Serving',
      'pipeline.step4.outcome': 'Output: scalable online inference service',
      'pipeline.step4.proof': 'Proof',
      'pipeline.step4.proofUrl': '#',
      'pipeline.step5.title': 'Production Operations',
      'pipeline.step5.desc': 'Implemented monitoring, alerting, and canary rollout with feedback loops for periodic retraining.',
      'pipeline.step5.stack': 'Observability / CI-CD / Feedback Loop',
      'pipeline.step5.outcome': 'Output: stable SLA and continuous improvement',
      'pipeline.step5.proof': 'Proof',
      'pipeline.step5.proofUrl': '#',
      'skills.title': '/ Skills',
      'gallery.title': '/ Gallery',
      'projects.title': '/ Projects',
      'projects.item1.title': 'High-Performance Neural Inference Engine',
      'projects.item1.desc': 'A customized inference accelerator written in C++ & CUDA, utilizing model pruning, INT8 quantization, and kernel fusion to slash latency.',
      'projects.item2.title': 'Multimodal LLM Agent Framework',
      'projects.item2.desc': 'A localized LLM Agent workspace integrating Retrieval-Augmented Generation (RAG) and optimized with Python and custom C++ CUDA-kernels.',
      'projects.view': 'View Project',
      'contact.title': '/ Contact',
      'contact.github': 'https://github.com/your-github-id',
      'contact.email': 'your@email.com'
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

    // Update project links from configuration, allowing direct jumps to Bilibili pages.
    var projectLink1 = document.getElementById('project-link-1');
    var projectLink2 = document.getElementById('project-link-2');
    if (projectLink1 && data[lang]['projects.item1.url']) {
      projectLink1.href = data[lang]['projects.item1.url'];
    }
    if (projectLink2 && data[lang]['projects.item2.url']) {
      projectLink2.href = data[lang]['projects.item2.url'];
    }

    var githubLink = document.getElementById('contact-github');
    var emailLink = document.getElementById('contact-email');
    if (githubLink && data[lang]['contact.github']) {
      githubLink.href = data[lang]['contact.github'];
    }
    if (emailLink && data[lang]['contact.email']) {
      var emailValue = data[lang]['contact.email'];
      emailLink.href = emailValue.indexOf('mailto:') === 0 ? emailValue : ('mailto:' + emailValue);
    }

    for (var step = 1; step <= 5; step++) {
      var proofEl = document.getElementById('pipeline-proof-' + step);
      if (!proofEl) continue;

      var proofLabelKey = 'pipeline.step' + step + '.proof';
      var proofUrlKey = 'pipeline.step' + step + '.proofUrl';
      if (data[lang][proofLabelKey]) {
        proofEl.textContent = data[lang][proofLabelKey];
      }

      var proofUrl = data[lang][proofUrlKey] || '#';
      if (proofUrl === '#') {
        proofEl.href = '#';
        proofEl.style.pointerEvents = 'none';
        proofEl.style.opacity = '0.55';
      } else {
        proofEl.href = proofUrl;
        proofEl.style.pointerEvents = 'auto';
        proofEl.style.opacity = '1';
      }
    }

    // Re-trigger typing effect with new text
    if (window.restartTyping) {
      window.restartTyping(data[lang]['hero.typing']);
    }
  }

  // Load from external JSON configuration
  fetch('profile.json')
    .then(function(res) { return res.json(); })
    .then(function(jsonData) {
      if (jsonData && (jsonData['zh-CN'] || jsonData['en'])) {
        data = jsonData;
        applyLang(currentLang);
      }
    })
    .catch(function(err) {
      console.warn('Fallback to local main.js dictionary data. Erranous profile.json or running via local file protocol (CORS).', err);
    });

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

/* === Cyber Interactive Parallax Canvas Background === */
(function() {
  var canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var w, h;
  var particles = [];
  var sparks = [];
  var tunnelStreams = [];
  var lineConnections = [];
  var mouse = { x: -500, y: -500, targetX: -500, targetY: -500, speed: 0.15, active: false };

  // Handle high DPI screen sharpness
  var dpr = window.devicePixelRatio || 1;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    // DPI setup
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  // Color Interpolation Helper
  function getThemeColors(scrollPct) {
    // Top (scrollPct=0): Cyan (H: 185, S: 100%, L: 55%) -> Deep Teal
    // Mid (scrollPct=0.5): Royal Purple (H: 275, S: 100%, L: 55%) -> Orchid Pink
    // Bottom (scrollPct=1.0): Cyberpunk ruby red / hot pink (H: 330, S: 100%, L: 55%)
    var h1, h2;
    if (scrollPct < 0.5) {
      var t = scrollPct * 2; // 0 to 1
      h1 = 185 + t * 90; // 185 (cyan) to 275 (purple)
      h2 = 210 + t * 90; // 210 (blue-cyan) to 300 (magenta)
    } else {
      var t = (scrollPct - 0.5) * 2; // 0 to 1
      h1 = 275 + t * 65; // 275 (purple) to 340 (cyberpunk pink-red)
      h2 = 300 + t * 45; // 300 (magenta) to 345 (bright ruby pink)
    }
    return {
      c1: 'hsla(' + h1.toFixed(1) + ', 100%, 55%, ',
      c2: 'hsla(' + h2.toFixed(1) + ', 100%, 50%, ',
      hue: h1
    };
  }

  // Particle Class
  function Particle() {
    this.reset(true);
  }

  Particle.prototype.reset = function(init) {
    this.x = Math.random() * w;
    this.y = init ? Math.random() * h : (Math.random() < 0.5 ? -20 : h + 20);
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.baseR = 1.0 + Math.random() * 2.2;
    this.r = this.baseR;
    // Layer depth for parallax effect (0.1 to 1.0)
    // 3 layers: 0.25 (background), 0.55 (mid), 1.0 (foreground)
    var r = Math.random();
    if (r < 0.45) {
      this.layer = 0.25; // Far background
    } else if (r < 0.85) {
      this.layer = 0.55; // Mid
    } else {
      this.layer = 1.0;  // Fore
    }
    this.alpha = 0.15 + Math.random() * 0.55;
    this.pulsate = Math.random() * Math.PI;
    this.pulsateSpeed = 0.005 + Math.random() * 0.015;
  };

  Particle.prototype.update = function(colors, scrollPct, scrollY) {
    // Parallax scroll vertical offset (向下滚动时，背景应该呈负物理位移，即粒子向上作视角移动)
    // 滚动得越快，背景粒子被抛到脑后、往上方飞跃的速度应当越敏捷
    var parallaxOffsetY = -scrollY * this.layer * 0.45;
    var currentY = this.y + parallaxOffsetY;

    // 时光驻足: Local time slowdown or stop near mouse cursor
    var localTimeScale = 1.0;
    if (mouse.active) {
      var mdx = mouse.x - this.x;
      var mdy = mouse.y - currentY;
      var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      var maxFreezeR = 200; // Local Time Stop Bubble Radius: 200px
      if (mdist < maxFreezeR) {
        var inf = 1.0 - (mdist / maxFreezeR);
        // Time slows down smoothly to 0 at the exact center of mouse, providing a "time stop" bubble
        localTimeScale = Math.max(0.01, 1.0 - inf);
      }
    }

    // 1) Continuous float drifting affected by localized time freeze
    this.x += this.vx * localTimeScale;
    this.y += this.vy * localTimeScale;

    // Re-evaluate coordinates after drift
    var finalY = this.y + parallaxOffsetY;

    // Boundary wrapping (relative to screen space considering parallax)
    if (this.x < -40) this.x = w + 40;
    if (this.x > w + 40) this.x = -40;
    if (finalY < -40) this.y = h + 40 - parallaxOffsetY;
    if (finalY > h + 40) this.y = -40 - parallaxOffsetY;

    // 3) Twinkling affected by local time freeze
    this.pulsate += this.pulsateSpeed * localTimeScale;
    this.currentAlpha = Math.min(1.0, Math.max(0.1, this.alpha + Math.sin(this.pulsate) * 0.12));

    // 4) Mouse interaction (pull & glow & size)
    this.finalX = this.x;
    this.finalY = finalY;
    this.glowBoost = 0;

    if (mouse.active) {
      var dx = mouse.x - this.finalX;
      var dy = mouse.y - this.finalY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var maxInteractDist = 180;

      if (dist < maxInteractDist) {
        var influence = 1.0 - (dist / maxInteractDist);
        // Magnetic pull slower near time freeze
        this.finalX += (dx / dist) * influence * 30 * this.layer * localTimeScale;
        this.finalY += (dy / dist) * influence * 30 * this.layer * localTimeScale;
        // Boost size and brightness still active to visualize potential energy
        this.r = this.baseR * (1.0 + influence * 1.5 * this.layer);
        this.currentAlpha = Math.min(1.0, this.currentAlpha + influence * 0.45);
        this.glowBoost = influence;
        
        // Spawn micro lines to mouse
        if (this.layer === 1.0 && Math.random() < 0.1 && localTimeScale > 0.15) {
          lineConnections.push({ x1: mouse.x, y1: mouse.y, x2: this.finalX, y2: this.finalY, alpha: influence * 0.35 });
        }
      } else {
        // Linear return to base size
        this.r += (this.baseR - this.r) * 0.08;
      }
    } else {
      this.r += (this.baseR - this.r) * 0.08;
    }
  };

  Particle.prototype.draw = function(colors) {
    ctx.shadowBlur = this.glowBoost * 12;
    ctx.shadowColor = colors.hue ? ('hsla(' + colors.hue + ', 100%, 55%, 0.8)') : 'transparent';

    ctx.beginPath();
    ctx.arc(this.finalX, this.finalY, this.r, 0, Math.PI * 2);
    // Draw with depth colors
    var colorOpacity = this.currentAlpha * (0.3 + this.layer * 0.7);
    ctx.fillStyle = (this.layer === 1.0 ? colors.c2 : colors.c1) + colorOpacity + ')';
    ctx.fill();

    ctx.shadowBlur = 0; // reset
  };

  // Spark Class for trail
  function Spark(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4 - 1;
    this.color = color;
    this.life = 1.0;
    this.decay = 0.02 + Math.random() * 0.03;
    this.size = 1.0 + Math.random() * 2.0;
  }

  Spark.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05; // slight gravity
    this.life -= this.decay;
  };

  Spark.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + this.life.toFixed(2) + ')';
    ctx.fill();
  };

  // DigitalMatrixLine Class for Hacker Matrix flowing code rains (极客流光)
  function DigitalMatrixLine() {
    this.reset(true);
  }

  DigitalMatrixLine.prototype.reset = function(init) {
    this.x = Math.random() * w;
    this.y = init ? Math.random() * h : -150 - Math.random() * 150;
    this.speed = 1.2 + Math.random() * 2.8;
    this.fontSize = 9 + Math.random() * 8;
    // 提亮整体代码雨不透明度至 0.16~0.42 (原来 0.07~0.18，翻倍提亮)
    this.opacity = 0.16 + Math.random() * 0.26;
    this.chars = [];
    var length = 8 + Math.floor(Math.random() * 12);
    // Binary & Hex & Math symbols for computer science vibe
    var charPool = '01cppCUDA_ai_pytorch_tensor_0x00FF_matrix_root_init_core_push_pop_'.split('');
    for (var k = 0; k < length; k++) {
      this.chars.push(charPool[Math.floor(Math.random() * charPool.length)]);
    }
  };

  DigitalMatrixLine.prototype.update = function(scrollY) {
    // Parallax scroll vertical adjustment - 向下滚动，极客代码应该反向被往上方抛去
    // 调大系数从 0.15 到 0.55，增强滚屏感知
    var parallaxOffsetY = -scrollY * 0.55;
    var currentY = this.y + parallaxOffsetY;

    // 时光驻足: local slow-down or stop near cursor
    var localTimeScale = 1.0;
    if (mouse.active) {
      var mdx = mouse.x - this.x;
      var mdy = mouse.y - currentY;
      var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      var maxFreezeR = 180;
      if (mdist < maxFreezeR) {
        var inf = 1.0 - (mdist / maxFreezeR);
        localTimeScale = Math.max(0.01, 1.0 - inf);
      }
    }

    this.y += this.speed * localTimeScale;

    // Occassionally swap characters dynamically for flowing cyberpunk text code raining vibe
    if (Math.random() < 0.05 * localTimeScale) {
      var charPool = '01cppCUDA_ai_pytorch_tensor_0x00FF_matrix_root_init_core_push_pop_'.split('');
      var idx = Math.floor(Math.random() * this.chars.length);
      this.chars[idx] = charPool[Math.floor(Math.random() * charPool.length)];
    }

    if (this.y + parallaxOffsetY > h + 150) {
      this.reset(false);
    }
  };

  DigitalMatrixLine.prototype.draw = function(colors, scrollY) {
    ctx.font = 'bold ' + this.fontSize + 'px "Courier New", monospace';
    var startY = this.y - scrollY * 0.55;

    for (var k = 0; k < this.chars.length; k++) {
      var cy = startY - k * (this.fontSize + 2);
      if (cy < -30 || cy > h + 30) continue;

      // Base gradient fade along the column tail
      var tailAlpha = (1.0 - k / this.chars.length) * this.opacity;
      
      // Top head character glowing white-hot green/cyan
      if (k === 0) {
        ctx.fillStyle = colors.c2 + (tailAlpha * 3.5).toFixed(2) + ')';
      } else {
        ctx.fillStyle = colors.c1 + tailAlpha.toFixed(2) + ')';
      }

      ctx.fillText(this.chars[k], this.x, cy);
    }
  };

  // Generate initial nodes
  for (var i = 0; i < 110; i++) {
    particles.push(new Particle());
  }

  // Generate initial digital matrix streams (代码雨)
  for (var i = 0; i < 35; i++) {
    tunnelStreams.push(new DigitalMatrixLine());
  }

  // Large slowly orbiting ambient gas nebulae
  var nebulae = [
    { baseAngle: 0, orbRadius: 250, size: 280, x: w * 0.2, y: h * 0.35, speed: 0.0003, hueOffset: 0 },
    { baseAngle: Math.PI * 0.7, orbRadius: 280, size: 320, x: w * 0.8, y: h * 0.25, speed: 0.0002, hueOffset: 90 },
    { baseAngle: Math.PI * 1.3, orbRadius: 220, size: 240, x: w * 0.35, y: h * 0.75, speed: 0.0004, hueOffset: -40 },
    { baseAngle: Math.PI * 1.8, orbRadius: 260, size: 300, x: w * 0.85, y: h * 0.8, speed: 0.00025, hueOffset: 120 }
  ];

  // Global mouse tracking with smooth easing
  document.addEventListener('mousemove', function(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;

    // Spawn sparks trail if mouse active and moving
    var colors = getThemeColors(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1));
    if (Math.random() < 0.6) {
      sparks.push(new Spark(e.clientX, e.clientY, colors.c2));
    }
  });

  document.addEventListener('touchmove', function(e) {
    if (e.touches && e.touches.length > 0) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.active = true;
    }
  });

  document.addEventListener('touchend', function() {
    mouse.active = false;
  });

  document.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // Render loop
  function loop() {
    ctx.clearRect(0, 0, w, h);

    // Calculate Scroll statistics
    var scrollY = window.scrollY;
    var docHeight = document.documentElement.scrollHeight;
    var winHeight = window.innerHeight;
    var scrollPct = Math.min(1.0, Math.max(0.0, scrollY / (docHeight - winHeight || 1)));

    // Theme color interpolation
    var colors = getThemeColors(scrollPct);

    // 1) Render slowly undulating cyber nebulae behind the mesh
    for (var n = 0; n < nebulae.length; n++) {
      var neb = nebulae[n];
      neb.baseAngle += neb.speed;
      // Sluggish celestial orbital movement
      var curX = neb.x + Math.sin(neb.baseAngle) * neb.orbRadius;
      var curY = neb.y + Math.cos(neb.baseAngle) * neb.orbRadius;
      // Parallax offset
      curY += scrollY * 0.12;

      var radGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, neb.size);
      var nebHue = (colors.hue + neb.hueOffset + 360) % 360;
      radGrad.addColorStop(0, 'hsla(' + nebHue + ', 100%, 45%, 0.11)');
      radGrad.addColorStop(0.3, 'hsla(' + nebHue + ', 80%, 30%, 0.04)');
      radGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = radGrad;
      ctx.fillRect(curX - neb.size, curY - neb.size, neb.size * 2, neb.size * 2);
    }

    // 1b) Update and render interactive hacker code flowing rain streams (时光驻足代码流)
    for (var ts = 0; ts < tunnelStreams.length; ts++) {
      var stream = tunnelStreams[ts];
      stream.update(scrollY);
      stream.draw(colors, scrollY);
    }

    // Ease mouse coordinates for sluggish flow feeling
    if (mouse.active) {
      mouse.x += (mouse.targetX - mouse.x) * mouse.speed;
      mouse.y += (mouse.targetY - mouse.y) * mouse.speed;
    } else {
      // Float home towards center top or off-screen
      mouse.x += (-500 - mouse.x) * 0.05;
      mouse.y += (-500 - mouse.y) * 0.05;
    }

    // 2) Update and draw mouse halo glows
    if (mouse.active) {
      var radGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
      radGrad.addColorStop(0, colors.c1 + '0.12)');
      radGrad.addColorStop(0.5, colors.c2 + '0.04)');
      radGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = radGrad;
      ctx.fillRect(mouse.x - 220, mouse.y - 220, 440, 440);

      // Render outer floating HUD ring
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
      ctx.strokeStyle = colors.c2 + '0.28)';
      ctx.setLineDash([6, 4]);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render inner crosshair
      ctx.beginPath();
      ctx.moveTo(mouse.x - 6, mouse.y);
      ctx.lineTo(mouse.x + 6, mouse.y);
      ctx.moveTo(mouse.x, mouse.y - 6);
      ctx.lineTo(mouse.x, mouse.y + 6);
      ctx.strokeStyle = colors.c1 + '0.5)';
      ctx.setLineDash([]);
      ctx.stroke();
    }

    // Reset micro-connections pool
    lineConnections = [];

    // 3) Update Particles state
    for (var p = 0; p < particles.length; p++) {
      particles[p].update(colors, scrollPct, scrollY);
    }

    // 4) Draw interactive mesh lines (Connect nodes within threshold)
    ctx.setLineDash([]);
    for (var i = 0; i < particles.length; i++) {
      var pi = particles[i];
      for (var j = i + 1; j < particles.length; j++) {
        var pj = particles[j];
        if (pi.layer !== pj.layer) continue; // Only connect nodes in same depth plane

        var dx = pi.finalX - pj.finalX;
        var dy = pi.finalY - pj.finalY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var baseMaxDist = 120;
        var maxD = baseMaxDist * pi.layer;

        if (dist < maxD) {
          var alpha = (1.0 - (dist / maxD)) * 0.16 * pi.layer;
          // Interpolated stroke style depending on active hover state
          if (pi.glowBoost > 0 || pj.glowBoost > 0) {
            var activeBoost = Math.max(pi.glowBoost, pj.glowBoost);
            ctx.strokeStyle = colors.c2 + (alpha + activeBoost * 0.28).toFixed(2) + ')';
            ctx.lineWidth = 0.5 + activeBoost * 1.5;
          } else {
            ctx.strokeStyle = colors.c1 + alpha.toFixed(2) + ')';
            ctx.lineWidth = 0.5;
          }
          ctx.beginPath();
          ctx.moveTo(pi.finalX, pi.finalY);
          ctx.lineTo(pj.finalX, pj.finalY);
          ctx.stroke();

          // Spark stream pulses running along lines
          if (pi.layer === 1.0 && Math.random() < 0.0016) {
            // Pick starting point
            sparks.push(new Spark(pi.finalX, pi.finalY, colors.c2));
          }
        }
      }
    }

    // 5) Draw direct laser beams to cursor
    for (var k = 0; k < lineConnections.length; k++) {
      var l = lineConnections[k];
      ctx.strokeStyle = colors.c2 + l.alpha.toFixed(2) + ')';
      ctx.lineWidth = 0.9;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // 6) Draw and fade active sparks (particle trails)
    for (var s = sparks.length - 1; s >= 0; s--) {
      var sp = sparks[s];
      sp.update();
      if (sp.life <= 0) {
        sparks.splice(s, 1);
      } else {
        sp.draw();
      }
    }

    // 7) Draw particles on top of mesh
    for (var p = 0; p < particles.length; p++) {
      particles[p].draw(colors);
    }

    requestAnimationFrame(loop);
  }

  loop();
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
