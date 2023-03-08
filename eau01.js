/*Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.


Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>

987 n’est pas là parce que 789 est présent.

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent.

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.
*/

const arg = process.argv[2]

function suite()
{                           //Je déclare ma fonction
                              
let combine =""
for (let i = 0; i < 8; i++)                 //Boucle 1 pour le chiffre des centaines
{
    for ( let j = i + 1; j < 9; j++)        //Boucle 2 pour le chiffre des dizaines
    {
        for ( let k = j + 1; k < 10; k++)   //Boucle 3 pour le chiffre des unités
        { 
            combine += `${i}${j}${k}`+","   //J'attribu mes trois chiffres à la variable combine
           
        }
    }
}
console.log(combine)
}

if (!arg){     //gestion d'erreur si il y a un argument dans la console
    suite()
} else{
    console.log("Pas besoin d'argument.")
}
