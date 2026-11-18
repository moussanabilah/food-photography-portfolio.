// ---- CONFIG: replace with your real address ----
const EMAIL = "nabila.moussa@email.com";

document.getElementById('yr').textContent = new Date().getFullYear();
const emailLink = document.getElementById('emailLink');
emailLink.href = 'mailto:' + EMAIL;

// mobile menu
const menuBtn = document.getElementById('menuBtn'), navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));

// cursor
const cursor = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  (function loop(){ rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,.shot,.skill-card,.tool-pill,.edu-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width = '16px'; cursor.style.height = '16px'; ring.style.width = '56px'; ring.style.height = '56px'; });
    el.addEventListener('mouseleave', () => { cursor.style.width = '10px'; cursor.style.height = '10px'; ring.style.width = '36px'; ring.style.height = '36px'; });
  });
}

// reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// active nav link
const secs = document.querySelectorAll('section[id]'), links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

// lightbox
const lb = document.getElementById('lightbox'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
document.querySelectorAll('.shot').forEach(fig => {
  fig.addEventListener('click', () => {
    if (fig.classList.contains('missing')) return;
    const img = fig.querySelector('img');
    lbImg.src = fig.dataset.full || img.src; lbImg.alt = img.alt;
    lbCap.textContent = fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : img.alt;
    lb.classList.add('open');
  });
});
const closeLb = () => lb.classList.remove('open');
document.getElementById('lbClose').addEventListener('click', closeLb);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const n = document.getElementById('f-name').value, em = document.getElementById('f-email').value;
  const s = document.getElementById('f-subject').value || 'Portfolio inquiry', m = document.getElementById('f-msg').value;
  const body = m + '\n\n— ' + n + ' (' + em + ')';
  window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(s) + '&body=' + encodeURIComponent(body);
});
