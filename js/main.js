  (function() {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const downloadBtn = document.getElementById('downloadCV');
    
    // Respect saved preference else system preference
    const saved = localStorage.getItem('pref-theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
    else if (saved === 'light') document.documentElement.classList.remove('dark');
    else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
    
    // set aria-pressed state
    function setPressed() {
      const isDark = document.documentElement.classList.contains('dark');
      btn.setAttribute('aria-pressed', String(isDark));
      btn.querySelector('.label').textContent = isDark ? 'Dark' : 'Light';
    }
    setPressed();
    
    // toggle action
    btn.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('pref-theme', isDark ? 'dark' : 'light');
      setPressed();
    });
    
    // Download CV demo
    downloadBtn.addEventListener('click', function() {
      const href = '/assets/chibuzor-nkemdilim_CV.pdf';
      alert('Hook this button to your CV file: ' + href);
    });
    
    // smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        if (!id) return;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  })();