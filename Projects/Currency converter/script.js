const amountInput = document.querySelector(".amount input");
const result = document.querySelector(".final .res");
const button = document.querySelector(".btn");
const dropdownf = document.querySelector(".from select");
const dropdownt = document.querySelector(".to select");
for (let currency in countryList) {
  let option1 = document.createElement("option");
  option1.value = currency;
  option1.text = currency;
  if (currency === "PKR") option1.selected = true; 
  dropdownf.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = currency;
  option2.text = currency;
  if (currency === "USD") option2.selected = true;
  dropdownt.appendChild(option2);
}
function updateFlag(selectElement) {
  const currency = selectElement.value;
  const countryCode = countryList[currency];
  const img = selectElement.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}
dropdownf.addEventListener("change", () => updateFlag(dropdownf));
dropdownt.addEventListener("change", () => updateFlag(dropdownt));
updateFlag(dropdownf);
updateFlag(dropdownt);
const fallback = {
  "USD": { "PKR": 280, "EUR": 0.92, "AUD": 1.5, "SAR": 3.75 },
  "PKR": { "USD": 1 / 280 }
};
button.addEventListener("click", async (e) => {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    result.innerText = "Please enter a valid number.";
    return;
  }
  const from = dropdownf.value;
  const to = dropdownt.value;

  result.innerText = "Fetching live rate...";

  try {
    const url = `https://api.exchangerate.host/convert?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(amount)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Network error: ${res.status}`);

    const data = await res.json();

    if (typeof data.result === "number") {
      const converted = data.result;
      const rate = data.info && data.info.rate ? data.info.rate : null;
      result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}` +
        (rate ? `  (1 ${from} = ${rate.toFixed(4)} ${to})` : ""); //ai
    } else {
      throw new Error("Unexpected API response");
    }
  } catch (err) {
    console.error("API error:", err);
    let converted = amount;
    if (fallback[from] && fallback[from][to]) {
      converted = amount * fallback[from][to];
      result.innerText = `Offline: ${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    } else {
      result.innerText = `Couldn't fetch live rate and no fallback for ${from}→${to}.`;
    }
  }
});




