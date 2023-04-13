const cardCrypto = document.querySelector(".card-crypto");
const refresh = document.getElementById("refresh");

async function getCrypto() {
  try {
    const reponseJSON = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&precision=6      "
    );
    const reponseJS = await reponseJSON.json();
    for (const [key] of Object.entries(reponseJS)) {
      const value = reponseJS[key].usd.toFixed(2);
      const marketCap = (reponseJS[key].usd_market_cap / 100000000).toFixed(2);
      cardCrypto.innerHTML += `
      <h1>${key}</h1>
      <p>Value: ${value} usd</p>
      <p>Market Cap: ${marketCap} M usd</p>
      `;
    }
  } catch (error) {
    console.log(error, "erreur du try call api crypto");
  }
}

getCrypto();

refresh.addEventListener("click", () => {
  window.location.href = window.location.href;
});
