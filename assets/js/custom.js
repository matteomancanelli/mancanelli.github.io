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
