document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let form = document.querySelector(".form");
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  function login(e) {
    e.preventDefault();
    if (!users) {
      toast("No users found");
      return;
    }

    let findUser = users.find(
      (user) =>
        user.username === username.value && user.password === password.value
    );

    if (findUser) {
      findUser.isLogined = true;
      localStorage.setItem("users", JSON.stringify(users));
      toast("User logged in successfully");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      toast("Username or password is incorrect");
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

  form.addEventListener("submit", login);
});
