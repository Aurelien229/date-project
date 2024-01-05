// Fonction pour mettre à jour l'horloge et la date
function updateClock() {
    // Obtenir l'heure actuelle
    const now = new Date();
  
    // Extraire les heures, minutes et secondes
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Déterminer si c'est AM ou PM
    const format = hours >= 12 ? 'PM' : 'AM';
  
    // Convertir les heures au format 12 heures
    hours = hours % 12 || 12;
  
    // Ajouter un zéro devant les minutes et les secondes si nécessaire
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Sélectionner l'élément d'horloge dans le DOM et mettre à jour le texte
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${format}`;
  
    // Sélectionner l'élément de date dans le DOM
    const dateElement = document.getElementById('date');
  
    // Définir les options pour formater la date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    // Obtenir la date au format spécifié
    const dateObj = now.toLocaleDateString('en-US', options);
  
    // Créer des éléments distincts pour le jour, le mois et l'année
    const dayElement = document.createElement('span');
    dayElement.textContent = dateObj.split(',')[0]; // Jour
  
    const monthElement = document.createElement('span');
    monthElement.textContent = dateObj.split(',')[1].trim(); // Mois
  
    const yearElement = document.createElement('span');
    yearElement.textContent = dateObj.split(',')[2].trim(); // Année
  
    // Effacer le contenu précédent de l'élément de date
    dateElement.innerHTML = '';
  
    // Ajouter les nouveaux éléments (jour, mois, année) à l'élément de date
    dateElement.appendChild(dayElement);
    dateElement.appendChild(monthElement);
    dateElement.appendChild(yearElement);
  }
  
  // Fonction pour basculer le format de l'horloge entre 12 heures et 24 heures
  function toggleFormat() {
    // ... (le reste de votre code existant, selon la fonctionnalité souhaitée)
  }
  
  // Fonction pour démarrer l'horloge
  function startClock() {
    // Appeler la fonction pour mettre à jour l'horloge immédiatement
    updateClock();
  
    // Mettre à jour l'horloge toutes les 1000 millisecondes (1 seconde)
    setInterval(updateClock, 1000);
  }
  
  // Ajouter un écouteur d'événement pour basculer le format lorsqu'on clique sur l'horloge
  document.getElementById('clock').addEventListener('click', toggleFormat);
  
  // Démarrer l'horloge au chargement de la page
  startClock();
  