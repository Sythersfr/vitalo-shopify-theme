/* ============================================
   VITALO — Theme JavaScript
   Scroll animations, FAQ accordion, interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Scroll-reveal animations
  initScrollAnimations();
  // FAQ accordion
  initFaqAccordion();
});

/* Scroll Animations */
function initScrollAnimations() {
  var animateEls = document.querySelectorAll('.vitalo-animate');
  if (!animateEls.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animateEls.forEach(function (el) {
    observer.observe(el);
  });
}

/* FAQ Accordion */
function initFaqAccordion() {
  var faqItems = document.querySelectorAll('.vitalo-faq-item__question');
  faqItems.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.vitalo-faq-item');
      var isOpen = item.classList.contains('is-open');

      // Close all siblings in same group
      var group = item.closest('.vitalo-faq__group');
      if (group) {
        group.querySelectorAll('.vitalo-faq-item.is-open').forEach(function (openItem) {
          openItem.classList.remove('is-open');
        });
      }

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}
