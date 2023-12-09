document.querySelectorAll(".information").forEach((element) => {
  element.addEventListener("click", function (event) {
    element.querySelector("input").checked =
      !element.querySelector("input").checked;
  });
});

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const selected = document.querySelector('input[name="plan"]:checked').value;
    const phoneNumber = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    console.log(selected, phoneNumber, email);
    const createdUser = await fetch("http://localhost:3000/dev/createUser", {
      method: "POST",
      body: JSON.stringify({ plan: selected, phone: phoneNumber, email }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(createdUser);
  });
