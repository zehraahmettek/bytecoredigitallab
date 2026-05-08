(function () {
  const reveals = document.querySelectorAll('.reveal');
  const hero = document.querySelector('.hero');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${i % 5 * 70}ms`;
    observer.observe(el);
  });

  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.backgroundPositionY = `${y * 0.18}px`;
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
})();
