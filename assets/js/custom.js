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
