/*
Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je récupère mes arguments
const number1 = parseInt(process.argv[2]);
const number2 = parseInt(process.argv[3]);
//Je déclare ma fonction
function minToMax() {
  let numberMin;
  let numberMax;
  let output = "";
  //Je détermine l'argument le + petit et le + grand
  //que je place dans les variables numberMin et numberMax
  if (number1 < number2) {
    numberMin = number1;
    numberMax = number2;
  } else {
    numberMin = number2;
    numberMax = number1;
  }
  //Je créer une boucle qui par du numberMin
  //et qui va jusqu'à numberMax + 1
  for (let i = numberMin; i < numberMax + 1; i++) {
    output += `${i} `;
  }
  console.log(output);
}
minToMax();
