/*Créez un programme qui affiche ses arguments reçus à l’envers.


Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis


$> python exo.py ha ho
ho
ha

$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//Gestion d'erreur si il n'y a pas d'argument.
const erreur = process.argv.slice(2).length === 0;
if (erreur) {
  console.log("error"); //quitte le programme
} else {
  reverseString(); //J'appelle ma fonction
}

function reverseString() {
  //Je déclare ma fonction
  const myString = process.argv.slice(2);
  const myStringReverse = myString.reverse();

  for (let i = 0; i < myStringReverse.length; i++) {
    console.log(myStringReverse[i]);
  }
}
