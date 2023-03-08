/*Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/
//Je déclare toutes mes variables
let myNumber = parseInt(process.argv[2]);
let x = 1;
//Gestion d'erreur d'argument
if (myNumber < 0 || isNaN(parseInt(myNumber))) {
  console.log("error");
  return false;
}
//Ma fonction qui vérifie si mon argument +1 est premier
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ((n + x) % i === 0) {
      return false;
    } else {
      console.log(n + x);
      return true;
    }
  }
}
//Tant que mon argument + x est pas premier, on ajoute 1 à l'argument
while (!isPrime(myNumber + x)) {
  x++;
}
//Appel de ma fonction
isPrime();
