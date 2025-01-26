/* Créer une fonction qui vérifie que les donnéees du formulaire sont bien renseignés
 * De plus, si un champ est vide alors il devra être encadré en rouge
 */
function checkForm(form) {
    const titleToAdd = form.querySelector('input[name=titleToAdd]'); //ici on récupère 1 seul élément ayant le tag input et l'attribut name avec la valeur titleToAdd
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]'); //ici on récupère 1 seul élément ayant le tag textarea et l'attribut name avec la valeur descriptionToAdd
    let isValid = true;

    titleToAdd.setAttribute('style', 'border-color: inherit');
    descriptionToAdd.setAttribute('style', 'border-color: inherit');

    // on vérifie si les champs sont vides
    // la méthode trim() permet de supprimer les espaces en début et fin de chaîne
    if (titleToAdd.value.trim() === '') {
        logMessage('Le champ titleToAdd n\'a pas été renseigné', 'error'); // console.error permet de mettre en avant (en rouge) un message dans la console
        titleToAdd.setAttribute('style', `border-color: ${ERROR_COLOR}`); // la méthode setAttribute permet de définir la valeur d'un attribut HTML de l'élément
        isValid = false;
    }

    if (descriptionToAdd.value.trim() === '') {
        logMessage('Le champ descriptionToAdd n\'a pas été renseigné', 'error'); // console.error permet de mettre en avant (en rouge) un message dans la console
        descriptionToAdd.setAttribute('style', `border-color: ${ERROR_COLOR}`); // la méthode setAttribute permet de définir la valeur d'un attribut HTML de l'élément
        isValid = false;
    }

    return isValid;
}

/* A la validation du formulaire, on récupère la valeur des 2 champs 
 * et on va créer un article 
 * (<article class="article"><span>$TITLE</span><p>$DESCRIPTION</p></article>)
 * et on l'insert dans la div ayant l'id newsList
 * Pour sélectionner un input on peut faire 'input[name=titleToAdd]'
 */
function submitForm(event) {
    event.preventDefault(); //permet de bloquer le rechargement de la page à la validation du formulaire
        
    if (!checkForm(event.currentTarget)) { //currentTarget ou target permet de récupérer l'élément qui a déclenché l'événement
        return false;
    }

    const titleToAdd = form.querySelector('input[name=titleToAdd]');
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]');

    const title = titleToAdd.value; //l'attribut value eest un raccourci pour .attr(value)
    const description = descriptionToAdd.value; //l'attribut value eest un raccourci pour .attr(value)

    createArticle(title, description);

    displayArticleCount();

    resetForm();

    return false; //permet de bloquer le rechargement de la page à la validation du formulaire
}

function createArticle(title, description) {
    const article = document.createElement('article');
    const span = document.createElement('span');
    const p = document.createElement('p');

    span.innerText = title;
    p.innerText = description;
    article.appendChild(span);
    article.appendChild(p);
    article.classList.add('article'); //article.setAttribute('class', 'article');
    document.querySelector('#newsList').appendChild(article);

    // l'équivalent ci-dessous
    // const article = `<article class="article"><span>${title}</span><p>${description}</p></article>`;
    // document.querySelector('#newsList').appendChild(article);
}

function resetForm(){
    const titleToAdd = form.querySelector('input[name=titleToAdd]'); //on utilise un sélecteur par attribut [attrName=attrValue]
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]'); //on utilise un sélecteur par attribut [attrName=attrValue]

    titleToAdd.value = '';
    descriptionToAdd.value = '';
}