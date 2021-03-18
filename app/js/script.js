/* ------------------------------ DOM Selector ------------------------------ */

const pageView = document.querySelector(".pricing__numPage");
const priceView = document.querySelector(".pricing__cost");
const rangeInput = document.getElementById("priceRange");
const btnBilling = document.querySelector(".btnBilling");

/* ----------------------------- Helper function ---------------------------- */
const yearlyView = () => {
  btnBilling.classList.add("yearly");
  btnBilling.style.setProperty("--display-ib", "none");
  btnBilling.style.setProperty("--display-none", "inline-block");
};

const monthlyView = () => {
  btnBilling.classList.remove("yearly");
  btnBilling.style.setProperty("--display-ib", "inline-block");
  btnBilling.style.setProperty("--display-none", "none");
};

/* ------------------------- Change Pricing  -------------------------------- */

rangeInput.addEventListener("change", function (e) {
  const rangeValue = e.target.value;
  const price = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
  const pageNbr = ["10K", "50K", "100K", "500K", "1M"];

  pageView.textContent = pageNbr[rangeValue - 1];
  priceView.textContent = price[rangeValue - 1];
});

btnBilling.addEventListener("click", function (e) {
  if (!btnBilling.classList.contains("yearly")) {
    yearlyView();
  } else {
    monthlyView();
  }
});

btnBilling.addEventListener("click", function (e) {});
