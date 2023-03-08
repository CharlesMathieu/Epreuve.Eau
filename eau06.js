/*Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//Je récupère mes arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];
let stringCheck = "";
let stringIsInString;
//Fonction pour faire la vérification
function stringInString() {
  //Je boucle mon argument 1 en sortant une sous chaîne de la taille de arg2 pour chaque index de arg1.
  for (let i = 0; i < arg1.length; i++) {
    stringCheck = arg1.slice(i, arg2.length + i);
    if (stringCheck == arg2) {
      stringIsInString = stringCheck;
    }
  }
  //Gestion d'erreur
  if (!stringIsInString) {
    return false;
  } else {
    return true;
  }
}

console.log(stringInString());
