/*Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/


let combine =""

function suite(){
    for ( let i = 0; i < 10; i++)
    {
        for ( let j = 0; j < 10; j++)
        {
            for ( let k = 0; k < 10; k++)
            {
                for ( let l = + 1; l < 10; l++)
                {
                    if (`${i}${j}`<`${k}${l}`){
                    combine += `${i}${j}`+" "+`${k}${l}`+", "
                    }
                }
            }
        }
    }
    console.log(combine)
}

suite()