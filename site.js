// /* Live CDMX clock for the topbar.
//    CDMX = America/Mexico_City (UTC-6, no DST after 2022). */
// (function(){
//   function tickAll(){
//     const els = document.querySelectorAll('[data-cdmx-clock]');
//     if (!els.length) return;
//     const fmt = new Intl.DateTimeFormat('en-US', {
//       timeZone: 'America/Mexico_City',
//       hour12: true,
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit'
//     });
//     const parts = fmt.formatToParts(new Date());
//     let h='', m='', s='', a='';
//     for (const p of parts){
//       if (p.type === 'hour') h = p.value;
//       if (p.type === 'minute') m = p.value;
//       if (p.type === 'second') s = p.value;
//       if (p.type === 'dayPeriod') a = p.value.toUpperCase();
//     }
//     const str = `${h}:${m}:${s} ${a}`;
//     els.forEach(el => el.textContent = str);
//   }
//   tickAll();
//   setInterval(tickAll, 1000);
// })();

// /* Tiny scroll reveal — fades sections in on first view */
// (function(){
//   const io = new IntersectionObserver((entries) => {
//     for (const e of entries){
//       if (e.isIntersecting){
//         e.target.classList.add('is-in');
//         io.unobserve(e.target);
//       }
//     }
//   }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
//   document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
// })();
