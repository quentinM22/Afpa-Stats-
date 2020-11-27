let nbr = []
let x = 1
let y = 0 

//---------Boucle------------------------ 

while ( x != 0 ){
    x = Number (prompt("Veuillez saisir un nombre.(0 = FIN DE SAISI)",""))
    nbr[y] = x
    y++
}      
   

     nbr.pop(nbr.lastIndexOf)

        /* console.log ('tableau ' , nbr )
         console.log('longueur tableau ' ,nbr.length)*/

//---------liste max et min------------------- 

let maxList = nbr[0]
let minList = nbr[0]



for (let i = 1 ; i <= nbr.length ; i++ ){
    if ( nbr[i] > maxList){
        maxList = nbr[i]

    }else if (nbr[i] < minList && nbr[i] != 0 ){
        minList = nbr[i]
    }
         /*console.log ("minList ",minList)
         console.log ("maxList ", maxList)*/
}   

//---------somme et moyenne ----------------

let total = 0
let moyenne = 0

for( let u = 0 ; u < nbr.length ; u++ ){
total += nbr[u]
         /*console.log("total" , total)
         console.log(nbr[u])*/
         
moyenne = total / nbr.length   
         //console.log("moyenne" , moyenne) 
}

alert(`Nombres : ${nbr.length}  
Maximum : ${maxList} Minimum :  ${minList} 
Total : ${ total }  Moyenne  :  ${moyenne}`)
         


