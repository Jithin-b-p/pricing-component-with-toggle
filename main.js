import "./sass/style.scss";

const radio = document.querySelectorAll("[name='pricing']");
const radioAnnually = document.getElementById("annually");
const radioMonthly = document.getElementById("monthly");
const basicPriceElement = document.querySelector("#basic-price");
const professionalPriceElement = document.querySelector("#professional-price");
const masterPriceElement = document.querySelector("#master-price");
const anuallyChecked = document.querySelector("[name='pricing']:checked");

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
  if (e.target.id === "monthly") {
    monthlyPricing();
    radioAnnually.setAttribute("aria-checked", "false");
    radioMonthly.setAttribute("aria-checked", "true");
  } else if (e.target.id === "annually") {
    annualPricing();
    radioAnnually.setAttribute("aria-checked", "true");
    radioMonthly.setAttribute("aria-checked", "false");
  }
}

radio.forEach((btn) => btn.addEventListener("change", handleOnChange));
