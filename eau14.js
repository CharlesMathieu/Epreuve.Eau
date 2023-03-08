/*
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.
*/

const myArg = process.argv.slice(2);
let array = [];
//Je boucle mon tableau pour convertir mes arguments en entier que je met dans le tableau numbers
for (let x = 0; x < myArg.length; x++) {
  array.push(parseInt(myArg[x]));
}
//Je déclare la fonction du tri par sélection
function mySelectSort() {
  // J'initialise mes variables qui contiendront les éléments parcouru de mon tableau
  let tempNumber;
  let smallerNumber;
  //Je boucle de 0 à l'avant-avant dernier élément du tableau
  for (let i = 0; i < array.length - 2; i++) {
    //Pour l'instant le plus petit nombre est celui d'où part ma boucle
    smallerNumber = i;
    //Je boucle de 1 après i à la fin de mon tableau
    for (let j = i + 1; j < array.length; j++) {
      //Si mon chiffre 1 est plus grand que mon chiffre 2, alors on permutte les 2.
      if (array[j] < array[i]) {
        smallerNumber = j;
        tempNumber = array[i];
        array[i] = array[smallerNumber];
        array[smallerNumber] = tempNumber;
      }
    }
  }
  //Je boucle mon tableau rangé pour afficher en console ma suite.
  let finalNumbers = "";
  for (let x = 0; x < array.length; x++) {
    finalNumbers += `${array[x]} `;
  }
  console.log(finalNumbers);
}

mySelectSort();
