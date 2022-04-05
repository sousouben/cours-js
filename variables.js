// ceci est un commentaire une ligne
/*ceci 
est 
un 
commentaire
sur 
plusieurs 
ligne*/

let nomVariable = "kamelCase";
console.log(nomVariable);

// var ancien code remplacer par let et const
var box = "premier stocage";
console.log(box);

box = "nouveau stocage";
console.log(box);

// const est une variable qui ne change pas
// let est comme var elle peut changer de variable

let chaine = "chaine de caractère entre gillemet";
console.log(chaine);

let nouvelleChaine = "concaténation:" + chaine + " " + "super genial";
console.log(nouvelleChaine);

// concaténation:chaine de caractère entre gillemet super genial

let chiffre = 12;

let prix = `le prix attendu est: ${chiffre} euros`; //touche (alt 7)``

console.log(prix);
// le prix attendu est: 12 euros
