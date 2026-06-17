/* deck.js — shared runtime for every agents-101 episode deck.
   Include as the last element of <body>:  <script src="../../assets/deck.js"></script>
   (Adjust path depth depending on nesting level.)
   1. Injects the shared character sprites so slides can <use href="#ch-NAME">.
   2. Builds the fixed deck header/footer from <body data-ep-label="S1·E1 · Title">.
   3. Runs the Deck controller (keyboard / wheel / touch / progress / #/N hash). */

(function () {
  /* ---- Character sprites ---- */
  const SPRITES = `
<symbol id="ch-agent" viewBox="0 0 120 140">
  <!-- Agent: the AI worker — clean, tech aesthetic -->
  <circle cx="60" cy="50" r="38" fill="#4992C1" stroke="#11172C" stroke-width="3.5"/>
  <circle cx="60" cy="50" r="28" fill="#F5F8FB" stroke="#11172C" stroke-width="3"/>
  <circle cx="47" cy="48" r="9" fill="#fff" stroke="#11172C" stroke-width="3"/>
  <circle cx="74" cy="48" r="9" fill="#fff" stroke="#11172C" stroke-width="3"/>
  <circle cx="48" cy="49" r="3.5" fill="#11172C"/>
  <circle cx="75" cy="49" r="3.5" fill="#11172C"/>
  <path d="M49 68 Q60 78 72 68" fill="none" stroke="#11172C" stroke-width="3" stroke-linecap="round"/>
  <!-- Terminal shirt -->
  <rect x="34" y="92" width="52" height="44" rx="10" fill="#11172C" stroke="#11172C" stroke-width="3"/>
  <text x="60" y="120" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle" fill="#FBAF32">&gt;_</text>
  <!-- Antenna -->
  <line x1="60" y1="12" x2="60" y2="22" stroke="#11172C" stroke-width="3" stroke-linecap="round"/>
  <circle cx="60" cy="10" r="4" fill="#FBAF32" stroke="#11172C" stroke-width="2.5"/>
</symbol>

<symbol id="ch-dev" viewBox="0 0 120 140">
  <!-- Developer: the human engineer -->
  <circle cx="60" cy="50" r="38" fill="#F6D7B0" stroke="#11172C" stroke-width="3.5"/>
  <path d="M22 48 Q20 8 60 10 Q100 8 98 48 L90 36 Q86 22 60 22 Q34 22 30 36Z" fill="#2C2C2C" stroke="#11172C" stroke-width="3.5"/>
  <rect x="36" y="43" width="20" height="14" rx="4" fill="none" stroke="#11172C" stroke-width="3"/>
  <rect x="64" y="43" width="20" height="14" rx="4" fill="none" stroke="#11172C" stroke-width="3"/>
  <line x1="56" y1="49" x2="64" y2="49" stroke="#11172C" stroke-width="3"/>
  <circle cx="46" cy="50" r="3" fill="#11172C"/>
  <circle cx="74" cy="50" r="3" fill="#11172C"/>
  <path d="M48 70 Q60 80 72 70" fill="none" stroke="#11172C" stroke-width="3" stroke-linecap="round"/>
  <!-- Laptop hoodie -->
  <rect x="34" y="92" width="52" height="44" rx="10" fill="#4992C1" stroke="#11172C" stroke-width="3"/>
  <rect x="44" y="100" width="32" height="26" rx="4" fill="#F5F8FB" stroke="#11172C" stroke-width="2.5"/>
  <line x1="50" y1="110" x2="70" y2="110" stroke="#11172C" stroke-width="2"/>
  <line x1="50" y1="118" x2="70" y2="118" stroke="#11172C" stroke-width="2"/>
</symbol>`;

  document.body.insertAdjacentHTML('afterbegin',
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + SPRITES + '</svg>');

  /* ---- Deck chrome (header + footer) ---- */
  const label = document.body.dataset.epLabel;
  const season = document.body.dataset.season || 'agents-101';
  const ghRepo = 'https://github.com/jiteshsureka/agents-101';
  const indexPath = document.body.dataset.indexPath || '../../index.html';

  if (label) {
    document.body.insertAdjacentHTML('beforeend',
      `<header class="deck-header">
        <a class="home" href="${indexPath}">← Home</a>
        <span class="byline">
          <a href="${ghRepo}" target="_blank" rel="noopener">agents-101</a>
        </span>
        <span class="deck-ep"></span>
        <span class="cta-group">
          <button class="lang-toggle" id="langBtn" aria-label="Toggle language">বাংলা</button>
          <a class="cta cta-star" href="${ghRepo}" target="_blank" rel="noopener">★ Star</a>
          <a class="cta cta-feedback" href="${ghRepo}/issues/new" target="_blank" rel="noopener">✍ Feedback</a>
        </span>
      </header>
      <footer class="deck-footer">
        <span class="brand">agents-101</span>
      </footer>`);
    document.querySelector('.deck-header .deck-ep').textContent = label;

    /* Language toggle logic */
    const langBtn = document.getElementById('langBtn');
    const saved = localStorage.getItem('agents101-lang');
    if (saved === 'bn') {
      document.body.classList.add('lang-bn');
      langBtn.textContent = 'English';
    }
    langBtn.addEventListener('click', () => {
      const isBn = document.body.classList.toggle('lang-bn');
      langBtn.textContent = isBn ? 'English' : 'বাংলা';
      localStorage.setItem('agents101-lang', isBn ? 'bn' : 'en');
    });
  }
})();

