// toggle open popup
const popup = document.querySelector(".login-popup");
document.querySelector(".open-popup").onclick = () => {
  popup.classList.toggle("active");
};

// toggle close popup
document.querySelector(".close-button").onclick = () => {
  popup.classList.remove("active");
};

// checkbox remember me
document.addEventListener("DOMContentLoaded", function () {
  const rememberCheckbox = document.getElementById("checkbox");
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  // Mengecek apakah ada nilai yang tersimpan untuk "Remember Me"
  const rememberMe = localStorage.getItem("rememberMe") === "true";
  if (rememberMe) {
    // Jika ada, setel nilai input dari localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      usernameInput.value = savedUsername;
      passwordInput.value = savedPassword;
      rememberCheckbox.checked = true;
    }
  }

  // Event listener untuk checkbox "Remember Me"
  rememberCheckbox.addEventListener("change", function () {
    if (rememberCheckbox.checked) {
      // Jika checkbox diperiksa, simpan nilai input ke dalam localStorage
      localStorage.setItem("username", usernameInput.value);
      localStorage.setItem("password", passwordInput.value);
      localStorage.setItem("rememberMe", true);
    } else {
      // Jika checkbox tidak diperiksa, hapus nilai yang tersimpan di localStorage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
  });
});

// form submit untuk menuju tab lain
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Dapatkan nilai username dan password
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Periksa jika username dan password cocok
    if (username === "Tri_Khusnul_Hidayati" && password === "qwe170506") {
      window.location.href = "https://azgardz.github.io/masa-inul/";
    } else if (
      username === "Titania_Veda_Wahyono" &&
      password === "rty170506"
    ) {
      window.location.href = "https://azgardz.github.io/masa-titan/";
    } else if (
      username === "Panji_Laila_Puteri_Sayekti" &&
      password === "uio170506"
    ) {
      window.location.href = "https://azgardz.github.io/masa-panji/";
    } else if (username === "Hilda_Diana" && password === "pas170506") {
      window.location.href = "https://azgardz.github.io/masa-hilda/";
    } else if (
      username === "Ade_Nusa_Nirwanasari" &&
      password === "dfg170506"
    ) {
      window.location.href = "https://azgardz.github.io/masa-ade/";
    } else if (username === "Ajeng_Asriasa" && password === "hjk170506") {
      window.location.href = "https://azgardz.github.io/masa-ajeng/";
    } else {
      alert("Username atau password salah.");
    }
  });
});
