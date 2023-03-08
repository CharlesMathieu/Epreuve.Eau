/*Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je récupère ma string
const myString = process.argv[2].toLowerCase();
//Je déclare ma fonction
function firstLetterUp() {
  //Je met chaque mot de ma string dans un tableau
  const myStringSplit = myString.split(" ");
  let myNewString = "";
  //Je boucle mon tableau avec chaque mot
  for (let i = 0; i < myStringSplit.length; i++) {
    //Je met chaque première lettre en majuscule + le reste du mot
    myNewString += `${myStringSplit[i][0].toUpperCase()}${myStringSplit[
      i
    ].slice(1)} `;
  }
  console.log(myNewString);
}
//Appel de ma fonction
firstLetterUp();
