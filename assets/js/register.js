document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let form = document.querySelector(".form");
  let name = document.querySelector("#name");
  let surname = document.querySelector("#surname");
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let isLogined = false;

  function register(e) {
    e.preventDefault();
    let id = uuidv4();
    let uniqueUser = users.some(
      (user) => user.username === username.value || user.email === email.value
    );

    if (!uniqueUser) {
      let newUser = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value,
        password: password.value,
        isLogined: isLogined,
        id: id,
        wishList: [],
        basket: [],
        role: users.length === 0 ? "" : "user",
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast("User registered successfully");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } else {
      toast("User already exists");
      return;
    }
  }

  function toast(text) {
    Toastify({
      text: `${text}`,
      duration: 2000,
      gravity: "top",
      position: "right",
      className: "custom-toast",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(45deg, #ff6a00, #ee0979)",
      },
    }).showToast();
  }

  form.addEventListener("submit", register);
});
