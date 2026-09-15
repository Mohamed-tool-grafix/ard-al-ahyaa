/* =========================================
   أرض الأحياء - JavaScript
========================================= */


/* =========================================
   القائمة الجانبية في الموبايل
========================================= */

function toggleMenu() {

  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");
}


/* إغلاق القائمة عند الضغط على أي رابط */

document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  const menuLinks = sidebar.querySelectorAll("a");

  menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 700) {
        sidebar.classList.remove("open");
      }

    });

  });

});


/* =========================================
   زر الرجوع لأعلى الصفحة
========================================= */

window.addEventListener("scroll", function () {

  const topButton = document.getElementById("topButton");

  if (!topButton) return;

  if (window.scrollY > 300) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }

});


function goTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   البحث في الدروس
========================================= */

function searchLessons() {

  const searchInput =
    document.getElementById("searchInput");

  if (!searchInput) return;

  const searchText =
    searchInput.value.trim().toLowerCase();

  const lessons =
    document.querySelectorAll(".searchable");

  lessons.forEach(function (lesson) {

    const text =
      lesson.innerText.toLowerCase();

    if (text.includes(searchText)) {

      lesson.style.display = "";

    } else {

      lesson.style.display = "none";

    }

  });

}


/* =========================================
   رسالة ترحيب بسيطة
========================================= */

function showWelcome() {

  console.log("مرحبًا بك في منصة أرض الأحياء 🧬");

}


/* =========================================
   تشغيل الموقع
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  showWelcome();

});
