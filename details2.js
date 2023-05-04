window.onload = function () {
  const recetteId = localStorage.getItem('recetteId');
  console.log("recetteId", recetteId)
  const recette = recettesDB.find(r => r.id == recetteId);
  console.log("recette", recette)

  const recetteContainer = document.getElementById("recette-container");
  console.log("recetteContainer", recetteContainer)
  const recetteImage = document.createElement('img');
  recetteImage.className = 'recette-image';
  recetteImage.src = recette.image;

  const recetteTitre = document.createElement('h3');
  recetteTitre.textContent = recette.name;
  recetteTitre.className = 'recette-titre';

  const recetteCategorie = document.createElement('p');
  recetteCategorie.textContent = "Catégorie: " + recette.category;
  recetteCategorie.className = 'recette-categorie';

  const recetteDuree = document.createElement('p');
  recetteDuree.textContent = "Durée de préparation: " + recette.duration;
  recetteDuree.className = 'recette-duree';

  const recetteOrigine = document.createElement('p');
  recetteOrigine.textContent = "Origine: " + recette.country;
  recetteOrigine.className = 'recette-origine';

  const recetteNote = document.createElement('p');
  recetteNote.textContent = "Note globale: " + recette.global;
  recetteNote.className = 'recette-note';

  const recetteIngredients = document.createElement('p');
  recetteIngredients.textContent =  recette.ingredients.join(", ");
  recetteIngredients.className = 'recette-ingredients';

  const recetteInstructions = document.createElement('p');
  recetteInstructions.textContent =  recette.instructions;
  recetteInstructions.className = 'recette-instructions';

  recetteContainer.appendChild(recetteImage);
  recetteContainer.appendChild(recetteTitre);
  recetteContainer.appendChild(recetteCategorie);
  recetteContainer.appendChild(recetteDuree);
  recetteContainer.appendChild(recetteOrigine);
  recetteContainer.appendChild(recetteNote);
  recetteContainer.appendChild(recetteIngredients);
  recetteContainer.appendChild(recetteInstructions);
}