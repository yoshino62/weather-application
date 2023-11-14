function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-bar");
  let cityElement = document.querySelector("#currrent-city");
  cityElement.innerHTML = searchInput.value;

  // call the API
  // search for the city
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
