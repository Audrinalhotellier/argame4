function switchContainer(containerNumber) {
  // Masquer tous les containers
  for (let i = 1; i <= 6; i++) {
    const container = document.getElementById(`container${i}`);
    container.classList.add('hidden');
  }

  // Afficher le container actif
  const activeContainer = document.getElementById(`container${containerNumber}`);
  activeContainer.classList.remove('hidden');

  // Changer l'image de fond en fonction du container actif
  const body = document.body;
  switch (containerNumber) {
    case 1:
      body.style.backgroundImage = 'url("assets/image1.jpg")';
      break;
    case 2:
      if (Fata) {
        body.style.backgroundImage = 'url("../assets/image2.jpg")';
      } else if (Bougie && Sciaquajola) {
        body.style.backgroundImage = 'url("../assets/image3.jpg")';
      } else if (PasBougie && Sciaquajola) {
        body.style.backgroundImage = 'url("../assets/image4.jpg")';
      } else {
        // Définir une image de fond par défaut pour le container 2
        body.style.backgroundImage = 'url("assets/default_background.jpg")';
      }
      break;
    case 3:
      if (Fond2) {
        body.style.backgroundImage = 'url("assets/fond2_background.jpg")';
      } else {
        // Définir une image de fond par défaut pour le container 3
        body.style.backgroundImage = 'url("assets/default_background.jpg")';
      }
      break;
    case 4:
      // Mettez ici le code pour le container 4
      break;
    case 5:
      // Mettez ici le code pour le container 5
      break;
    case 6:
      // Mettez ici le code pour le container 6
      break;
    default:
      // Fallback au cas où
      body.style.backgroundImage = 'url("assets/default_background.jpg")';
  }

}
