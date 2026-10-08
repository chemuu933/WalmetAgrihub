/* contact.js — validation + submission for the enquiry form (SRS FR-04)
   HOW IT SENDS:
   1) If the <form> has data-endpoint="https://formspree.io/f/XXXX" it POSTs there as JSON.
   2) If data-endpoint is empty it opens the visitor's email app (mailto:) pre-filled — works with no backend. */
(() => {
  'use strict';
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const setError = (field, show) => field.closest('.field').classList.toggle('has-error', show);

  const validate = () => {
    let ok = true;
    form.querySelectorAll('[required]').forEach((el) => {
      const bad = !el.value.trim() || (el.type === 'email' && !EMAIL_RE.test(el.value.trim()));
      setError(el, bad);
      if (bad && ok) { el.focus(); ok = false; }
    });
    return ok;
  };

  form.addEventListener('input', (e) => { if (e.target.matches('[required]')) setError(e.target, false); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    if (form.querySelector('.hp input').value) return;   // honeypot: bots only
    if (!validate()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    delete data.website;
    const endpoint = form.dataset.endpoint;
    const btn = form.querySelector('button[type="submit"]');

    if (endpoint) {
      btn.disabled = true;
      try {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        status.textContent = 'Thank you \u2014 your enquiry has been sent. We will be in touch shortly.';
        status.className = 'form-status ok';
      } catch {
        status.textContent = 'Sorry, something went wrong. Please email us directly at ' + form.dataset.email + '.';
        status.className = 'form-status fail';
      } finally { btn.disabled = false; }
    } else {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone / Organisation: ${data.phone || '-'}\n\n${data.message}`;
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Opening your email app\u2026 if nothing happens, write to ' + form.dataset.email + '.';
      status.className = 'form-status ok';
    }
  });
})();
