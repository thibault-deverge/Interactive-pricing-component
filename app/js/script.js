/* ------------------------------ DOM Selector ------------------------------ */

const pageView = document.querySelector(".pricing__numPage");
const priceView = document.querySelector(".pricing__cost");
const rangeInput = document.getElementById("priceRange");
const btnBilling = document.querySelector(".btnBilling");

/* ----------------------------- Helper function ---------------------------- */
let costPerMonth = Number(priceView.textContent.slice(1));

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

const yearlyCalc = () => {
  costPerMonth = Number(priceView.textContent.slice(1));
  const costPerYear = costPerMonth * 12 * (75 / 100);
  priceView.textContent = `$${costPerYear.toFixed(2)}`;
  priceView.nextSibling.textContent = " / year";
};

const monthlyCalc = () => {
  priceView.textContent = `$${costPerMonth.toFixed(0)}.00`;
  priceView.nextSibling.textContent = " / month";
};

/* ------------------------- Change Pricing  -------------------------------- */

rangeInput.addEventListener("change", function (e) {
  const rangeValue = e.target.value;
  const price = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
  const pageNbr = ["10K", "50K", "100K", "500K", "1M"];

  pageView.textContent = pageNbr[rangeValue - 1];
  priceView.textContent = price[rangeValue - 1];

  if (btnBilling.classList.contains("yearly")) {
    yearlyView();
    yearlyCalc();
  } else {
    pageView.textContent = pageNbr[rangeValue - 1];
    priceView.textContent = price[rangeValue - 1];
    monthlyView();
  }
});

btnBilling.addEventListener("click", function (e) {
  if (!btnBilling.classList.contains("yearly")) {
    yearlyView();
    yearlyCalc();
  } else {
    monthlyView();
    monthlyCalc();
  }
});
