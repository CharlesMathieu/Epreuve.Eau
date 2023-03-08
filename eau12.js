/*Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.


Exemples d’utilisation :
$> python exo.py 5 1 19 21
2


$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je déclare mes variables
const myNumbers = process.argv.slice(2);
let substraction = [];

//Je déclare ma fonction qui soustrait chaque arguments entre eux
function substractNumbers() {
  for (let i = 0; i < myNumbers.length; i++) {
    for (let x = 0; x < myNumbers.length; x++) {
      substraction.push(myNumbers[i] - myNumbers[x]);
    }
  }

  substraction = substraction;
}
//Je déclare ma fonction qui trie mon tableau dans l'ordre croissant
function minToMax() {
  substraction = substraction.sort();
}
//Je déclare ma fonction qui boucle mon tableau rangé dans l'ordre et console.log() le premier chiffre/nombre suppérieur à 0
function minSubstraction() {
  for (let j = 0; j < substraction.length; j++) {
    if (substraction[j] > 0) {
      console.log(`${substraction[j]}`);
      process.exit();
    }
  }
  console.log("0");
}
//J'appelle toutes les fonctions de mon programme
substractNumbers();
minToMax();
minSubstraction();
