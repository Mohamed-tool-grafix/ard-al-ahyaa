/* =========================================
   منصة أرض الأحياء
   Sidebar Version
========================================= */


/* ================= SUPABASE ================= */

const SUPABASE_URL =
  "https://gvehygqxjqucxwussaye.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_0Hxtm1KuZQ7paMyZQwRLQQ_NQ2wRaRX";

let supabaseClient = null;

if (window.supabase) {

  supabaseClient =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

}


/* ================= ELEMENTS ================= */

const loginScreen =
  document.getElementById("loginScreen");

const app =
  document.getElementById("app");

const loginForm =
  document.getElementById("loginForm");

const registerForm =
  document.getElementById("registerForm");

const loginTab =
  document.getElementById("loginTab");

const registerTab =
  document.getElementById("registerTab");

const loginMessage =
  document.getElementById("loginMessage");

const registerMessage =
  document.getElementById("registerMessage");

const logoutBtn =
  document.getElementById("logoutBtn");

const darkModeBtn =
  document.getElementById("darkModeBtn");

const themeIcon =
  document.getElementById("themeIcon");

const themeText =
  document.getElementById("themeText");

const menuBtn =
  document.getElementById("menuBtn");

const sidebar =
  document.getElementById("sidebar");

const studentName =
  document.getElementById("studentName");

const siteSearch =
  document.getElementById("siteSearch");

const searchResults =
  document.getElementById("searchResults");

const year =
  document.getElementById("year");


/* ================= YEAR ================= */

if (year) {
  year.textContent =
    new Date().getFullYear();
}


/* ================= LOGIN TABS ================= */

if (loginTab) {

  loginTab.addEventListener("click", () => {

    loginTab.classList.add("active");

    registerTab.classList.remove("active");

    loginForm.classList.remove("hidden");

    registerForm.classList.add("hidden");

    loginMessage.textContent = "";

    registerMessage.textContent = "";

  });

}


if (registerTab) {

  registerTab.addEventListener("click", () => {

    registerTab.classList.add("active");

    loginTab.classList.remove("active");

    registerForm.classList.remove("hidden");

    loginForm.classList.add("hidden");

    loginMessage.textContent = "";

    registerMessage.textContent = "";

  });

}


/* ================= SHOW APP ================= */

function showApp() {

  loginScreen.classList.add("hidden");

  app.classList.remove("hidden");

}


/* ================= SHOW LOGIN ================= */

function showLogin() {

  app.classList.add("hidden");

  loginScreen.classList.remove("hidden");

}


/* ================= LOGIN ================= */

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async function (event) {

      event.preventDefault();

      if (!supabaseClient) {

        loginMessage.textContent =
          "تعذر الاتصال بخدمة تسجيل الدخول.";

        return;

      }

      const email =
        document
          .getElementById("loginEmail")
          .value
          .trim();

      const password =
        document
          .getElementById("loginPassword")
          .value;

      loginMessage.style.color = "";

      loginMessage.textContent =
        "جاري تسجيل الدخول...";


      const { data, error } =
        await supabaseClient.auth
          .signInWithPassword({
            email,
            password
          });


      if (error) {

        loginMessage.textContent =
          "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

        return;

      }


      setStudentName(
        data.user
      );

      loginMessage.style.color =
        "#087f55";

      loginMessage.textContent =
        "تم تسجيل الدخول بنجاح.";

      showApp();

    }
  );

}


/* ================= REGISTER ================= */

if (registerForm) {

  registerForm.addEventListener(
    "submit",
    async function (event) {

      event.preventDefault();

      if (!supabaseClient) {

        registerMessage.textContent =
          "تعذر الاتصال بخدمة التسجيل.";

        return;

      }

      const name =
        document
          .getElementById("registerName")
          .value
          .trim();

      const email =
        document
          .getElementById("registerEmail")
          .value
          .trim();

      const password =
        document
          .getElementById("registerPassword")
          .value;


      registerMessage.textContent =
        "جاري إنشاء الحساب...";


      const { data, error } =
        await supabaseClient.auth
          .signUp({

            email,

            password,

            options: {
              data: {
                full_name: name
              }
            }

          });


      if (error) {

        registerMessage.textContent =
          error.message;

        return;

      }


      registerMessage.style.color =
        "#087f55";


      if (data.session) {

        setStudentName(data.user);

        registerMessage.textContent =
          "تم إنشاء الحساب.";

        showApp();

      } else {

        registerMessage.textContent =
          "تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا طلب منك ذلك.";

      }

    }
  );

}


