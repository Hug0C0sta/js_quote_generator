var quoteIndex = 0;
const pQuote = document.querySelector("#quote");
const hAuthor = document.querySelector("#hAuthor");
const card = document.querySelector(".card");
const btn = document.querySelector("button");

async function getQuotes() {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function setQuote(quotes) {
  quoteIndex = Math.floor(Math.random() * quotes.length);
  pQuote.innerText = '"' + quotes[quoteIndex].text + '"';
  hAuthor.innerText =
    quotes[quoteIndex].author != undefined
      ? quotes[quoteIndex].author.toUpperCase()
      : "anonymous";

  if (pQuote.innerText.length > 140) {
    pQuote.style.fontSize = "12px";
  } else {
    pQuote.style.fontSize = "16px";
  }

  if (hAuthor.innerText.length > 20) {
    hAuthor.style.fontSize = "18px";
  } else {
    hAuthor.style.fontSize = "22px";
  }
}

async function initialize() {
  const quotes = await getQuotes();
  setQuote(quotes);
  btn.addEventListener("click", setQuote);
}

window.onload = initialize;
