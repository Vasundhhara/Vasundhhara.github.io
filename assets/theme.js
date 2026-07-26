(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var theme = saved || "light";
  document.documentElement.setAttribute("data-theme", theme);
  window.toggleTheme = function () {
    var t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    updateIcon(t);
  };
  function updateIcon(t) {
    document.querySelectorAll(".theme-btn").forEach(function (b) {
      b.textContent = t === "dark" ? "☀" : "☾";
    });
  }
  document.addEventListener("DOMContentLoaded", function () { updateIcon(theme); });
})();

window.toggleNav = function () {
  var l = document.querySelector(".nav-links");
  if (l) l.classList.toggle("open");
};
document.addEventListener("click", function (e) {
  var l = document.querySelector(".nav-links");
  if (!l || !l.classList.contains("open")) return;
  if (e.target.closest(".nav-links a")) l.classList.remove("open");
});