/* ================= STUDENT NAME ================= */

function setStudentName(user) {

  if (!studentName || !user) {
    return;
  }

  const name =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "الطالب";

  studentName.textContent =
    name;

}


/* ================= LOGOUT ================= */

if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    async function () {

      if (supabaseClient) {
        await supabaseClient.auth.signOut();
      }

      showLogin();

    }
  );

}


/* ================= SESSION ================= */

async function checkUser() {

  if (!supabaseClient) {

    showLogin();

    return;

  }


  const {
    data: {
      session
    }
  } =
    await supabaseClient.auth.getSession();


  if (session) {

    setStudentName(session.user);

    showApp();

  } else {

    showLogin();

  }

}


/* ================= AUTH STATE ================= */

if (supabaseClient) {

  supabaseClient.auth.onAuthStateChange(
    function (event, session) {

      if (session) {

        setStudentName(session.user);

        showApp();

      } else {

        showLogin();

      }

    }
  );

}


/* ================= DARK MODE ================= */

function setDarkMode(enabled) {

  if (enabled) {

    document.body.classList.add("dark");

    if (themeIcon) {
      themeIcon.textContent = "☀️";
    }

    if (themeText) {
      themeText.textContent =
        "الوضع النهاري";
    }

    localStorage.setItem(
      "ardAlAhyaaDark",
      "true"
    );

  } else {

    document.body.classList.remove("dark");

    if (themeIcon) {
      themeIcon.textContent = "🌙";
    }

    if (themeText) {
      themeText.textContent =
        "الوضع الليلي";
    }

    localStorage.setItem(
      "ardAlAhyaaDark",
      "false"
    );

  }

}


if (
  localStorage.getItem("ardAlAhyaaDark")
  === "true"
) {

  setDarkMode(true);

} else {

  setDarkMode(false);

}


if (darkModeBtn) {

  darkModeBtn.addEventListener(
    "click",
    function () {

      const enabled =
        document.body.classList
          .contains("dark");

      setDarkMode(!enabled);

    }
  );

}


/* ================= MOBILE SIDEBAR ================= */

if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    function () {

      sidebar.classList.toggle("open");

    }
  );

}


/* إغلاق الشريط عند اختيار رابط على الهاتف */

document
  .querySelectorAll(".side-link")
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        if (
          window.innerWidth <= 750
        ) {

          sidebar.classList.remove(
            "open"
          );

        }

      }
    );

  });


/* ================= SEARCH ================= */

const searchData = [

  {
    title: "شرح دروس الأحياء",
    type: "الشرح",
    url: "videos/index.html"
  },

  {
    title: "ملخص منهج الأحياء",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "الدعامة والحركة",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "التنسيق الهرموني",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "التكاثر",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "الوراثة",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "المراجعة النهائية",
    type: "الملخصات",
    url: "notes/index.html"
  },

  {
    title: "اختبارات الأحياء",
    type: "الاختبارات",
    url: "exams/index.html"
  },

  {
    title: "منتدى الطلاب",
    type: "المنتدى",
    url: "forum/index.html"
  }

];


if (siteSearch) {

  siteSearch.addEventListener(
    "input",
    function () {

      const query =
        siteSearch.value
          .trim()
          .toLowerCase();


      if (!query) {

        searchResults.innerHTML = "";

        searchResults.style.display =
          "none";

        return;

      }


      const results =
        searchData.filter(
          function (item) {

            return item.title
              .toLowerCase()
              .includes(query);

          }
        );


      searchResults.innerHTML = "";


      if (results.length === 0) {

        searchResults.innerHTML = `
          <div class="search-result">
            لا توجد نتائج مطابقة.
          </div>
        `;

      } else {

        results.forEach(
          function (item) {

            const result =
              document.createElement("a");

            result.href =
              item.url;

            result.className =
              "search-result";

            result.innerHTML = `
              <strong>${item.title}</strong>
              <small>${item.type}</small>
            `;

            searchResults.appendChild(
              result
            );

          }
        );

      }


      searchResults.style.display =
        "block";

    }
  );

}


/* ================= CLOSE SEARCH ================= */

document.addEventListener(
  "click",
  function (event) {

    if (
      searchResults &&
      siteSearch &&
      !searchResults.contains(
        event.target
      ) &&
      !siteSearch.contains(
        event.target
      )
    ) {

      searchResults.style.display =
        "none";

    }

  }
);


/* ================= START ================= */

checkUser();
