const SUPABASE_URL = "https://gvehygqxjqucxwussaye.supabase.co";
const SUPABASE_KEY = "sb_publishable_0Hxtm1KuZQ7paMyZQwRLQQ_NQ2wRaRX";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// إنشاء حساب
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.textContent = "جاري إنشاء الحساب...";

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name
        }
      }
    });

    if (error) {
      message.textContent = "❌ " + error.message;
      return;
    }

    message.textContent =
      "✅ تم إنشاء الحساب بنجاح!";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}


// تسجيل الدخول
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.textContent = "جاري تسجيل الدخول...";

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

    if (error) {
      message.textContent =
        "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة";
      return;
    }

    message.textContent =
      "✅ تم تسجيل الدخول بنجاح";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1000);
  });
}
