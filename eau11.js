/*Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py "test test" test
0

$> python exo.py "test" boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
//Je récupère mes arguments
const string = process.argv;
const myArg = string.slice(2, string.length - 1);
const searchWord = string[string.length - 1];
//Gestion d'erreur d'argument
if (!isNaN(parseInt(searchWord)) || !myArg[0]) {
  console.log("error");
  process.exit();
}
//Je déclare ma fonction
function indexWanted() {
  //Je boucle dans mon tableau
  for (let i = 0; i < myArg.length; i++) {
    //Si i est différent de mon mot recherché, j'ajoute 1 à counter
    if (myArg[i] == searchWord) {
      //Si j'ai trouvé le mot, j'affiche l'index et je quitte le programme
      console.log(i);
      process.exit();
    }
  }
  //Si le mot n'a pas été trouvé, j'affiche -1

  console.log("-1");
}

indexWanted();
