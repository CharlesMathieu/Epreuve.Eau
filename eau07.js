/*
Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//toUpperCase()

const string = process.argv[2].toLowerCase();
let letters = "";

//Je boucle ma string et converti en majuscule une lettre sur 2
function majuscule() {
  for (let i = 0; i < string.length; i++) {
    letters += string[i++].toUpperCase() + string[i];
  }
  //Le -9 est là pour ne pas afficher undefined à la fin de la string
  console.log(letters.slice(0, -9));
}
majuscule();
//
//
//
//
//
//console.log(sentence.toUpperCase()
