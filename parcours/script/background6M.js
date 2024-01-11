var Courir = localStorage.getItem('courir') === 'true';

var body = document.body; // Ajoutez ceci pour obtenir l'élément body

var container1Text = document.getElementById('container1Text');

if (Courir) {
  container1Text.textContent = 'Arrivé au bout de la passerelle, le brouillard se dissipe et les hurlements cessent. Rassuré, je continue ma route en direction de l épicerie.';
} else {
  container1Text.textContent = 'Subitement, je sens des mains agrippés mes épaules et m entraîner vers elles. Plus elles me tirent vers le brouillard, plus mes forces me quittent et plus jai de peine à me débattre.';
}

