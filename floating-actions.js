document.addEventListener('DOMContentLoaded', () => {
  document.head.insertAdjacentHTML('beforeend', '<style>a{text-decoration:none!important}</style>');
  const actions = document.createElement('div');
  actions.className = 'fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8';
  actions.innerHTML = '<button id="back-to-top" class="grid h-12 w-12 translate-y-2 place-items-center border border-white/20 bg-pine text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-[#d7bb86] hover:text-pine" aria-label="Back to top"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="m18 15-6-6-6 6"/></svg></button><a href="#contact" class="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#1eb85a]" aria-label="Make a WhatsApp inquiry"><svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.8Z"/><path d="M8.3 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5 0 .7l-.5.7c.6 1.3 1.6 2.2 2.8 2.8l.7-.5c.2-.1.4-.1.7 0l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.2-1.5.5-2.4.2-2.8-1-4.9-3.1-5.9-5.9-.3-.9 0-1.9.2-2.4Z"/></svg></a>';
  document.body.append(actions);
  const backToTop = actions.querySelector('#back-to-top');
  const updateBackToTop = () => {
    const show = window.scrollY >= 400;
    backToTop.classList.toggle('opacity-0', !show);
    backToTop.classList.toggle('translate-y-2', !show);
  };
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
