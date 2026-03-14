const bookingUrl = "https://www.booking.com/hotel/gr/honeymoon-beach.en-gb.html?aid=356980&label=gog235jc-10CAsoXEIPaG9uZXltb29uLWJlYWNoSDNYA2hciAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuAK6ytTNBsACAdICJDUzN2M0ZDkwLTM4NGQtNDdkZC05OGNmLTMwOTk1ZjVkOWFjMtgCAeACAQ&sid=f09769e3d402ce6d385bb8b7cfa0ab9f&dest_id=900039567&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1773479237&srpvid=947b401e7e4b0106&type=total&ucfs=1&";
const phoneNumber = "+302286082796";
const isGreekDocument = (document.documentElement.lang || "").toLowerCase().startsWith("el");
const isGreekFolderPage = window.location.pathname.includes("/gr/");

function resolveAssetPath(path) {
  if (/^(https?:|data:|mailto:|tel:|#)/.test(path)) return path;
  const normalizedPath = path.replace(/^\.\//, "");
  return isGreekFolderPage ? `../${normalizedPath}` : normalizedPath;
}

const roomCatalog = {
  "2-bed-maisonette": {
    name: "2 Bed Maisonette",
    shortDescription: "Ideal for couples who want split-level space and easy beach access.",
    category: "Maisonette for 2 guests",
    previewPrice: "From 70€ / night",
    images: [
      "assets/room_photos/2_bed_maisonette/5aee881f_original.jpg",
      "assets/room_photos/2_bed_maisonette/DSC_5895-111211s.jpg",
      "assets/room_photos/2_bed_maisonette/DSC_5908-1111211s.jpg"
    ]
  },
  "3-bed-maisonette": {
    name: "3 Bed Maisonette",
    shortDescription: "A practical and comfortable option for small groups or friends.",
    category: "Maisonette (3 guests)",
    previewPrice: "From 75€ / night",
    images: [
      "assets/room_photos/3_bed_maisonette/DSC_5957-11121s.jpg",
      "assets/room_photos/3_bed_maisonette/DSC_5934-111121s.jpg",
      "assets/room_photos/3_bed_maisonette/DSC_5945-11112121s.jpg"
    ]
  },
  "4-5-bed-maisonette": {
    name: "4-5 Bed Maisonette",
    shortDescription: "Spacious family layout with separate sleeping zones.",
    category: "Maisonette (4-5 guests)",
    previewPrice: "From 100€ / night",
    images: [
      "assets/room_photos/4-5_bed_maisonette/DSC_5533-11121s.jpg",
      "assets/room_photos/4-5_bed_maisonette/DSC_5560-111211s.jpg",
      "assets/room_photos/4-5_bed_maisonette/IMGP6630.jpeg"
    ]
  },
  "suite-2": {
    name: "Suite for 2 People",
    shortDescription: "A bright suite designed for a relaxed Santorini couple getaway.",
    category: "Suite (2 guests)",
    previewPrice: "From 100€ / night",
    images: [
      "assets/room_photos/suite_for_2_people/DSC_8287-1111111s.jpg",
      "assets/room_photos/suite_for_2_people/DSC_8287-1111111s.jpg",
      "assets/room_photos/suite_for_2_people/DSC_8357-11111s.jpg"
    ]
  },
  "suite-2-4": {
    name: "Suite for 2-4 People",
    shortDescription: "A flexible suite ideal for couples, friends, or a small family.",
    category: "Suite (3-4 guests)",
    previewPrice: "From 110€ / night",
    images: [
      "assets/room_photos/suite_for_2-4_people/DSC_8176-11111112111s.jpg",
      "assets/room_photos/suite_for_2-4_people/DSC_8187-1111s.jpg",
      "assets/room_photos/suite_for_2-4_people/DSC_8200-1111111211s.jpg"
    ]
  },
  "3-bed-studio": {
    name: "3 Bed Studio",
    shortDescription: "Simple and airy studio with balcony and kitchenette.",
    category: "Studio Standard (3 guests)",
    previewPrice: "From 75€ / night",
    images: [
      "assets/room_photos/studio_3_bed/DSC_3789-1121s.jpg",
      "assets/room_photos/studio_3_bed/DSC_3633-111211s.jpg",
      "assets/room_photos/studio_3_bed/DSC_3650-11211s.jpg"
    ]
  },
  "4-bed-studio": {
    name: "4 Bed Studio",
    shortDescription: "Comfortable studio setup with room for families and groups.",
    category: "Studio Standard (4 guests)",
    previewPrice: "From 80€ / night",
    images: [
      "assets/room_photos/4_bed_studio/DSC_3831-1121s.jpg",
      "assets/room_photos/4_bed_studio/DSC_3841-1121s.jpg",
      "assets/room_photos/4_bed_studio/DSC_3861-1121s.jpg"
    ]
  },
  "3-bed-room": {
    name: "3 Bed Room",
    shortDescription: "A practical room with essentials for beach-focused holidays.",
    category: "Studio Standard (3 guests)",
    previewPrice: "From 75€ / night",
    images: [
      "assets/room_photos/3_bed_room/DSC_3700-11121s.jpg",
      "assets/room_photos/3_bed_room/DSC_3709-11121s.jpg",
      "assets/room_photos/3_bed_room/DSC_3715-12111s.jpg"
    ]
  }
};

const roomCatalogEl = {
  "2-bed-maisonette": {
    ...roomCatalog["2-bed-maisonette"],
    name: "Μεζονέτα 2 Κλινών",
    shortDescription: "Ιδανική για ζευγάρια που θέλουν άνεση σε δύο επίπεδα κοντά στην παραλία.",
    category: "Μεζονέτα για 2 άτομα",
    previewPrice: "Από 70€ / βράδυ"
  },
  "3-bed-maisonette": {
    ...roomCatalog["3-bed-maisonette"],
    name: "Μεζονέτα 3 Κλινών",
    shortDescription: "Άνετη επιλογή για παρέες ή μικρές οικογένειες.",
    category: "Μεζονέτα (3 άτομα)",
    previewPrice: "Από 75€ / βράδυ"
  },
  "4-5-bed-maisonette": {
    ...roomCatalog["4-5-bed-maisonette"],
    name: "Μεζονέτα 4-5 Κλινών",
    shortDescription: "Ευρύχωρη διάταξη για οικογένειες με ξεκούραστη διαμονή.",
    category: "Μεζονέτα (4-5 άτομα)",
    previewPrice: "Από 100€ / βράδυ"
  },
  "suite-2": {
    ...roomCatalog["suite-2"],
    name: "Σουίτα για 2 Άτομα",
    shortDescription: "Φωτεινή σουίτα για χαλαρωτική διαμονή στη Σαντορίνη.",
    category: "Σουίτα (2 άτομα)",
    previewPrice: "Από 100€ / βράδυ"
  },
  "suite-2-4": {
    ...roomCatalog["suite-2-4"],
    name: "Σουίτα για 2-4 Άτομα",
    shortDescription: "Ευέλικτη σουίτα για ζευγάρια, φίλους και μικρές οικογένειες.",
    category: "Σουίτα (3-4 άτομα)",
    previewPrice: "Από 110€ / βράδυ"
  },
  "3-bed-studio": {
    ...roomCatalog["3-bed-studio"],
    name: "Στούντιο 3 Κλινών",
    shortDescription: "Απλό και άνετο στούντιο με μπαλκόνι και κουζινάκι.",
    category: "Studio Standard (3 άτομα)",
    previewPrice: "Από 75€ / βράδυ"
  },
  "4-bed-studio": {
    ...roomCatalog["4-bed-studio"],
    name: "Στούντιο 4 Κλινών",
    shortDescription: "Άνετο στούντιο με περισσότερο χώρο για οικογένειες.",
    category: "Studio Standard (4 άτομα)",
    previewPrice: "Από 80€ / βράδυ"
  },
  "3-bed-room": {
    ...roomCatalog["3-bed-room"],
    name: "Δωμάτιο 3 Κλινών",
    shortDescription: "Πρακτικό δωμάτιο με όλες τις απαραίτητες παροχές.",
    category: "Studio Standard (3 άτομα)",
    previewPrice: "Από 75€ / βράδυ"
  }
};

const pricingRows = [
  { name: "Studio Standard (2 guests)", values: ["60€", "70€", "100€", "110€"] },
  { name: "Studio Standard (3 guests)", values: ["75€", "80€", "110€", "120€"] },
  { name: "Maisonette (3 guests)", values: ["75€", "80€", "110€", "120€"] },
  { name: "Maisonette for 2 guests", values: ["70€", "75€", "100€", "110€"] },
  { name: "Studio Standard (4 guests)", values: ["80€", "100€", "130€", "140€"] },
  { name: "Maisonette (4-5 guests)", values: ["100€", "120€", "140€", "160€"] },
  { name: "Suite (2 guests)", values: ["100€", "120€", "140€", "140€"] },
  { name: "Suite (3-4 guests)", values: ["110€", "130€", "150€", "160€"] }
];

const pricingRowsEl = [
  { name: "Studio Standard (2 άτομα)", values: ["60€", "70€", "100€", "110€"] },
  { name: "Studio Standard (3 άτομα)", values: ["75€", "80€", "110€", "120€"] },
  { name: "Μεζονέτα (3 άτομα)", values: ["75€", "80€", "110€", "120€"] },
  { name: "Μεζονέτα για 2 άτομα", values: ["70€", "75€", "100€", "110€"] },
  { name: "Studio Standard (4 άτομα)", values: ["80€", "100€", "130€", "140€"] },
  { name: "Μεζονέτα (4-5 άτομα)", values: ["100€", "120€", "140€", "160€"] },
  { name: "Σουίτα (2 άτομα)", values: ["100€", "120€", "140€", "140€"] },
  { name: "Σουίτα (3-4 άτομα)", values: ["110€", "130€", "150€", "160€"] }
];

const seasons = [
  "Season 1: May 10 - May 31 / Sep 26 - Oct 20",
  "Season 2: Jun 1 - Jun 30",
  "Season 3: Jul 1 - Jul 31 / Sep 1 - Sep 25",
  "Season 4: Aug 1 - Aug 31"
];

const seasonsEl = [
  "Περίοδος 1: 10 Μαΐου - 31 Μαΐου / 26 Σεπ - 20 Οκτ",
  "Περίοδος 2: 1 Ιουν - 30 Ιουν",
  "Περίοδος 3: 1 Ιουλ - 31 Ιουλ / 1 Σεπ - 25 Σεπ",
  "Περίοδος 4: 1 Αυγ - 31 Αυγ"
];

const translations = {
  en: {
    navRooms: "Rooms",
    navRestaurant: "Restaurant",
    navLocation: "Location",
    navContact: "Contact",
    navBook: "Book Now",
    stickyBook: "Book Now"
  },
  gr: {
    navRooms: "Δωμάτια",
    navRestaurant: "Εστιατόριο",
    navLocation: "Τοποθεσία",
    navContact: "Επικοινωνία",
    navBook: "Κάντε Κράτηση",
    stickyBook: "Κράτηση"
  }
};

function initMobileNav() {
  const toggle = document.querySelector("[data-mobile-nav-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

function buildPriceTableHtml() {
  const seasonList = isGreekDocument ? seasonsEl : seasons;
  const priceList = isGreekDocument ? pricingRowsEl : pricingRows;
  const roomTypeLabel = isGreekDocument ? "Τύπος Δωματίου" : "Room Type";
  const tableAria = isGreekDocument ? "Πίνακας εποχιακών τιμών" : "Seasonal room pricing";

  const headColumns = seasonList.map((season) => `<th>${season}</th>`).join("");
  const rows = priceList
    .map(
      (row) =>
        `<tr><td><strong>${row.name}</strong></td>${row.values.map((value) => `<td>${value}</td>`).join("")}</tr>`
    )
    .join("");

  return `
    <div class="price-table-wrap">
      <table aria-label="${tableAria}">
        <thead>
          <tr>
            <th>${roomTypeLabel}</th>
            ${headColumns}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

function injectPriceTable() {
  const nodes = document.querySelectorAll("[data-price-table]");
  if (!nodes.length) return;
  const tableHtml = buildPriceTableHtml();
  nodes.forEach((node) => {
    node.innerHTML = tableHtml;
  });
}

function getSelectedLang() {
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  if (queryLang && translations[queryLang]) return queryLang;
  return localStorage.getItem("hbs-lang") || "en";
}

function applyTranslations() {
  const lang = getSelectedLang();
  const dict = translations[lang] || translations.en;
  localStorage.setItem("hbs-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
}

function initRoomTemplatePage() {
  const roomTitle = document.querySelector("[data-room-title]");
  if (!roomTitle) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("room") || "2-bed-maisonette";
  const activeCatalog = isGreekDocument ? roomCatalogEl : roomCatalog;
  const fallbackCatalog = isGreekDocument ? roomCatalogEl["2-bed-maisonette"] : roomCatalog["2-bed-maisonette"];
  const room = activeCatalog[slug] || fallbackCatalog;

  roomTitle.textContent = room.name;
  const summary = document.querySelector("[data-room-summary]");
  const category = document.querySelector("[data-room-category]");
  const previewPrice = document.querySelector("[data-room-price]");

  if (summary) summary.textContent = room.shortDescription;
  if (category) category.textContent = room.category;
  if (previewPrice) previewPrice.textContent = room.previewPrice;

  const sliderNode = document.querySelector("[data-room-slider]");
  if (sliderNode) {
    const roomImages = room.images?.length ? room.images : ["assets/hero/hero-01.jpg"];
    sliderNode.innerHTML = roomImages
      .map(
        (imageSrc, index) =>
          `<div class="slide ${index === 0 ? "active" : ""}"><img src="${resolveAssetPath(imageSrc)}" alt="${room.name} photo ${index + 1}" loading="lazy" /></div>`
      )
      .join("");
  }

  document.querySelectorAll("[data-booking-link]").forEach((link) => {
    link.setAttribute("href", bookingUrl);
  });

  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;
  let current = 0;

  function paintSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === current);
    });
  }

  document.querySelector("[data-slide-prev]")?.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    paintSlides();
  });

  document.querySelector("[data-slide-next]")?.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    paintSlides();
  });

  paintSlides();
}

function initHeroSlideshow() {
  const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
  if (heroSlides.length < 2) return;

  let currentIndex = 0;

  function showSlide(nextIndex) {
    heroSlides[currentIndex].classList.remove("active");
    currentIndex = nextIndex;
    heroSlides[currentIndex].classList.add("active");
  }

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % heroSlides.length;
    showSlide(nextIndex);
  }, 8000);
}

function initBookingAndCallCtas() {
  document.querySelectorAll("[data-booking-link]").forEach((link) => {
    link.setAttribute("href", bookingUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.setAttribute("href", `tel:${phoneNumber}`);
  });
}

function initYear() {
  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
}

function initLangSwitcher() {
  const enLinks = document.querySelectorAll("[data-lang-en]");
  const grLinks = document.querySelectorAll("[data-lang-gr]");
  if (!enLinks.length && !grLinks.length) return;

  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  const lastSegment = parts[parts.length - 1] || "";
  const pageFile = lastSegment.endsWith(".html") ? lastSegment : "index.html";
  const suffix = `${window.location.search}${window.location.hash}`;

  const enTarget = `${isGreekFolderPage ? "../" : ""}${pageFile}${suffix}`;
  const grTarget = `${isGreekFolderPage ? "" : "gr/"}${pageFile}${suffix}`;
  const isGreekLanguage = (document.documentElement.lang || "").toLowerCase().startsWith("el");

  enLinks.forEach((link) => {
    link.setAttribute("href", enTarget);
    link.classList.toggle("active", !isGreekLanguage);
  });

  grLinks.forEach((link) => {
    link.setAttribute("href", grTarget);
    link.classList.toggle("active", isGreekLanguage);
  });
}

function init() {
  initMobileNav();
  initReveal();
  initHeroSlideshow();
  initLangSwitcher();
  injectPriceTable();
  applyTranslations();
  initRoomTemplatePage();
  initBookingAndCallCtas();
  initYear();
}

document.addEventListener("DOMContentLoaded", init);
