## Histoire

- JavaScript a été créé en 1995 par Brendan Eich
- Pilier du WWW
- Initialement utilisé pour dynamiser les pages web, aujourd'hui on peut développer des applications serveurs ou des applications mobiles cross-platform avec

## Sujet du TP

1) Mettre en place une page d'accueil (index.html) W3C-valid comprenant :

- 1 section avec un formulaire d'ajout d'articles
- 2 champs sont nécessaires : le titre et la description
- 1 section pour afficher les articles ajoutés (vide au chargement)

2) Ajouter un "listener" pour le formulaire sur l'évènement "submit" appelant une future fonction submitForm

3) Créer un fichier form-article.js qui sera appelé dans l'index et contiendra la fonction suivante :

- La fonction checkForm prenant en paramètre un form JavaScript qui devra :
  - récupérer les valeurs des champs du formulaire
  - les valider (à vous de réfléchir à ce que vous devez vérifier)
  - modifier le style de la page pour mettre en valeur les champs contenant des erreurs
  - renverra TRUE si les champs sont valides, FALSE sinon

4) Ajouter au fichier form-article.js la fonction suivante :

- La fonction submitForm prenant en argument l'évènement devra :
  - empêcher le rechargement de la page
  - appeler la fonction précédente (checkForm) en lui passant le form issu de l'event
  - si TRUE, récupérer les valeurs des champs et créer un élément "article" avec le contenu
  - ajouter l'élément pour l'afficher dans la section adéquate

5) Mettre en place un fichier constant.js. Il contiendra à minima une constante ERROR_COLOR devant être appellée pour mettre en valeur les champs contenant des erreurs

6) Ajouter la méthode displayArticleCount qui affichera dans la balise h3 le nombre d'articles sur la page

- Le nombre d'article devra se rafraichir à chaque ajout

## JavaScript

- Les variables :
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const
- Les boucles :
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration
- Les conditions :
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality
- Les sélecteurs :
  - https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
  - https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
- Les événements :
  - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Events
- Créer un élément HTML :
  - https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- Modifier un élément HTML (contenu HTML, contenu texte, attributs)
  - https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
- Les fonctions
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions
- DEBUG du code JS : console.log VS point d'arrêt
  - https://developer.mozilla.org/fr/docs/Web/API/Console
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/debugger

## Ressources

- Lien des slides : https://drive.google.com/drive/folders/1R6BkNNUlPlrSbfJyHJN7YgFyg-7p-65R?usp=drive_link
- Lien vers la documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript