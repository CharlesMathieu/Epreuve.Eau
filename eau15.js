/*Créez un programme qui trie les éléments donnés en argument par ordre ASCII.


Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo


$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je récupère mes arguments
const array = process.argv.slice(2);
//Gestion erreur d'argument
function checkError() {
  if (array.length === 0) {
    console.log("error");
    process.exit();
  }
}
//Je déclare ma fonction qui va classer mes éléments par ordre ASCII en utilisant le tri à bulle
function ASCII_Order() {
  for (let i = array.length - 1; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j + 1].charCodeAt() < array[j].charCodeAt()) {
        w1 = array[j];
        w2 = array[j + 1];
        array[j] = w2;
        array[j + 1] = w1;
      }
    }
  }
  //Je place mes arguments dans l'ordre dans une string
  let finalSuite = "";
  for (let x = 0; x < array.length; x++) {
    finalSuite += `${array[x]} `;
  }
  console.log(finalSuite);
}
//J'appelle mes fonctions
checkError();
ASCII_Order();
