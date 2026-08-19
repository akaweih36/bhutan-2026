(() => {
  "use strict";

  const ACCESS_PASSWORD = "261126";
  const ACCESS_SESSION_KEY = "bhutan-2026-access";
  const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

  const IMAGE_DATA = {
    jambay: {
      src: "assets/images/jambay-festival.jpg",
      alt: "Archival photograph of masked dancers at the Jambay Lhakhang festival in Jakar, Bumthang",
      credit: "ManInBlack23! via Wikimedia Commons · CC BY-SA 4.0 · 2009 archival image",
      url: "https://commons.wikimedia.org/wiki/File:Bhutan,_Jambay_Lakhang_Festival_dancers.jpg"
    },
    phobjikha: {
      src: "assets/images/phobjikha-valley.jpg",
      alt: "The wide Phobjikha Valley with fields and dark mountain ridges",
      credit: "stull17 via Wikimedia Commons · CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Phobjika_Valley_view,_Bhutan.jpg"
    },
    nalakhar: {
      src: "assets/images/nalakhar-festival.jpg",
      alt: "Masked dancer in ornate costume during a Nalakhar Tshechu festival gathering in Bumthang, with local spectators gathered around the courtyard",
      credit: "VisitBhutan.com · reference photograph, not a 2026 image",
      url: "https://visitbhutan.com/festival-detail.php?id=51"
    }
  };

  const LOCATION_TOKENS = [
    ["Tiger’s Nest", "place-paro"],
    ["Jambay Lhakhang", "place-bumthang"],
    ["Nalakhar Tshechu", "place-bumthang"],
    ["Kurjey", "place-bumthang"],
    ["Dochula", "place-punakha"],
    ["Phobjikha", "place-phobjikha"],
    ["Punakha", "place-punakha"],
    ["Bumthang", "place-bumthang"],
    ["Thimphu", "place-thimphu"],
    ["Paro", "place-paro"]
  ];

  const HOTEL_DATA = {
    cityHeritage: {
      name: "Hotel City Heritage",
      location: "Thimphu",
      official: "https://www.visitbhutan.com/hotel-detail.php?id=196",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g293845-d34197503-Reviews-City_Heritage_Hotel-Thimphu_Thimphu_District.html",
      note: "The proposal says City Heritage or similar; confirm the actual property before booking."
    },
    samyae: {
      name: "Samyae Resort",
      location: "Bumthang",
      official: "https://visitbhutan.com/hotel-detail.php?id=108",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g469426-d3629099-Reviews-Samyae_Resort-Bumthang_Bumthang_District.html",
      note: "The proposal says Samay Resorts; the linked tourism listing uses Samyae Resort. Confirm the exact property before booking."
    },
    phobjikhaResort: {
      name: "Phobjikha Resort",
      location: "Phobjikha",
      official: "https://services.bhutan.travel/search/hotel/phobjikha-resort",
      reviews: "https://www.google.com/travel/hotels/entity/ChoI6eDu67Gfyb_pARoNL2cvMTFwejhudnl2ZhAB",
      note: "The proposal names Phobjikha Resorts; confirm the exact property and room allocation."
    },
    spiritOfHome: {
      name: "Spirit of Home Resorts",
      location: "Paro",
      official: "https://www.tourbhutan.travel/",
      reviews: "https://www.google.com/search?q=%22Spirit+of+Home+Resorts%22+Paro+Bhutan+reviews",
      note: "This exact hotel name appears in the proposal, but no reliable hotel listing was found under that name; ask the operator to identify the property."
    },
    meriPuensum: {
      name: "Meri Puensum Resort",
      location: "Punakha",
      official: "https://www.mpr.bt/",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g469429-d456018-Reviews-Meri_Puensum_Resort-Punakha_Punakha_District.html",
      note: "Official resort site and independent review page."
    },
    namgay: {
      name: "Namgay Heritage Hotel",
      location: "Thimphu",
      official: "https://www.namgayheritage.com/",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g293845-d1740151-Reviews-Namgay_Heritage_Hotel-Thimphu_Thimphu_District.html",
      note: "Official hotel site and independent review page."
    },
    ugyenLing: {
      name: "Ugyen Ling Resort",
      location: "Bumthang",
      official: "https://services.bhutan.travel/search/hotel",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g469426-d4103895-Reviews-Hotel_Ugyen_Ling-Bumthang_Bumthang_District.html",
      note: "The proposal says Ugyen Ling or similar; the official directory is the safest current property reference."
    },
    dewachen: {
      name: "Dewachen Hotel",
      location: "Phobjikha",
      official: "https://services.bhutan.travel/search/hotel",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g2425780-d605124-Reviews-Dewachen_Hotel_Spa-Phobjikha_Valley_Wangdue_Phodrang_District.html",
      note: "The proposal says Dewachen or similar; confirm the actual property and whether the spa is operating."
    },
    tenzinling: {
      name: "Tenzinling Resort",
      location: "Paro",
      official: "https://services.bhutan.travel/search/hotel/tenzinling-resort",
      reviews: "https://www.tripadvisor.com/Hotel_Review-g321541-d1463364-Reviews-Tenzinling_Resort-Paro_Paro_District.html",
      note: "Official tourism listing and independent review page."
    }
  };

  const ROUTES = [
    {
      id: "A",
      proposal: "Proposal 1",
      operator: "Excursion to Himalayas · Company #1",
      source: "Detailed proposal · 9 days / 8 hotel nights",
      name: "Festival day, then the western loop",
      subtitle: "A shorter Bumthang stay followed by Punakha, Phobjikha and Paro",
      image: "jambay",
      birthdayLocation: "Bumthang",
      visibleSummary: "Reach Bumthang on 25 November, keep 26 November there, then continue west.",
      core: "This proposal uses a domestic flight to reach Bumthang on 25 November, gives the festival and birthday one central day on 26 November, then returns west through Punakha, Phobjikha and Paro. It covers more places, but the festival window is tighter and 27 November carries a flight-plus-road transfer.",
      duration: "9 days · 23 Nov–1 Dec",
      route: "Paro → Thimphu → Bumthang → Punakha → Phobjikha → Paro",
      days: [
        { date: "23 Nov", plan: "Arrive Paro → Thimphu", overnight: "Thimphu", hotel: "cityHeritage", travel: "Approx. 50 km · 1.5–2h by road" },
        { date: "24 Nov", plan: "Thimphu city sightseeing", overnight: "Thimphu", hotel: "cityHeritage", travel: "Local sightseeing" },
        { date: "25 Nov", plan: "Thimphu → Paro → Bumthang by domestic flight; Kurjey and Bumthang Valley", overnight: "Bumthang", hotel: "samyae", travel: "Approx. 50 km to Paro · flight about 25 min, subject to availability" },
        { date: "26 Nov", plan: "Bumthang festival and birthday day", overnight: "Bumthang", hotel: "samyae", travel: "No major transfer planned" },
        { date: "27 Nov", plan: "Bumthang → Paro by flight, then road to Punakha via Dochula", overnight: "Punakha", hotel: "meriPuensum", travel: "Flight plus approx. 125 km · 4–5h by road" },
        { date: "28 Nov", plan: "Punakha → Phobjikha; Punakha Dzong and valley experience", overnight: "Phobjikha", hotel: "phobjikhaResort", travel: "Approx. 80 km · 3–3.5h by road" },
        { date: "29 Nov", plan: "Phobjikha → Paro and Paro sightseeing", overnight: "Paro", hotel: "spiritOfHome", travel: "Approx. 160 km · 5–6h by road" },
        { date: "30 Nov", plan: "Tiger’s Nest hike", overnight: "Paro", hotel: "spiritOfHome", travel: "Local transfer · 6 km hike" },
        { date: "1 Dec", plan: "Departure from Paro", overnight: "No hotel", hotel: null, travel: "Approx. 10 km to airport" }
      ],
      price: {
        basis: "23 Nov–1 Dec · 8 hotel nights",
        quote: "2 travellers: USD 4,620 total · USD 2,310 per person; 4 travellers: USD 8,400 total · USD 2,100 per person",
        total: "USD 4,620 for 2 travellers · USD 8,400 for 4 travellers",
        sdf: "Included · USD 1,600 for 2 / USD 3,200 for 4 (USD 100 × 8 nights)",
        visa: "Included · USD 80 for 2 / USD 160 for 4 (USD 40 per adult)",
        note: "SDF, GST and visa are included. Bangkok–Paro and Paro–Bumthang flight references are listed separately in the proposal; revised-route inclusions still need reconfirmation."
      },
      dayShape: [
        { label: "Paro arrival", duration: "1 day", dates: "23 Nov · 09:35", span: 1, tone: "arrival", row: 1 },
        { label: "Thimphu", duration: "1 day", dates: "24 Nov", span: 1, tone: "arrival", row: 1 },
        { label: "Bumthang festival + birthday", duration: "2 days", dates: "25–26 Nov", span: 2, tone: "anchor", row: 1 },
        { label: "Punakha + Phobjikha", duration: "2 days", dates: "27–28 Nov", span: 2, tone: "west", row: 1 },
        { label: "Paro + Tiger’s Nest", duration: "2 days", dates: "29–30 Nov", span: 2, tone: "arrival", row: 2 },
        { label: "Departure", duration: "1 day", dates: "1 Dec · 16:20", span: 1, tone: "departure", row: 2 }
      ],
      anchorTiming: "Arrive 25 Nov by domestic flight; birthday in Bumthang on 26 Nov",
      anchorNights: "2 nights",
      stay: "Five bases across eight nights: two Thimphu, two Bumthang, one Punakha, one Phobjikha and two Paro. The number of bases is manageable; the flight-plus-road day after the birthday is the sharper issue.",
      birthday: "The proposal keeps 26 November in Bumthang for a festival day with cake and wine. It calls the event Jambay Lhakhang Drup, but the tentative 2026 calendar separates Jambay Lhakhang Drup (26–29 October), Jambay Lhakhang Singye Cham (24 November) and Nalakhar Tshechu (24–26 November). The operator must name the exact event and reconcile the birthday programme before booking.",
      advantages: [
        "A clear festival-and-birthday day in Bumthang",
        "Domestic flight avoids the full overland journey into Central Bhutan",
        "Adds Punakha, Phobjikha and Paro after the anchor day"
      ],
      tradeoffs: [
        "Festival dates in the proposal do not match the current calendar wording",
        "27 November combines a domestic flight with a 4–5 hour road transfer",
        "29 November is another long road day before Paro"
      ],
      road: "Planning estimate · about 15–18 road hours, plus two domestic flight segments",
      flight: "Paro → Bumthang and Bumthang → Paro are proposed; availability, fare and road fallback require confirmation",
      suited: "Travellers who want the festival, then a broader western Bhutan loop.",
      giveUp: "A longer, calmer Bumthang festival window and a simpler day after the birthday.",
      places: [
        ["National Institute for Zorig Chusum", "Thimphu", "A useful place to see how traditional skills are taught and carried into modern livelihoods.", "https://bhutan.travel/adventure_art"],
        ["Jambay Lhakhang", "Bumthang", "A sacred site at the centre of the festival question. Jambay Lhakhang Singye Cham is listed for 24 November 2026, but the date is tentative and access needs reconfirmation.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Nalakhar Tshechu", "Bumthang", "Listed for 24–26 November 2026 at Ngaa Lhakhang. It may be the more useful festival window if arrival is after 24 November; dates and access remain tentative.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Chumey weaving", "Bumthang", "A possible route into textiles, local knowledge and livelihood, provided a real host can be arranged.", "https://bhutan.travel/adventure_art"]
      ]
    },
    {
      id: "B",
      proposal: "Proposal 2",
      operator: "Bhutan Mystical Tours & Adventures · Company #4",
      source: "Personal proposal · 9 days / 8 hotel nights",
      name: "Hold Bumthang for the festival window",
      subtitle: "Three Bumthang nights, then a shorter western continuation",
      image: "phobjikha",
      birthdayLocation: "Bumthang",
      visibleSummary: "Arrive in Bumthang by 24 November, keep the festival and birthday there, then continue west.",
      core: "This proposal reaches Bumthang one day earlier and keeps three nights there, covering both the festival window and the birthday before moving west. It is more festival-centred than Proposal 1, but it introduces an additional hotel move and depends heavily on a 24 November domestic flight if the group wants to avoid a 9–10 hour road transfer.",
      duration: "9 days · 23 Nov–1 Dec",
      route: "Paro → Thimphu → Bumthang → Phobjikha → Punakha → Thimphu → Paro",
      days: [
        { date: "23 Nov", plan: "Arrive Paro → Thimphu", overnight: "Thimphu", hotel: "namgay", travel: "Approx. 50 km · 1.5–2h by road" },
        { date: "24 Nov", plan: "Thimphu → Bumthang via Punakha; arrive for festival window", overnight: "Bumthang", hotel: "ugyenLing", travel: "Approx. 9–10h by road, or domestic flight about 35 min if available" },
        { date: "25 Nov", plan: "Nalakhar Tshechu; Kurjey and Jambay Lhakhang", overnight: "Bumthang", hotel: "ugyenLing", travel: "Festival and local transfers" },
        { date: "26 Nov", plan: "Festival finale, farmhouse visit and birthday dinner with the host family", overnight: "Bumthang", hotel: "ugyenLing", travel: "No major transfer planned" },
        { date: "27 Nov", plan: "Bumthang → Phobjikha Valley", overnight: "Phobjikha", hotel: "dewachen", travel: "Substantial mountain-road transfer; duration to be confirmed" },
        { date: "28 Nov", plan: "Phobjikha → Punakha; Dzong, village and farmhouse", overnight: "Punakha", hotel: "meriPuensum", travel: "Mountain road; duration to be confirmed" },
        { date: "29 Nov", plan: "Punakha → Thimphu; GNH, sustainability and craft-centre visit", overnight: "Thimphu", hotel: "namgay", travel: "Mountain road; duration to be confirmed" },
        { date: "30 Nov", plan: "Thimphu → Paro; relaxed final evening", overnight: "Paro", hotel: "tenzinling", travel: "Approx. 50 km · 1.5–2h by road" },
        { date: "1 Dec", plan: "Departure from Paro", overnight: "No hotel", hotel: null, travel: "Airport transfer" }
      ],
      price: {
        basis: "23 Nov–1 Dec · 8 hotel nights stated in the itinerary",
        quote: "3 travellers: USD 159 per person; fourth traveller: USD 137 per person",
        total: "No complete total supplied",
        sdf: "Baseline only · USD 2,400 for 3 / USD 3,200 for 4 (USD 100 × 8 nights); inclusion is not stated",
        visa: "Baseline only · USD 120 for 3 / USD 160 for 4 (USD 40 per adult); inclusion is not stated",
        note: "Confirm the unit basis (nightly rate or package figure), full total for the final group size, GST, SDF and visa inclusion, domestic-flight price/inclusion, and what accommodation, meals, guide, vehicle and entrance fees cover."
      },
      dayShape: [
        { label: "Paro arrival", duration: "1 day", dates: "23 Nov · 09:35", span: 1, tone: "arrival", row: 1 },
        { label: "Bumthang festival window + birthday", duration: "3 days", dates: "24–26 Nov", span: 3, tone: "anchor", row: 1 },
        { label: "Phobjikha", duration: "1 day", dates: "27 Nov", span: 1, tone: "west", row: 1 },
        { label: "Punakha", duration: "1 day", dates: "28 Nov", span: 1, tone: "west", row: 1 },
        { label: "Thimphu + Paro", duration: "2 days", dates: "29–30 Nov", span: 2, tone: "arrival", row: 2 },
        { label: "Departure", duration: "1 day", dates: "1 Dec · 16:20", span: 1, tone: "departure", row: 2 }
      ],
      anchorTiming: "Arrive 24 Nov; festival window and birthday remain in Bumthang through 26 Nov",
      anchorNights: "3 nights",
      stay: "Five bases across eight nights: two Thimphu, three Bumthang, one Phobjikha, one Punakha and one Paro. The extra Bumthang night buys festival breathing room; the price is one more change of base.",
      birthday: "The proposal keeps 26 November in Bumthang for the festival finale, a farmhouse visit and a birthday dinner with the host family. This is a hosted family meal, not a confirmed homestay; the relationship, privacy and contribution should be clarified.",
      advantages: [
        "Three Bumthang nights cover the festival window more comfortably",
        "Birthday remains in Bumthang without a major transfer",
        "Includes a proposed family dinner and western cultural stops"
      ],
      tradeoffs: [
        "24 November is either a 9–10 hour road day or a flight-dependent day",
        "Five hotel bases fragment the final week more than Proposal 1",
        "The quoted price basis and domestic-flight treatment are unclear"
      ],
      road: "Planning estimate · highest on 24 November if the domestic flight is unavailable",
      flight: "A 24 November Paro → Bumthang flight is the key enabler; published schedules and fares require confirmation",
      suited: "Travellers who want the festival window and hosted birthday to lead the journey.",
      giveUp: "A simpler hotel rhythm and certainty about the transfer into Bumthang.",
      places: [
        ["National Institute for Zorig Chusum", "Thimphu", "A useful place to see how traditional skills are taught and carried into modern livelihoods.", "https://bhutan.travel/adventure_art"],
        ["Jambay Lhakhang", "Bumthang", "A sacred site at the centre of the festival question. Its listed 24 November 2026 date remains tentative and needs reconfirmation.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Black-necked Crane Education Centre", "Phobjikha", "An introduction to cranes, habitat, local culture and the practical work of conservation. Sightings remain wild and unguaranteed.", "https://rspnbhutan.org/programs-projects/species-and-habitats/black-necked-crane/"],
        ["Community-based sustainable tourism", "Phobjikha", "RSPN documents links between conservation, tourism and local livelihoods. A meeting is not automatic; ask for a named host.", "https://rspnbhutan.org/cbst-website-of-phobjikha-launched/"],
        ["Punakha Valley", "Punakha", "A valley where farms, food, sacred places and everyday movement can sit in the same day.", "https://bhutan.travel/"],
        ["Tiger’s Nest", "Paro", "Taktsang adds a physically demanding but culturally important final day; weather, trail conditions and guide timing need confirmation.", "https://bhutan.travel/"]
      ]
    }
  ];

  const BIRTHDAYS = [
    { title: "Jambay Lhakhang Singye Cham", subtitle: "24 November · one-day festival window", image: "jambay", text: "A specific sacred event at Jambay Lhakhang. Reaching it would require the 24 November Paro–Bumthang flight and programme timing that still needs confirmation. The birthday itself would then be a separate, quieter Bumthang day.", route: "Festival choice 1" },
    { title: "Nalakhar Tshechu", subtitle: "24–26 November · overlaps the birthday", image: "nalakhar", text: "The listed three-day window at Ngaa Lhakhang overlaps 26 November, which makes it the more forgiving festival choice. The exact programme and visitor access still need confirmation before attendance is treated as part of the itinerary.", route: "Festival choice 2" }
  ];

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  }

  function locationMarkup(value) {
    let html = escapeHTML(value);
    LOCATION_TOKENS.forEach(([label, className]) => {
      html = html.replace(new RegExp(`\\b${label}\\b`, "g"), `<span class="place-name ${className}">${label}</span>`);
    });
    return html;
  }

  function imageFigure(key, className, loading = "lazy") {
    const image = IMAGE_DATA[key];
    return `<figure class="${className}"><img src="${image.src}" alt="${escapeHTML(image.alt)}" width="1200" height="800" loading="${loading}"><figcaption>Photo: <a href="${image.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(image.credit)}</a></figcaption></figure>`;
  }

  function hotelLinksMarkup(key) {
    if (!key) return `<span class="hotel-none">No hotel · departure day</span>`;
    const hotel = HOTEL_DATA[key];
    return `<div class="hotel-name"><strong>${escapeHTML(hotel.name)}</strong><small>${locationMarkup(hotel.location)}</small></div>
      <div class="hotel-links"><a href="${escapeHTML(hotel.official)}" target="_blank" rel="noopener noreferrer">Hotel / directory</a><a href="${escapeHTML(hotel.reviews)}" target="_blank" rel="noopener noreferrer">Read reviews</a></div>
      <small class="hotel-note">${escapeHTML(hotel.note)}</small>`;
  }

  function dayShapeMarkup(route) {
    const rows = [1, 2].map((row) => {
      const segments = route.dayShape.filter((segment) => segment.row === row);
      if (!segments.length) return "";
      const total = segments.reduce((sum, segment) => sum + segment.span, 0);
      return `<div class="day-track-row" style="--day-total:${total}">${segments.map((segment) => `<div class="day-segment day-segment-${escapeHTML(segment.tone)}" style="--day-span:${segment.span}"><strong>${escapeHTML(segment.label)}</strong><div class="day-segment-meta"><span>${escapeHTML(segment.duration)}</span><small>${escapeHTML(segment.dates)}</small></div></div>`).join("")}</div>`;
    }).join("");
    return `<div class="route-duration-card"><span>Trip shape</span><strong>${escapeHTML(route.duration)}</strong><div class="day-track" aria-label="Trip shape for ${escapeHTML(route.operator)}">${rows}</div></div>`;
  }

  function routeCard(route) {
    return `<article class="route-card route-card-${route.id.toLowerCase()}" data-route-card="${route.id}">
      ${imageFigure(route.image, "route-image")}
      <div class="route-card-body">
        <div class="route-card-heading"><span class="option-label">${escapeHTML(route.proposal)}</span><span class="route-birthday-label">11/26 · ${locationMarkup(route.birthdayLocation)}</span></div>
        <h3>${escapeHTML(route.name)}</h3>
        <p class="route-subtitle">${escapeHTML(route.subtitle)}</p>
        <p class="route-operator-line"><strong>${escapeHTML(route.operator)}</strong><span>${escapeHTML(route.source)}</span></p>
        <p class="route-anchor-note"><strong>Bumthang is the anchor.</strong> ${locationMarkup(route.visibleSummary)}</p>
        ${dayShapeMarkup(route)}
        <dl class="route-meta route-meta-compact">
          <div><dt>Dates</dt><dd>${escapeHTML(route.duration)}</dd></div>
          <div><dt>Route</dt><dd>${locationMarkup(route.route)}</dd></div>
          <div><dt>Hotel moves</dt><dd>${route.days.filter((day, index) => index > 0 && day.hotel && day.hotel !== route.days[index - 1].hotel).length}</dd></div>
        </dl>
        <div class="route-points">
          <section class="route-card-block"><h4>What we gain</h4><ul>${route.advantages.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul></section>
          <section class="route-card-block"><h4>What it costs</h4><ul>${route.tradeoffs.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul></section>
        </div>
        <details class="route-details">
          <summary>Open the nine-day source itinerary</summary>
          <div class="route-details-inner">
            <p><strong>26 November:</strong> ${locationMarkup(route.birthday)}</p>
            <ol class="route-day-list">${route.days.map((day) => `<li><strong><span class="route-day-date">${escapeHTML(day.date)} ·</span> <span class="route-day-plan">${locationMarkup(day.plan)}</span></strong><span>${locationMarkup(day.travel)}</span></li>`).join("")}</ol>
            <p><strong>Road burden:</strong> ${locationMarkup(route.road)}</p>
            <p><strong>Domestic flight:</strong> ${locationMarkup(route.flight)}</p>
            <p><strong>Best suited to:</strong> ${escapeHTML(route.suited)}</p>
            <p><strong>What we give up:</strong> ${locationMarkup(route.giveUp)}</p>
          </div>
        </details>
        <div class="route-card-footer"><button class="button button-dark choice-button" type="button" data-choice="${route.id}" aria-pressed="false">This is my favourite</button></div>
      </div>
    </article>`;
  }

  function renderRouteComparison() {
    const target = document.getElementById("route-comparison");
    if (!target) return;
    target.innerHTML = `<table class="comparison-table route-comparison-table">
      <caption>What the two detailed proposals actually do differently</caption>
      <thead><tr><th scope="col">Question</th>${ROUTES.map((route) => `<th scope="col"><span class="option-label">${escapeHTML(route.proposal)}</span><strong>${escapeHTML(route.operator)}</strong></th>`).join("")}</tr></thead>
      <tbody>
        <tr><th scope="row">Shape of the trip</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>${escapeHTML(route.name)}</strong><span>${locationMarkup(route.core)}</span></td>`).join("")}</tr>
        <tr><th scope="row">Dates and nights</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>${escapeHTML(route.duration)}</strong><span>${escapeHTML(route.price.basis)}</span></td>`).join("")}</tr>
        <tr><th scope="row">Route</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${locationMarkup(route.route)}</td>`).join("")}</tr>
        <tr><th scope="row">Bumthang timing</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${locationMarkup(route.anchorTiming)}<br><strong>${locationMarkup(route.anchorNights)}</strong></td>`).join("")}</tr>
        <tr><th scope="row">26 November</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>${locationMarkup(route.birthdayLocation)}</strong><span>${locationMarkup(route.birthday)}</span></td>`).join("")}</tr>
        <tr><th scope="row">Main transport burden</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${locationMarkup(route.road)}<br>${locationMarkup(route.flight)}</td>`).join("")}</tr>
        <tr><th scope="row">Hotel rhythm</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${locationMarkup(route.stay)}</td>`).join("")}</tr>
        <tr><th scope="row">The honest trade-off</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>Gain:</strong> ${locationMarkup(route.advantages[0])}<br><strong>Give up:</strong> ${locationMarkup(route.giveUp)}</td>`).join("")}</tr>
      </tbody>
    </table>`;
  }

  function renderProposalPrices() {
    const target = document.getElementById("route-price-table");
    if (!target) return;
    target.innerHTML = `<table class="comparison-table proposal-price-table">
      <caption>Prices copied from the two detailed proposals · USD · not normalised or extrapolated</caption>
      <thead><tr><th scope="col">Price question</th>${ROUTES.map((route) => `<th scope="col"><span class="option-label">${escapeHTML(route.proposal)}</span><strong>${escapeHTML(route.operator)}</strong></th>`).join("")}</tr></thead>
      <tbody>
        <tr class="price-total-row"><th scope="row">Operator-stated total</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>${escapeHTML(route.price.total)}</strong></td>`).join("")}</tr>
        <tr><th scope="row">Stated basis</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${escapeHTML(route.price.basis)}</td>`).join("")}</tr>
        <tr><th scope="row">Quoted price wording</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}"><strong>${escapeHTML(route.price.quote)}</strong></td>`).join("")}</tr>
        <tr><th scope="row">SDF</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${escapeHTML(route.price.sdf)}</td>`).join("")}</tr>
        <tr><th scope="row">Visa fee</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${escapeHTML(route.price.visa)}</td>`).join("")}</tr>
        <tr class="price-clarity-row"><th scope="row">Still missing / needs confirmation</th>${ROUTES.map((route) => `<td data-label="${escapeHTML(route.proposal)}">${escapeHTML(route.price.note)}</td>`).join("")}</tr>
      </tbody>
    </table>`;
  }

  function renderHotelComparison() {
    const target = document.getElementById("hotel-comparison");
    if (!target) return;
    const rows = ROUTES[0].days.map((day, index) => `<tr>
      <th scope="row"><strong>Day ${index + 1}</strong><small>${escapeHTML(day.date)}</small></th>
      ${ROUTES.map((route) => {
        const routeDay = route.days[index];
        return `<td data-label="${escapeHTML(route.proposal)}"><strong>${locationMarkup(routeDay.plan)}</strong><span class="hotel-overnight">Overnight: ${locationMarkup(routeDay.overnight)}</span>${hotelLinksMarkup(routeDay.hotel)}<small class="hotel-travel">${locationMarkup(routeDay.travel)}</small></td>`;
      }).join("")}
    </tr>`).join("");
    target.innerHTML = `<table class="comparison-table hotel-comparison-table">
      <caption>Eight hotel nights across the same 23 November–1 December window. “Or similar” remains part of both proposals.</caption>
      <thead><tr><th scope="col">Day</th>${ROUTES.map((route) => `<th scope="col"><span class="option-label">${escapeHTML(route.proposal)}</span><strong>${escapeHTML(route.operator)}</strong></th>`).join("")}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  }

  function renderRoutes() {
    document.getElementById("route-grid").innerHTML = ROUTES.map(routeCard).join("");
  }

  function renderBirthdays() {
    document.getElementById("birthday-list").innerHTML = BIRTHDAYS.map((birthday) => `<article class="birthday-row">${imageFigure(birthday.image, "birthday-image")}<div><p class="eyebrow">${locationMarkup(birthday.route)}</p><h3>${locationMarkup(birthday.title)} <span>${locationMarkup(birthday.subtitle)}</span></h3><p>${locationMarkup(birthday.text)}</p></div></article>`).join("");
  }

  let choice = { id: "", note: "" };

  function renderChoice() {
    document.querySelectorAll("button[data-choice]").forEach((button) => {
      const selected = button.dataset.choice === choice.id;
      button.setAttribute("aria-pressed", String(selected));
      button.textContent = selected ? "Favourite selected" : "This is my favourite";
      button.closest(".route-card")?.classList.toggle("is-selected", selected);
    });
    const drawer = document.getElementById("choice-drawer");
    if (!choice.id) {
      drawer.hidden = true;
      return;
    }
    const route = ROUTES.find((item) => item.id === choice.id);
    drawer.hidden = false;
    document.getElementById("choice-title").textContent = `Option ${route.id} · ${route.name}`;
    document.getElementById("choice-summary").textContent = `Birthday: ${route.birthdayLocation}. Your note is temporary and stays on this page until you copy it.`;
    document.getElementById("choice-note").value = choice.note;
  }

  function choiceText() {
    const route = ROUTES.find((item) => item.id === choice.id);
    return `My choice: ${route.name}\nBirthday: ${route.birthdayLocation}\nI like it because: ${choice.note.trim() || "I would like to discuss this route first."}`;
  }

  async function copyChoice() {
    const status = document.getElementById("choice-status");
    if (!choice.id) return;
    const text = choiceText();
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Copied. Paste it into the group chat.";
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = text;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
      status.textContent = "Copied. Paste it into the group chat.";
    }
  }

  function setupChoice() {
    document.querySelectorAll("button[data-choice]").forEach((button) => {
      button.onclick = () => {
      choice.id = button.dataset.choice;
      choice.note = "";
      renderChoice();
      document.getElementById("choice-note").focus();
      };
    });
    document.getElementById("choice-note").addEventListener("input", (event) => {
      choice.note = event.target.value;
    });
    document.getElementById("copy-choice").onclick = copyChoice;
    document.getElementById("clear-choice").onclick = () => {
      choice = { id: "", note: "" };
      document.getElementById("choice-status").textContent = "";
      renderChoice();
    };
  }

  function setupCostControls() {
    const quoteButtons = document.querySelectorAll("[data-cost-pax]");
    const quotePanels = document.querySelectorAll("[data-cost-breakdown-panel]");
    const nightsInput = document.getElementById("chargeable-nights");
    const nightsOutput = document.getElementById("chargeable-nights-output");
    const sdfTotal = document.getElementById("sdf-total");
    const sdfFormula = document.getElementById("sdf-formula");
    const mandatoryTotal = document.getElementById("mandatory-total");
    const stepButtons = document.querySelectorAll("[data-night-step]");
    if (!quoteButtons.length || !quotePanels.length || !nightsInput || !nightsOutput || !sdfTotal || !sdfFormula || !mandatoryTotal) return;

    const showQuote = (value) => {
      quoteButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.costPax === value)));
      quotePanels.forEach((panel) => { panel.hidden = panel.dataset.costBreakdownPanel !== value; });
    };
    quoteButtons.forEach((button) => { button.onclick = () => showQuote(button.dataset.costPax); });
    showQuote("4");

    const minNights = Number(nightsInput.min);
    const maxNights = Number(nightsInput.max);
    const updateNights = () => {
      const nights = Number(nightsInput.value);
      const sdf = nights * 100;
      nightsOutput.textContent = `${nights} nights`;
      sdfTotal.textContent = `USD ${sdf.toLocaleString("en-US")}`;
      sdfFormula.textContent = `USD 100 × ${nights} nights`;
      mandatoryTotal.textContent = `USD ${(sdf + 40).toLocaleString("en-US")}`;
      stepButtons.forEach((button) => {
        const step = Number(button.dataset.nightStep);
        button.disabled = (nights <= minNights && step < 0) || (nights >= maxNights && step > 0);
      });
    };
    nightsInput.addEventListener("input", updateNights);
    stepButtons.forEach((button) => {
      button.onclick = () => {
        const step = Number(button.dataset.nightStep);
        const nextNights = Math.min(maxNights, Math.max(minNights, Number(nightsInput.value) + step));
        nightsInput.value = String(nextNights);
        updateNights();
        nightsInput.focus();
      };
    });
    updateNights();
  }

  function setupAccessGate() {
    const gate = document.getElementById("access-gate");
    const shell = document.getElementById("site-shell");
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-password");
    const message = document.getElementById("access-message");
    if (!gate || !shell || !form || !input || !message) return;

    const setAccessCookie = () => {
      const secure = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `${ACCESS_SESSION_KEY}=granted; Max-Age=${ACCESS_COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    };

    const hasAccessCookie = () => document.cookie
      .split(";")
      .some((cookie) => cookie.trim() === `${ACCESS_SESSION_KEY}=granted`);

    const openProposal = () => {
      if (input.value !== ACCESS_PASSWORD) {
        message.hidden = false;
        input.select();
        return;
      }
      try { setAccessCookie(); } catch {}
      try { sessionStorage.setItem(ACCESS_SESSION_KEY, "granted"); } catch {}
      gate.hidden = true;
      shell.hidden = false;
    };

    let cookieGranted = false;
    let sessionGranted = false;
    try { cookieGranted = hasAccessCookie(); } catch {}
    try { sessionGranted = sessionStorage.getItem(ACCESS_SESSION_KEY) === "granted"; } catch {}
    if (cookieGranted || sessionGranted) {
      if (!cookieGranted) {
        try { setAccessCookie(); } catch {}
      }
      gate.hidden = true;
      shell.hidden = false;
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      openProposal();
    });
    input.focus();
  }

  function keepZoomCheckInsideViewport() {
    const sync = () => {
      const value = document.documentElement.style.zoom.trim();
      const factor = value.endsWith("%") ? Number.parseFloat(value) / 100 : Number.parseFloat(value);
      document.body.style.zoom = Number.isFinite(factor) && factor > 1 ? `${100 / factor}%` : "";
    };
    new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    sync();
  }

  setupAccessGate();
  keepZoomCheckInsideViewport();
  if (document.getElementById("route-grid")) {
    renderRouteComparison();
    renderProposalPrices();
    renderHotelComparison();
    renderRoutes();
    renderBirthdays();
    setupChoice();
  }
  setupCostControls();
})();
