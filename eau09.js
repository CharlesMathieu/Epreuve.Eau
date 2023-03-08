/*Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


Exemples d’utilisation :
$> python exo.py “4445353”
true


$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je récupère ma string
const myArg = process.argv[2];
//Gestion d'erreur d'argument
if (!myArg) {
  console.log("error");
  return false;
}
//Je met chaque caractère de ma string dans un tableau
const myArgSplit = myArg.split("");
let isNumber;
//Je déclare ma fonction
function onlyString() {
  //Je boucle
  for (let i = 0; i < myArg.length; i++) {
    if (!isNaN(myArgSplit[i])) {
      isNumber = 1;
    }
  }
  if (!isNumber) {
    return true;
  } else {
    return false;
  }
}
console.log(onlyString());
