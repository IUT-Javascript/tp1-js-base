/*
 * Le fichier main va contenir le code principal de notre application
 * Ce fichier ne va contenir que des appels de fonctions
*/
displayArticleCount();

/*A la validation du formulaire, on récupère la valeur des 2 champs 
*et on va créer un article 
*(<article class="article"><span>$TITLE</span><p>$DESCRIPTION</p></article>)
*et on l'insert dans la div ayant l'id newsList
*Pour sélectionner un input on peut faire 'input[name=titleToAdd]'
*/
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
//form.onsubmit = submitForm;