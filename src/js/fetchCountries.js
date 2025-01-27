import renderCountry from "./renderCountry.js";

renderCountry;

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMessage = document.querySelector(".search-form__error-message");

const fetchCountry = async (e) => {
  e.preventDefault();
  errorMessage.textContent = "";
  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    errorMessage.textContent = "Please enter a valid country name";
    return;
  }
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`
    );
    const data = await response.json();
    const [country] = data;
    console.log(country);

    renderCountry(country);
    searchInput.value = "";
  } catch (error) {
    errorMessage.textContent = "Whoops, something went wrong, try again later";
  }
};

searchForm.addEventListener("submit", fetchCountry);
