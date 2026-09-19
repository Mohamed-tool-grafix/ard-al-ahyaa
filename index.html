/* =====================================================
   منصة أرض الأحياء
   النسخة القديمة - بدون Sidebar
===================================================== */


/* ================= SUPABASE ================= */

const SUPABASE_URL =
  "https://gvehygqxjqucxwussaye.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_0Hxtm1KuZQ7paMyZQwRLQQ_NQ2wRaRX";

let supabaseClient = null;

if (window.supabase) {
  supabaseClient = window.supabase.createClient(
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

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileNav =
  document.getElementById("mobileNav");

const siteSearch =
  document.getElementById("siteSearch");

const searchResults =
  document.getElementById("searchResults");

const year =
  document.getElementById("year");


/* ================= YEAR ================= */

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ================= LOGIN / REGISTER TABS ================= */

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

  if (loginScreen) {
    loginScreen.classList.add("hidden");
  }

  if (app) {
    app.classList.remove("hidden");
  }

}


/* ================= SHOW LOGIN ================= */

function showLogin() {

  if (app) {
    app.classList.add("hidden");
  }

  if (loginScreen) {
    loginScreen.classList.remove("hidden");
  }

}


/* ================= LOGIN ================= */

if (loginForm) {

  loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    if (!supabaseClient) {
      loginMessage.textContent =
        "تعذر الاتصال بخدمة تسجيل الدخول.";
      return;
    }

    const email =
      document.getElementById("loginEmail").value.trim();

    const password =
      document.getElementById("loginPassword").value;

    loginMessage.style.color = "";
    loginMessage.textContent =
      "جاري تسجيل الدخول...";

    const { error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {

      loginMessage.textContent =
        "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

      return;
    }

    loginMessage.style.color = "#087f55";

    loginMessage.textContent =
      "تم تسجيل الدخول بنجاح.";

    showApp();

  });

}


/* ================= REGISTER ================= */

if (registerForm) {

  registerForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    if (!supabaseClient) {
      registerMessage.textContent =
        "تعذر الاتصال بخدمة التسجيل.";
      return;
    }

    const name =
      document.getElementById("registerName").value.trim();

    const email =
      document.getElementById("registerEmail").value.trim();

    const password =
      document.getElementById("registerPassword").value;

    registerMessage.style.color = "";

    registerMessage.textContent =
      "جاري إنشاء الحساب...";

    const { data, error } =
      await supabaseClient.auth.signUp({
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

      registerMessage.textContent =
        "تم إنشاء الحساب وتسجيل الدخول.";

      showApp();

    } else {

      registerMessage.textContent =
        "تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا طُلب منك ذلك.";

    }

  });

}


/* ================= LOGOUT ================= */

if (logoutBtn) {

  logoutBtn.addEventListener("click", async () => {

    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }

    showLogin();

  });

}


/* ================= CHECK SESSION ================= */

async function checkUser() {

  if (!supabaseClient) {
    showLogin();
    return;
  }

  const {
    data: {
      session
    }
  } = await supabaseClient.auth.getSession();

  if (session) {
    showApp();
  } else {
    showLogin();
  }

}


/* ================= AUTH STATE ================= */

if (supabaseClient) {

  supabaseClient.auth.onAuthStateChange(
    (event, session) => {

      if (session) {
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

    if (darkModeBtn) {
      darkModeBtn.textContent = "☀️";
      darkModeBtn.title = "الوضع النهاري";
    }

    localStorage.setItem(
      "ardAlAhyaaDark",
      "true"
    );

  } else {

    document.body.classList.remove("dark");

    if (darkModeBtn) {
      darkModeBtn.textContent = "🌙";
      darkModeBtn.title = "الوضع الليلي";
    }

    localStorage.setItem(
      "ardAlAhyaaDark",
      "false"
    );

  }

}


const savedDarkMode =
  localStorage.getItem("ardAlAhyaaDark");

if (savedDarkMode === "true") {
  setDarkMode(true);
} else {
  setDarkMode(false);
}


if (darkModeBtn) {

  darkModeBtn.addEventListener("click", () => {

    const enabled =
      document.body.classList.contains("dark");

    setDarkMode(!enabled);

  });

}


/* ================= MOBILE MENU ================= */

if (mobileMenuBtn) {

  mobileMenuBtn.addEventListener("click", () => {

    if (mobileNav.style.display === "block") {

      mobileNav.style.display = "none";

      mobileMenuBtn.textContent = "☰";

    } else {

      mobileNav.style.display = "block";

      mobileMenuBtn.textContent = "✕";

    }

  });

}


/* إغلاق القائمة بعد الضغط على رابط */

if (mobileNav) {

  mobileNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.style.display = "none";

      if (mobileMenuBtn) {
        mobileMenuBtn.textContent = "☰";
      }

    });

  });

}


/* ================= SEARCH ================= */

const searchData = [

  {
    title: "شرح دروس الأحياء",
    type: "الشرح",
    url: "videos/index.html"
  },

  {
    title: "ملخص منهج الأحياء",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "الدعامة والحركة",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "التنسيق الهرموني",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "التكاثر",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "الوراثة",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "المراجعة النهائية",
    type: "ملخصات",
    url: "notes/index.html"
  },

  {
    title: "اختبارات الأحياء",
    type: "اختبارات",
    url: "exams/index.html"
  },

  {
    title: "منتدى الطلاب",
    type: "المنتدى",
    url: "forum/index.html"
  }

];


if (siteSearch) {

  siteSearch.addEventListener("input", () => {

    const query =
      siteSearch.value.trim().toLowerCase();

    if (!query) {

      searchResults.innerHTML = "";

      searchResults.style.display = "none";

      return;
    }

    const results =
      searchData.filter(item =>
        item.title.toLowerCase().includes(query)
      );

    searchResults.innerHTML = "";

    if (results.length === 0) {

      searchResults.innerHTML = `
        <div class="search-result">
          لا توجد نتائج مطابقة.
        </div>
      `;

    } else {

      results.forEach(item => {

        const result =
          document.createElement("a");

        result.href = item.url;

        result.className =
          "search-result";

        result.innerHTML = `
          <strong>${item.title}</strong>
          <small>${item.type}</small>
        `;

        searchResults.appendChild(result);

      });

    }

    searchResults.style.display = "block";

  });

}


/* ================= CLOSE SEARCH ================= */

document.addEventListener("click", (event) => {

  if (
    searchResults &&
    siteSearch &&
    !searchResults.contains(event.target) &&
    !siteSearch.contains(event.target)
  ) {

    searchResults.style.display = "none";

  }

});


/* ================= NAV ACTIVE ================= */

const navLinks =
  document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});


/* ================= START ================= */

checkUser();
