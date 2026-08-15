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

  const ROUTES = [
    {
      id: "A",
      name: "Bumthang-led",
      subtitle: "Festival First",
      image: "jambay",
      birthdayLocation: "Bumthang",
      core: "Reach Bumthang as early as the transport plan sensibly allows, then let the festival window, monasteries, craft and local life set the pace. The trip stays mostly in Central Bhutan, with a birthday that is actually in the place we came to see.",
      duration: "7–9 days",
      route: "Paro → Thimphu → Bumthang → Paro",
      stay: "Two nights Thimphu · three or four Bumthang · one Paro. Keep the overnight pattern simple; the roads already provide enough plot.",
      birthday: "A full Bumthang day on 26 November: festival or local cultural life if access and timing are confirmed, a relaxed meal, some unprogrammed time and a private dinner. A cake may appear; it need not be the itinerary.",
      advantages: [
        "Festival is the centre, not a side quest",
        "More time for Bumthang’s spiritual, craft and community life",
        "Fewer western transfers after the birthday"
      ],
      tradeoffs: [
        "Less Phobjikha, Punakha and Paro depth",
        "Arrival timing matters if Jambay’s 24 November date is the priority",
        "Domestic flight and road fallback need coordination"
      ],
      road: "Moderate to high · Central Bhutan roads still do the talking",
      flight: "Potential Paro → Bumthang flight; schedule and road fallback require reconfirmation",
      suited: "Travellers who would rather stay with the festival than collect more valleys.",
      giveUp: "Western Bhutan variety, some wildlife time and the neatness of a broader loop.",
      places: [
        ["National Institute for Zorig Chusum", "Thimphu", "A useful place to see how traditional skills are taught and carried into modern livelihoods.", "https://bhutan.travel/adventure_art"],
        ["Jambay Lhakhang", "Bumthang", "A sacred site at the centre of the festival question. Jambay Lhakhang Singye Cham is listed for 24 November 2026, but the date is tentative and access needs reconfirmation.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Nalakhar Tshechu", "Bumthang", "Listed for 24–26 November 2026 at Ngaa Lhakhang. It may be the more useful festival window if arrival is after 24 November; dates and access remain tentative.", "https://a.storyblok.com/f/171618/x/421b8ac6a3/tentative_festival_dates_2026.pdf"],
        ["Chumey weaving", "Bumthang", "A possible route into textiles, local knowledge and livelihood, provided a real host can be arranged.", "https://bhutan.travel/adventure_art"]
      ]
    },
    {
      id: "B",
      name: "Hybrid Bhutan",
      subtitle: "Festival + Western Bhutan",
      image: "phobjikha",
      birthdayLocation: "Bumthang",
      core: "Make Bumthang the first emotional centre, then continue west for Phobjikha, Punakha and Paro. It gives the trip more landscape, birds, food and variety, but the road and hotel changes return after the festival. Mountains remain stubbornly three-dimensional.",
      duration: "9–10 days",
      route: "Paro → Thimphu → Bumthang → Phobjikha → Punakha → Paro",
      stay: "Two nights Thimphu · three Bumthang · two Phobjikha or Punakha · one or two Paro. Confirm the order before adding every valley.",
      birthday: "Keep 26 November in Bumthang too: festival or a quieter local day depending on the confirmed programme. Continue west only after the birthday, so the added landscapes do not eat the main reason for coming.",
      advantages: [
        "Festival plus Phobjikha, Punakha and Paro",
        "More nature, food and landscape after the birthday",
        "Closest to the full Central + Western Bhutan picture"
      ],
      tradeoffs: [
        "Longest route and more hotel changes",
        "Bumthang → western Bhutan needs a realistic transfer plan",
        "Higher cost and more opportunities for the schedule to wobble"
      ],
      road: "Highest · the Central-to-Western transfer is the price of the encore",
      flight: "Potential Paro → Bumthang flight can help; never treat it as guaranteed",
      suited: "Travellers who want the festival first, then a wider Bhutan journey.",
      giveUp: "Some unhurried Bumthang time, flexibility and probably some budget.",
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
    { title: "Jambay Lhakhang Singye Cham", subtitle: "24 November · one-day festival window", image: "jambay", text: "A specific sacred event at Jambay Lhakhang. This is the tighter arrival choice: the group needs to be in Bumthang in time for the 24 November programme, then shape 26 November as a quieter birthday day with local food and a private dinner.", route: "Festival choice 1" },
    { title: "Nalakhar Tshechu", subtitle: "24–26 November · the birthday inside the festival", image: "nalakhar", text: "A three-day village tshechu at Ngaa Lhakhang, where local families and visitors gather in their finest dress for sacred dances, prayers and a shared valley occasion. Because it runs through 26 November, the birthday can sit inside Bumthang’s celebration rather than arrive after it — with time for a proper meal and a private toast around the confirmed programme.", route: "Festival choice 2" }
  ];

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  }

  function imageFigure(key, className, loading = "lazy") {
    const image = IMAGE_DATA[key];
    return `<figure class="${className}"><img src="${image.src}" alt="${escapeHTML(image.alt)}" width="1200" height="800" loading="${loading}"><figcaption>Photo: <a href="${image.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(image.credit)}</a></figcaption></figure>`;
  }

  function routeCard(route) {
    const birthdayLocation = route.birthdayLocation;
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
    renderRoutes();
    renderBirthdays();
    setupChoice();
  }
  setupCostControls();
})();
