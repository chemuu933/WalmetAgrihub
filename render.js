/* render.js — builds the Our Work and Knowledge Hub grids from data.js, with filters + search */
(() => {
  'use strict';
  const D = window.WALMET_DATA;
  if (!D) return;

  const ICONS = {
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    utensils: '<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    chart: '<path d="M12 20V10M18 20V4M6 20v-4"/>',
    sprout: '<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>'
  };
  const icon = (n) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;
  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const thumb = (theme, ic, img, alt) =>
    `<div class="thumb ${theme}">${icon(ic)}${img ? `<img src="${esc(img)}" alt="${esc(alt)}" loading="lazy">` : ''}</div>`;

  /** Generic filter + render controller */
  function mount({ gridId, filterId, searchId, items, groups, card, allLabel }) {
    const grid = document.getElementById(gridId);
    const bar = document.getElementById(filterId);
    if (!grid || !bar) return;
    const search = searchId ? document.getElementById(searchId) : null;
    let active = 'all';

    bar.insertAdjacentHTML('afterbegin',
      [['all', allLabel], ...Object.entries(groups).map(([k, v]) => [k, v.label])]
        .map(([k, l]) => `<button type="button" class="filter-btn${k === 'all' ? ' is-active' : ''}" data-filter="${k}">${esc(l)}</button>`).join(''));

    const draw = () => {
      const q = search ? search.value.trim().toLowerCase() : '';
      const list = items.filter((it) =>
        (active === 'all' || it.group === active) &&
        (!q || (it.title + ' ' + it.summary).toLowerCase().includes(q)));
      grid.innerHTML = list.length
        ? list.map((it, i) => card(it, i)).join('')
        : '<p class="empty">Nothing here yet \u2014 check back soon.</p>';
    };

    bar.addEventListener('click', (e) => {
      const b = e.target.closest('.filter-btn');
      if (!b) return;
      active = b.dataset.filter;
      bar.querySelectorAll('.filter-btn').forEach((x) => x.classList.toggle('is-active', x === b));
      draw();
    });
    if (search) search.addEventListener('input', draw);
    draw();
  }

  /* Our Work */
  mount({
    gridId: 'work-grid', filterId: 'work-filters', allLabel: 'All work',
    groups: D.workCategories,
    items: D.work.map((w) => ({ ...w, group: w.category })),
    card: (w, i) => {
      const c = D.workCategories[w.category];
      return `<article class="work-card pop" style="animation-delay:${i * 60}ms">
        ${thumb(c.theme, c.icon, w.image, w.title)}
        <div class="card-body">
          <span class="badge">${esc(c.label)}</span>
          <h3>${esc(w.title)}</h3>
          <p>${esc(w.summary)}</p>
          ${w.location ? `<div class="meta">${esc(w.location)}</div>` : ''}
        </div></article>`;
    }
  });

  /* Knowledge Hub */
  mount({
    gridId: 'kh-grid', filterId: 'kh-filters', searchId: 'kh-search', allLabel: 'All',
    groups: D.knowledgeTypes,
    items: D.knowledge.map((k) => ({ ...k, group: k.type })),
    card: (k, i) => {
      const t = D.knowledgeTypes[k.type];
      const cta = k.link
        ? `<a class="link-arrow" href="${esc(k.link)}">Read more ${icon('arrow')}</a>`
        : '<span class="meta">Link will be added on publication</span>';
      return `<article class="post pop" style="animation-delay:${i * 60}ms">
        ${thumb(t.theme, t.icon, k.image, k.title)}
        <div class="card-body">
          <span class="badge">${esc(t.label.replace(/s$/, ''))}</span>
          <h3>${esc(k.title)}</h3>
          <p>${esc(k.summary)}</p>
          ${k.date ? `<div class="meta">${esc(k.date)}</div>` : ''}
          ${cta}
        </div></article>`;
    }
  });
})();
