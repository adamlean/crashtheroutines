document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;
  if (lang === "ru") {
    window.location.href = "index.html";
  } else if (lang === "en") {
    window.location.href = "en.html";
  } else if (lang === "es") {
    window.location.href = "es.html";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  if (currentPage.includes("en")) {
    document.getElementById("languageSwitcher").value = "en";
  } else if (currentPage.includes("es")) {
    document.getElementById("languageSwitcher").value = "es";
  } else {
    document.getElementById("languageSwitcher").value = "ru";
  }
});
