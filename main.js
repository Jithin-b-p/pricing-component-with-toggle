import "./sass/style.scss";

const radio = document.querySelectorAll("[name='pricing']");
const basicPriceElement = document.querySelector("#basic-price");
const professionalPriceElement = document.querySelector("#professional-price");
const masterPriceElement = document.querySelector("#master-price");
const anuallyChecked = document.querySelector("[role='switch']:checked");

function monthlyPricing() {
  basicPriceElement.textContent = "19.99";
  professionalPriceElement.textContent = "24.99";
  masterPriceElement.textContent = "39.99";
}

function annualPricing() {
  basicPriceElement.textContent = "199.9";
  professionalPriceElement.textContent = "249.9";
  masterPriceElement.textContent = "399.9";
}

if (anuallyChecked) {
  annualPricing();
}

function handleOnChange(e) {
  console.log(document.querySelector("[role='switch']:checked"));

  if (e.target.id === "monthly") {
    monthlyPricing();
  } else if (e.target.id === "annually") {
    annualPricing();
  }
}
radio.forEach((btn) => btn.addEventListener("change", handleOnChange));
