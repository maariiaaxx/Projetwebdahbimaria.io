// Récupération du conteneur des recettes
const recettesContainer = document.getElementById('recettes-container');

// Sélection aléatoire de 3 recettes à partir du tableau d'objets recettes
const recettesAleatoires = [];
while (recettesAleatoires.length < 3) {
  const indexAleatoire = Math.floor(Math.random() * recettesDB.length);
  if (!recettesAleatoires.includes(recettesDB[indexAleatoire])) {
    recettesAleatoires.push(recettesDB[indexAleatoire]);
  }
}

// Affichage des recettes dans le HTML
recettesAleatoires.forEach(recette => {
  const recetteHTML = `
    <div class="recette">
      <img src="${recette.image}" alt="Image de la recette">
      <h2>${recette.name}</h2>
      <p>${recette.category}</p>
      <p>${recette.duration}</p>
      <p>${recette.country}</p>
    </div>
  `;
  recettesContainer.insertAdjacentHTML('beforeend', recetteHTML);
});




const input = document.getElementById('input1');
input.addEventListener('keydown', function(event) {
 
    const inputValue = input.value;
    console.log(inputValue)
    const searchResults = [];
    for (let i = 0; i < recettesDB.length; i++) {
      const recetteName = recettesDB[i].name.toLowerCase();
      if (recetteName.includes(inputValue.toLowerCase())) {
        searchResults.push(recettesDB[i]); 
        console.log(recettesDB[i]);
        recettesContainer.innerHTML = ''
      }
    }

    
    for (let i = 0; i < searchResults.length; i++) {
      const recette = searchResults[i];
      const recetteHTML = `
      <div class="recette">
      <img class="recette-image" src="${recette.image}">
      <h3 class="recette-titre">${recette.name}</h3>
        <p class="recette-categorie">Catégorie: ${recette.category}</p>
        <p class="recette-duree">Durée de préparation: ${recette.duration}</p>
        <p class="recette-origine">Origine: ${recette.country}</p>
        <p class="recette-note">Note globale: ${recette.global}</p>
        <button class="recette-button" id="details-button-${recette.id}">Détails</button>
      </div>
    `;

      recettesContainer.innerHTML += recetteHTML;
   
  }
});