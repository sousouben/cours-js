let x = 6;
let y = 5;

if (x < y) {
  // valeur si vrai
  console.log("x est inférieur à y");
} else {
  // valeur si faux
  console.log("x est supérieur à y");
}

if (x === y) {
  // == test la valeur et === test valeur et le type !== test le contraire
  //true ou false
  console.log("vrai !");
} else {
  console.log("faux");
}

// || ou && et <= >= == === != !== etc
// if(){}si valeur est bonne
// if(){}else{}si valeur fausse sinon valeur bonne
// if(){}else if(){}si valeur fausse sinon si autre valeur est bonne
let v = 5;
let j = 2;

if (v === j) {
  console.log("true");
} else if (v == j) {
  console.log("ils sont egaux en valeur");
} else {
  console.log(v + " et " + j + " ne sont pas égaux !"); //5 et 2 ne sont pas égaux !
  console.log(`${v} et ${j} ne sont pas égaux !`); //5 et 2 ne sont pas égaux !
}
//ternaire if else

let o = 10;
let l = "10";

o == l ? console.log("true") : console.log("false");
//si valeur de o = valeur de l c'est true sinon c'est false
