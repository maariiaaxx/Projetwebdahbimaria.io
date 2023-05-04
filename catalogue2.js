
window.onload = function () {
  const recetteContainer = document.getElementById("recette-container");
  for (let i = 0; i < recettesDB.length; i++) {
    const recette = recettesDB[i];
    const recetteDiv = document.createElement('div');
    recetteDiv.className = 'recette';
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

    const recetteButton = document.createElement('button');
    recetteButton.textContent = "Détails";

    recetteButton.className = 'recette-button';
    recetteButton.id = `details-button-${recette.id}`; // ette ligne pour assigner l'identifiant unique
    recetteButton.addEventListener('click', function () {
      const recetteId = recette.id;
      localStorage.setItem('recetteId', recetteId);
      window.open("details2.html", "_blank");
    });




    recetteDiv.appendChild(recetteImage);
    recetteDiv.appendChild(recetteTitre);
    recetteDiv.appendChild(recetteCategorie);
    recetteDiv.appendChild(recetteDuree);
    recetteDiv.appendChild(recetteOrigine);
    recetteDiv.appendChild(recetteNote);
    recetteContainer.appendChild(recetteDiv);

    recetteDiv.appendChild(recetteButton);

  }
}