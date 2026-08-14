(() => {
  "use strict";

  const ACCESS_PASSWORD = "261126";
  const ACCESS_SESSION_KEY = "bhutan-2026-access";

  const IMAGE_DATA = {
    festival: {
      src: "assets/images/festival-mask-dance.jpg",
      alt: "A masked dancer performing during a Bhutanese Buddhist festival",
      credit: "Richapandkar via Wikimedia Commons · CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Mesmerizing_colors_and_grace_while_witnessing_this_Traditional_Buddhist_Mask_Dance_at_the_Black-necked_Crane_Festival,_Gangte_Monastery,_Phobjikha_Valley,_Bhutan.jpg"
    },
    phobjikha: {
      src: "assets/images/phobjikha-valley.jpg",
      alt: "The wide Phobjikha Valley with fields and dark mountain ridges",
      credit: "stull17 via Wikimedia Commons · CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Phobjika_Valley_view,_Bhutan.jpg"
    },
    punakha: {
      src: "assets/images/punakha-dzong-wide.jpg",
      alt: "Punakha Dzong between rivers and green valley slopes",
      credit: "Wikimedia Commons contributor",
      url: "https://commons.wikimedia.org/wiki/File:Punakha_Dzong,_Bhutan_02.jpg"
    },
    cranes: {
      src: "assets/images/black-necked-crane.jpg",
      alt: "A black-necked crane standing in the winter grasslands of Phobjikha",
      credit: "Dibyendu Ash via Wikimedia Commons · CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Black-necked_Crane_Phobjika_Bhutan_November_2018.jpg"
    },
    craft: {
      src: "assets/images/craft-sewing.jpg",
      alt: "Students practising traditional sewing in a Bhutanese arts classroom",
      credit: "Arian Zwegers via Wikimedia Commons · CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Thimphu,_traditional_arts,_sewing_class_(15656544270).jpg"
    },
    village: {
      src: "assets/images/ura-village.jpg",
      alt: "Traditional houses in a Bhutanese mountain village",
      credit: "Christopher J. Fynn via Wikimedia Commons · CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Ura_Bumthang_Bhutan-2007-12-28.JPG"
    }
  };

  const ROUTES = [
    {
      id: "A",
      name: "Living Culture",
      subtitle: "Festival, Community & Cultural Immersion",
      image: "festival",
      core: "Travel further into Central Bhutan for Bumthang, living traditions, Buddhist heritage, craft and community life. This is the deepest cultural route, and the most logistically complicated.",
      duration: "9–10 days",
      route: "Paro → Thimphu → Bumthang → Phobjikha → Paro",
      stay: "Two nights Thimphu · three Bumthang · two Phobjikha · two Paro. Treat Punakha as a day stop only if the road day remains sensible.",
      birthday: "A full day in Bumthang: a local cultural or community experience, a relaxed meal and private dinner with friends. Festival participation only if the confirmed programme makes sense. Culture first; cake, if invited, later.",
      advantages: [
        "Deepest exposure to Bhutanese living traditions",
        "Best chance of including the Bumthang festival window",
        "Strong spiritual, craft and community dimension"
      ],
      tradeoffs: [
        "More long-distance movement than the slow route; hotel changes should be kept to a minimum",
        "May benefit from a domestic flight and a road fallback",
        "Less slow time in the western valleys"
      ],
      road: "Highest · about 18–23 estimated road hours",
      flight: "Potential Paro → Bumthang flight; reconfirm before booking",
      suited: "Travellers happy to accept more movement for deeper cultural immersion.",
      giveUp: "Unhurried time, flexibility and probably some budget.",
      places: [
        ["National Institute for Zorig Chusum", "Thimphu", "A useful place to see how traditional skills are taught and carried into modern livelihoods.", "https://bhutan.travel/adventure_art"],
        ["Jambay Lhakhang", "Bumthang", "A sacred site at the centre of the festival question. The 2026 dates are tentative and need reconfirmation.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Chumey weaving", "Bumthang", "A possible route into textiles, local knowledge and livelihood, provided a real host can be arranged.", "https://bhutan.travel/adventure_art"]
      ]
    },
    {
      id: "B",
      name: "Living Landscape",
      subtitle: "Ecology, Community & Wellbeing",
      image: "phobjikha",
      core: "Build the journey around Phobjikha Valley, black-necked cranes, conservation, rural livelihoods and wellbeing. Bumthang can still appear, but Phobjikha is the emotional centre.",
      duration: "8–10 days",
      route: "Paro → Thimphu → Phobjikha → Punakha → Paro; Bumthang optional",
      stay: "Two nights Thimphu · three Phobjikha · two Punakha · two Paro. Add Bumthang only with an extra night or a deliberate cut elsewhere.",
      birthday: "Morning cranes and valley walking; a local or farmhouse lunch; a named community, conservation or landscape experience; then a quiet dinner and perhaps a hot-stone bath if available. The place does most of the decorating.",
      advantages: [
        "Strongest ecology and conservation focus",
        "Excellent fit for birds, wildlife and local livelihoods",
        "Quiet, restorative birthday setting"
      ],
      tradeoffs: [
        "Bumthang → Phobjikha remains a demanding transfer",
        "Festival experience may become shorter or secondary",
        "Community encounters need advance arrangement"
      ],
      road: "Moderate to high · about 15–20 estimated road hours",
      flight: "Potentially useful for Bumthang, but not mandatory; reconfirm before booking",
      suited: "Travellers prioritising nature, birds, conservation, community and wellbeing.",
      giveUp: "Some Bumthang cultural depth and some festival centrality.",
      places: [
        ["Black-necked Crane Education Centre", "Phobjikha", "An introduction to cranes, habitat, local culture and the practical work of conservation. Sightings remain wild and unguaranteed.", "https://rspnbhutan.org/programs-projects/species-and-habitats/black-necked-crane/"],
        ["Community-based sustainable tourism", "Phobjikha", "RSPN documents links between conservation, tourism and local livelihoods. A meeting is not automatic; ask for a named host.", "https://rspnbhutan.org/cbst-website-of-phobjikha-launched/"],
        ["Gangtey Nature Trail", "Phobjikha", "A way to read the valley at walking pace, with farming and habitat sharing the same landscape.", "https://bhutan.travel/"]
      ]
    },
    {
      id: "C",
      name: "Rooted & Slow",
      subtitle: "Craft, Farms, Food & Everyday Bhutan",
      image: "punakha",
      core: "Do not go to Bumthang. Use the time saved for craft, farms, food, villages and ordinary life in Western Bhutan. This is a deliberate choice: depth instead of distance.",
      duration: "7–9 days",
      route: "Paro → Thimphu → Punakha → Phobjikha → Paro",
      stay: "Two nights Thimphu · three Punakha · two Phobjikha · two Paro. For 7–8 days, remove a valley rather than create one-night stops.",
      birthday: "A village or farm experience, local food, perhaps cooking, a little landscape time and a warm private meal with friends. Less scheduled entertainment; more chance of enjoying the actual day.",
      advantages: [
        "Least rushed and fewest major transfers",
        "More room for hands-on craft, farms and community time",
        "Most realistic route near the original 6–7 day idea"
      ],
      tradeoffs: [
        "No Bumthang and no Bumthang festival experience",
        "Less Central Bhutan and less geographic range",
        "The saving is time, not a fuller map"
      ],
      road: "Lowest · about 11–14 estimated road hours",
      flight: "Not required",
      suited: "Travellers who value slow travel, food, crafts, farming, flexibility and less time in vehicles.",
      giveUp: "Bumthang and its festivals. In return, we gain time.",
      places: [
        ["National Institute for Zorig Chusum", "Thimphu", "A useful starting point for asking how craft knowledge is taught. A hands-on session needs separate confirmation.", "https://bhutan.travel/adventure_art"],
        ["Punakha Valley", "Punakha", "A valley where farms, food, sacred places and everyday movement can sit in the same day.", "https://bhutan.travel/"],
        ["Chimi Lhakhang Village Homestay", "Punakha", "A registered homestay listing that describes paddy-farming context, village interaction and traditional cooking. Ask the operator to confirm availability and whether it suits a birthday day.", "https://services.bhutan.travel/search/homestay/chimi-lhakhang-village-homestay"]
      ]
    }
  ];

  const BIRTHDAYS = [
    { title: "Bumthang", subtitle: "Living traditions", image: "festival", text: "Start with a slow morning and a pre-arranged cultural, craft or community visit rather than racing between monuments. The current official 2026 calendar lists Nalakhar Tshechu for 24–26 November and Jambay Lhakhang Singye Cham for 24 November, but both dates are tentative and festival access needs reconfirmation. If the arrangement works, the day can continue with local food, time to wander and a private dinner with friends. Culture first; cake, if invited, later.", route: "Living Culture" },
    { title: "Phobjikha", subtitle: "Quiet landscape", image: "cranes", text: "Begin with a chance to look for wintering black-necked cranes in the valley, and visit the Black-necked Crane Education Centre if open. The wetland is shared with farming and livestock livelihoods, so a named conservation or community conversation could give the landscape some human depth, but it must be arranged and is not an automatic RSPN meeting. Then comes a local or farmhouse lunch, quiet time, dinner and perhaps a hot-stone bath if available. The cranes are wild, which is considerate of them but inconvenient for birthday logistics.", route: "Living Landscape" },
    { title: "Punakha", subtitle: "Around the table", image: "punakha", text: "Begin with a named farm or village host. One real lead to ask about is Chimi Lhakhang Village Homestay, whose official listing describes paddy-farming context, village interaction and traditional cooking; availability and fit for a birthday day still need confirmation. Lunch can become part of the experience rather than a pause between attractions, followed by a little landscape, craft or riverside time and an unhurried evening meal. It is the least theatrical version, which may be exactly why it feels most like a birthday.", route: "Rooted & Slow" }
  ];

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  }

  function imageFigure(key, className, loading = "lazy") {
    const image = IMAGE_DATA[key];
    return `<figure class="${className}"><img src="${image.src}" alt="${escapeHTML(image.alt)}" width="1200" height="800" loading="${loading}"><figcaption>Photo: <a href="${image.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(image.credit)}</a></figcaption></figure>`;
  }

  function routeCard(route) {
    const birthdayLocation = route.id === "A" ? "Bumthang" : route.id === "B" ? "Phobjikha" : "Punakha";
    return `<article class="route-card route-card-${route.id.toLowerCase()}" data-route-card="${route.id}">
      ${imageFigure(route.image, "route-image")}
      <div class="route-card-body">
        <div class="route-card-heading"><span class="option-label">Option ${route.id}</span><span class="route-birthday-label">11/26 · ${escapeHTML(birthdayLocation)}</span></div>
        <h3>${escapeHTML(route.name)}</h3>
        <p class="route-subtitle">${escapeHTML(route.subtitle)}</p>
        <section class="route-card-block route-core"><h4>Core idea</h4><p>${escapeHTML(route.core)}</p></section>
        <dl class="route-meta">
          <div><dt>Suggested duration</dt><dd>${escapeHTML(route.duration)}</dd></div>
          <div><dt>Route</dt><dd>${escapeHTML(route.route)}</dd></div>
        </dl>
        <div class="route-points">
          <section class="route-card-block"><h4>What we gain</h4><ul>${route.advantages.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul></section>
          <section class="route-card-block"><h4>What it costs</h4><ul>${route.tradeoffs.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul></section>
        </div>
        <details class="route-details">
          <summary>See birthday, transport and places</summary>
          <div class="route-details-inner">
            <section class="route-card-block route-birthday"><h4>11/26 birthday</h4><p>${escapeHTML(route.birthday)}</p></section>
            <section class="route-card-block route-stay"><h4>Stay rhythm</h4><p>${escapeHTML(route.stay)}</p></section>
            <dl class="route-logistics route-card-block">
              <div><dt>Road burden</dt><dd>${escapeHTML(route.road)}</dd></div>
              <div><dt>Domestic flight</dt><dd>${escapeHTML(route.flight)}</dd></div>
            </dl>
            <section class="route-card-block route-suited"><h4>Best suited to</h4><p>${escapeHTML(route.suited)}</p></section>
            <section class="route-card-block route-give-up"><h4>What we give up</h4><p>${escapeHTML(route.giveUp)}</p></section>
            <section class="route-card-block route-places"><h4>Places along this route</h4><ul>${route.places.map(([name, location, description, url]) => `<li><strong>${escapeHTML(name)}</strong><span>${escapeHTML(location)}</span><p>${escapeHTML(description)}</p><a class="text-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">Learn more</a></li>`).join("")}</ul></section>
          </div>
        </details>
        <div class="route-card-footer"><button class="button button-dark choice-button" type="button" data-choice="${route.id}" aria-pressed="false">This is my favourite</button></div>
      </div>
    </article>`;
  }

  function renderRoutes() {
    document.getElementById("route-grid").innerHTML = ROUTES.map(routeCard).join("");
  }

  function renderBirthdays() {
    document.getElementById("birthday-list").innerHTML = BIRTHDAYS.map((birthday) => `<article class="birthday-row">${imageFigure(birthday.image, "birthday-image")}<div><p class="eyebrow">${escapeHTML(birthday.route)}</p><h3>${escapeHTML(birthday.title)} <span>${escapeHTML(birthday.subtitle)}</span></h3><p>${escapeHTML(birthday.text)}</p></div></article>`).join("");
  }

  let choice = { id: "", note: "" };

  function renderChoice() {
    document.querySelectorAll("[data-choice]").forEach((button) => {
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
    document.getElementById("choice-summary").textContent = `Birthday: ${route.id === "A" ? "Bumthang" : route.id === "B" ? "Phobjikha" : "Punakha"}. Your note is temporary and stays on this page until you copy it.`;
    document.getElementById("choice-note").value = choice.note;
  }

  function choiceText() {
    const route = ROUTES.find((item) => item.id === choice.id);
    const birthday = choice.id === "A" ? "Bumthang" : choice.id === "B" ? "Phobjikha" : "Punakha";
    return `My choice: ${route.name}\nBirthday: ${birthday}\nI like it because: ${choice.note.trim() || "I would like to discuss this route first."}`;
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
    document.querySelectorAll("[data-choice]").forEach((button) => {
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
    quoteButtons.forEach((button) => button.addEventListener("click", () => showQuote(button.dataset.costPax)));
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
      button.addEventListener("click", () => {
        const step = Number(button.dataset.nightStep);
        const nextNights = Math.min(maxNights, Math.max(minNights, Number(nightsInput.value) + step));
        nightsInput.value = String(nextNights);
        updateNights();
        nightsInput.focus();
      });
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

    const openProposal = () => {
      if (input.value !== ACCESS_PASSWORD) {
        message.hidden = false;
        input.select();
        return;
      }
      try { sessionStorage.setItem(ACCESS_SESSION_KEY, "granted"); } catch {}
      gate.hidden = true;
      shell.hidden = false;
    };

    try {
      if (sessionStorage.getItem(ACCESS_SESSION_KEY) === "granted") {
        gate.hidden = true;
        shell.hidden = false;
        return;
      }
    } catch {}

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
  renderRoutes();
  renderBirthdays();
  setupChoice();
  setupCostControls();
})();
