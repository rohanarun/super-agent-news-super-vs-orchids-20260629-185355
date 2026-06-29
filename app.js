(function () {
  // Guarded GSAP animation
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.tile', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }

  if (!window.gsap) {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
    script.onload = initAnimations;
    script.onerror = function () { /* graceful fallback */ };
    document.head.appendChild(script);
  } else {
    initAnimations();
  }
})();