/* ---- Deck controller: slides + step fragments ---- */
class Deck {
  constructor() {
    this.slides = [...document.querySelectorAll('.slide')];
    this.i = 0; this.fi = 0;
    this.bar = document.getElementById('bar');
    this.counter = document.getElementById('counter');
    const h = parseInt(location.hash.slice(2), 10);
    this.go(Number.isFinite(h) ? h - 1 : 0, false);

    addEventListener('keydown', e => {
      if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); this.next(); }
      else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); this.prev(); }
      else if (e.key === 'Home') this.go(0, false);
      else if (e.key === 'End')  this.go(this.slides.length - 1, true);
    });

    let lastWheel = 0;
    addEventListener('wheel', e => {
      const now = Date.now(); if (now - lastWheel < 750) return; lastWheel = now;
      Math.sign(e.deltaY) > 0 ? this.next() : this.prev();
    }, { passive: true });

    let tx = 0, ty = 0;
    addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - tx;
      const dy = e.changedTouches[0].clientY - ty;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 40) return;
      (Math.abs(dx) > Math.abs(dy) ? dx : dy) < 0 ? this.next() : this.prev();
    }, { passive: true });
  }

  cur()    { return this.slides[this.i]; }
  frags(s) { return [...s.querySelectorAll('.frag')]; }

  next() {
    const f = this.frags(this.cur());
    if (this.fi < f.length) f[this.fi++].classList.add('on');
    else if (this.i < this.slides.length - 1) this.go(this.i + 1, false);
  }
  prev() {
    if (this.fi > 0) this.frags(this.cur())[--this.fi].classList.remove('on');
    else if (this.i > 0) this.go(this.i - 1, true);
  }
  go(n, end) {
    this.i = Math.max(0, Math.min(n, this.slides.length - 1));
    this.slides.forEach((s, k) => s.classList.toggle('active', k === this.i));
    const f = this.frags(this.cur());
    f.forEach(el => el.classList.toggle('on', !!end));
    this.fi = end ? f.length : 0;
    if (this.bar)     this.bar.style.width = ((this.i + 1) / this.slides.length * 100) + '%';
    if (this.counter) this.counter.textContent = (this.i + 1) + ' / ' + this.slides.length;
    history.replaceState(null, '', '#/' + (this.i + 1));
  }
}

new Deck();
