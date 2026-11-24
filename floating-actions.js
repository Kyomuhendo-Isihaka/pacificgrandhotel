document.addEventListener('DOMContentLoaded', () => {
  document.head.insertAdjacentHTML('beforeend', '<style>a{text-decoration:none!important}</style>');
  const modal = document.createElement('div');
  modal.id = 'booking-modal';
  modal.className = 'fixed inset-0 z-[60] hidden items-center justify-center bg-black/60 p-4';
  modal.innerHTML = '<div class="relative max-h-[92vh] w-full max-w-xl overflow-y-auto bg-[#f7f3eb] p-7 shadow-2xl sm:p-10"><button type="button" id="close-booking-modal" class="absolute right-5 top-4 text-3xl leading-none text-pine" aria-label="Close form">×</button><p id="form-eyebrow" class="text-[10px] font-bold uppercase tracking-[.18em] text-[#b4925a]">Pacific Grand Hotel</p><h2 id="form-title" class="mt-2 font-serif text-3xl text-pine sm:text-4xl">Book your stay</h2><p class="mt-3 text-sm leading-6 text-stone-600">Send us your details and the hotel team will get back to you to confirm availability.</p><form id="stay-form" class="mt-7 grid gap-4"><input type="hidden" name="request_type" id="request-type" value="Booking request"><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Full name<input required name="name" class="border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]" placeholder="Your name"></label><div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Email address<input required type="email" name="email" class="border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]" placeholder="you@example.com"></label><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Phone / WhatsApp<input required name="phone" class="border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]" placeholder="+254 …"></label></div><div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Check-in<input type="date" name="check_in" class="border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]"></label><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Check-out<input type="date" name="check_out" class="border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]"></label></div><label class="grid gap-1 text-xs font-bold uppercase tracking-wider text-pine">Your message<textarea required name="message" rows="4" class="resize-none border border-stone-300 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#b4925a]" placeholder="Tell us about your preferred room, dates, guests, or event."></textarea></label><button class="mt-2 bg-pine px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b4925a] hover:text-pine">Send inquiry</button><p id="form-confirmation" class="hidden text-sm leading-6 text-pine"></p></form></div>';
  document.body.append(modal);
  const closeModal = () => modal.classList.replace('flex', 'hidden');
  const openModal = (type) => {
    document.querySelector('#form-title').textContent = type === 'Inquiry' ? 'Make an inquiry' : 'Book your stay';
    document.querySelector('#form-eyebrow').textContent = type === 'Inquiry' ? 'Send a message' : 'Reservation request';
    document.querySelector('#request-type').value = type === 'Inquiry' ? 'General inquiry' : 'Booking request';
    modal.classList.replace('hidden', 'flex');
  };
  document.querySelector('#close-booking-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  document.querySelectorAll('a').forEach((link) => {
    const text = link.textContent.trim().toLowerCase();
    if (['book your stay', 'make a reservation', 'make an inquiry'].includes(text)) {
      link.addEventListener('click', (event) => { event.preventDefault(); openModal(text === 'make an inquiry' ? 'Inquiry' : 'Booking'); });
    }
  });
  document.querySelector('#stay-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const confirmation = document.querySelector('#form-confirmation');
    confirmation.textContent = 'Thank you. Your request has been prepared for the Pacific Grand Hotel team.';
    confirmation.classList.remove('hidden');
    event.target.reset();
  });
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
