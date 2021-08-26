console.log("how is it looking now");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
//messageOne.textContent = "from javascript";

weatherForm.addEventListener("submit", (e) => {
  const location = search.value;
  e.preventDefault();

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response
        .json()

        .then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
          }
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        });
    }
  );
});
