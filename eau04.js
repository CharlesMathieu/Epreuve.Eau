/*Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/

function fibonacci(nbr) {
  if (nbr < 2) {
    return nbr;
  }
  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}

console.log(fibonacci(process.argv[2]));
