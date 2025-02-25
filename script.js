document.addEventListener('DOMContentLoaded', async () => {
  const cardContainer = document.querySelector('.card-container');
  const searchBar = document.querySelector('.search-bar input');
  let amiiboData = [];

  async function fetchAmiiboData() {
    try {
      const response = await fetch('https://amiiboapi.com/api/amiibo/');
      const data = await response.json();
      return data.amiibo;
    } catch (error) {
      console.error('Erreur lors de la récupération des données Amiibo:', error);
    }
  }

  function createCard(amiibo) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${amiibo.image}" alt="${amiibo.character}" />
      <h2>${amiibo.name}</h2>
      <p><strong>Série:</strong> ${amiibo.gameSeries}</p>
      <p><strong>Personnage:</strong> ${amiibo.character}</p>
      <p><strong>Type:</strong> ${amiibo.type}</p>
    `;

    cardContainer.appendChild(card);
  }

  function displayAmiibos(amiibos) {
    cardContainer.innerHTML = '';
    amiibos.forEach(createCard);
  }

  function filterAmiibos(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredAmiibos = amiiboData.filter(amiibo =>
      amiibo.character.toLowerCase().includes(searchTerm)
    );
    displayAmiibos(filteredAmiibos);
  }

  searchBar.addEventListener('input', filterAmiibos);

  amiiboData = await fetchAmiiboData();
  displayAmiibos(amiiboData);
});