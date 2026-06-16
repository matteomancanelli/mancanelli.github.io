// Open external links in a new tab automatically, so prose can use plain
// [text](url) markdown without trailing {:target='_blank'} attributes.
document.addEventListener("DOMContentLoaded", function () {
  var origin = window.location.origin;
  document.querySelectorAll(".page__content a[href^='http']").forEach(function (a) {
    if (a.href.indexOf(origin) !== 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
});

// Masthead hamburger menu: toggle the nav links open/closed on narrow screens.
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".masthead-nav");
  if (!nav) return;
  var toggle = nav.querySelector(".nav-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.classList.toggle("close", open); // morphs the navicon into an X
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu when a link inside it is tapped.
  nav.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.classList.remove("close");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

// Abstract and bibtex boxes are mutually exclusive per publication.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".publinks input[type='checkbox'], .actlinks input[type='checkbox']").forEach(function (cb) {
    cb.addEventListener("change", function () {
      if (!cb.checked) return;
      var id = cb.id;
      var siblingId = id.startsWith("abstract_") ? "bibtex_" + id.slice(9)
                    : id.startsWith("bibtex_")   ? "abstract_" + id.slice(7)
                    : null;
      if (siblingId) {
        var sibling = document.getElementById(siblingId);
        if (sibling) sibling.checked = false;
      }
    });
  });
});

// Add a copy-to-clipboard button to every abstract/bibtex box.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".publinks input[type='checkbox'] + div, .actlinks input[type='checkbox'] + div").forEach(function (box) {
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "Copy to clipboard");
    btn.innerHTML = '<i class="far fa-copy" aria-hidden="true"></i>';
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(box.innerText.replace(/^Copy\b.*\n?/m, "").trim()).then(function () {
        btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
        setTimeout(function () { btn.innerHTML = '<i class="far fa-copy" aria-hidden="true"></i>'; }, 1500);
      });
    });
    box.appendChild(btn);
  });
});

// Add a collapse/expand toggle button to every h2 section in .page__content.
document.addEventListener("DOMContentLoaded", function () {
  var pageContent = document.querySelector(".page__content");
  if (!pageContent) return;

  Array.from(pageContent.querySelectorAll("h2")).forEach(function (h2) {
    // Only handle h2s that are direct children of .page__content.
    if (h2.parentElement !== pageContent) return;

    // Collect all siblings between this h2 and the next sibling h2.
    var siblings = [];
    var next = h2.nextElementSibling;
    while (next && !(next.tagName === "H2" && next.parentElement === pageContent)) {
      siblings.push(next);
      next = next.nextElementSibling;
    }
    if (siblings.length === 0) return;

    // Wrap the siblings in a collapsible container.
    var wrapper = document.createElement("div");
    wrapper.className = "section-content";
    h2.after(wrapper);
    siblings.forEach(function (el) { wrapper.appendChild(el); });

    // Append a toggle button inside the h2 (margin-left: auto pushes it right via flex).
    h2.classList.add("collapsible");
    var btn = document.createElement("button");
    btn.className = "section-toggle";
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Collapse section");
    btn.textContent = "▾";
    btn.addEventListener("click", function () {
      var nowCollapsed = wrapper.classList.toggle("collapsed");
      btn.textContent = nowCollapsed ? "▸" : "▾";
      btn.setAttribute("aria-expanded", String(!nowCollapsed));
      btn.setAttribute("aria-label", nowCollapsed ? "Expand section" : "Collapse section");
    });
    h2.appendChild(btn);
  });
});
