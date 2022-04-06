// ancienne methode
function faireQuelqueChose() {
  //on déclare la fonction puis on l'appel
  console.log("voilà ce que je dois faire !");
  console.log("je dois aussi faire sa etc...");
}
faireQuelqueChose(); //apeller la fonction

//return permet de retouner des valeur ou va déclarer la fin de la fonction et retourner la tache qui se trouve en haut du return
function calcule(x, y) {
  return x + y; //dans la console on ne verra rien mais si on tape calcule(10,5) elle va calculer 15
}
calcule();

//nouvelle façon de faire les fonctions flèchés
const faireUneTache = (tache) => {
  console.log("je fais:" + tache);
};
faireUneTache("un cours sur js"); // va prendre la place de tache je fais:un cours sur js
faireUneTache("le ménage"); //je fais:le ménage

//fonction anonyme qui se joue seul sans devoir l'appeler
//a faire si on a pas besoin de la rappeler plus tard
(function () {
  console.log("je me joue toute seule");
})();

//fonction anonyme féché
(() => {
  console.log("je me joue aussi toute seule!!!");
})();

//la porté des fonctions
function add2() {
  let a = 5; // attention une variable dans une fonction ne fonctionne pas à l'extérieur de la fonction
  console.log(a);
  return a + 2;
}
add2(); // si on va dans la console et qu'on tape add2(5) sa retourne 7 car 5+2=7
