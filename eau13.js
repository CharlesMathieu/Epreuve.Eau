/*Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
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
//Je récupère mes arguments
const myArg = process.argv.slice(2);
let numbers = [];
//Je boucle mon tableau pour convertir mes arguments en entier que je met dans le tableau numbers
for (let x = 0; x < myArg.length; x++) {
  numbers.push(parseInt(myArg[x]));
}
//Je déclare ma fontion du tri à bulle
function myBubbleSort() {
  //Je déclare n1 et n2 pour pouvoir permutter les éléments de mon tableau
  let n1;
  let n2;
  //J'applique la méthode du tri à bulle
  for (let i = numbers.length - 1; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      //Si le chiffre après j (n2) est inférieur à j, alors j prends sa place et n2 prend la place de j
      if (numbers[j + 1] < numbers[j]) {
        n1 = numbers[j];
        n2 = numbers[j + 1];
        numbers[j] = n2;
        numbers[j + 1] = n1;
      }
    }
  }
}
//Je déclare ma fonction qui écrit mes chiffres dans la console
function writeNumbers() {
  let minToMaxNumbers = "";
  for (let x = 0; x < numbers.length; x++) {
    minToMaxNumbers += `${numbers[x]} `;
  }
  console.log(minToMaxNumbers);
}
//J'appelle mes fonction
myBubbleSort();
writeNumbers();
