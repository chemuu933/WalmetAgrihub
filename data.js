/* data.js — EDIT THIS FILE to add projects and Knowledge Hub entries (SRS FR-08 / FR-09).
   No other code needs to change. Each entry renders automatically.

   work item:      { category, title, summary, location?, image? }
   knowledge item: { type, title, summary, date?, link?, image? }
   `image` is optional — e.g. "assets/img/work/water-pan.jpg". Without it a themed gradient is shown.
   Entries below are PLACEHOLDERS — replace with approved client content. */

window.WALMET_DATA = {
  workCategories: {
    'climate-smart': { label: 'Climate-Smart Agriculture', theme: 'th-climate', icon: 'cloud' },
    'asal':          { label: 'ASAL Resilience',           theme: 'th-asal',    icon: 'sun' },
    'food-nutrition':{ label: 'Food & Nutrition Security', theme: 'th-food',    icon: 'utensils' },
    'water':         { label: 'Water Harvesting',          theme: 'th-water',   icon: 'droplet' },
    'livelihoods':   { label: 'Livelihood Diversification',theme: 'th-liveli',  icon: 'users' },
    'landscape':     { label: 'Landscape Restoration',     theme: 'th-land',    icon: 'mountain' }
  },
  work: [
    { category: 'climate-smart', title: 'Climate-smart farming practices', summary: 'Practical, climate-adapted production systems that reduce risk and build farmer resilience.', location: 'Kenya', image: '' },
    { category: 'asal',          title: 'ASAL community resilience',       summary: 'Strengthening livelihoods and preparedness in Kenya\u2019s arid and semi-arid lands.', location: 'Kenya', image: '' },
    { category: 'food-nutrition',title: 'Food & nutrition programming',    summary: 'Linking productive farming to diverse, nutritious diets for households and communities.', location: 'Kenya', image: '' },
    { category: 'water',         title: 'Water harvesting & irrigation',   summary: 'Capturing and managing water for reliable production through dry periods.', location: 'Kenya', image: '' },
    { category: 'livelihoods',   title: 'Livelihood diversification',      summary: 'Expanding income opportunities beyond a single crop or enterprise.', location: 'Kenya', image: '' },
    { category: 'landscape',     title: 'Landscape restoration',           summary: 'Restoring degraded land and improving hydrological stability for lasting impact.', location: 'Kenya', image: '' }
  ],

  knowledgeTypes: {
    article:     { label: 'Articles',         theme: 'th-article', icon: 'file' },
    publication: { label: 'Publications',     theme: 'th-pub',     icon: 'book' },
    brief:       { label: 'Technical Briefs', theme: 'th-brief',   icon: 'file' },
    case:        { label: 'Case Studies',     theme: 'th-case',    icon: 'chart' },
    insight:     { label: 'Insights',         theme: 'th-insight', icon: 'sprout' }
  },
  knowledge: [
    { type: 'article',     title: 'Why healthy soils are the foundation of resilience', summary: 'A short introduction to regenerative practices that rebuild soil health and productivity.', date: 'Coming soon', link: '' },
    { type: 'publication', title: 'Regenerative agriculture in Kenyan landscapes',      summary: 'A publication placeholder \u2014 upload the approved document and link it here.', date: 'Coming soon', link: '' },
    { type: 'brief',       title: 'Technical brief: climate-smart practices',           summary: 'A concise technical brief for practitioners and programme teams.', date: 'Coming soon', link: '' },
    { type: 'case',        title: 'Case study: water harvesting for dry-season production', summary: 'A case-study placeholder describing approach, results and lessons learned.', date: 'Coming soon', link: '' },
    { type: 'insight',     title: 'Agricultural insights: what works at scale',         summary: 'Short field-informed insights for partners, funders and farmers.', date: 'Coming soon', link: '' }
  ]
};
