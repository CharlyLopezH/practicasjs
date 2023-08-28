
const isSubsecuent=(Str1,Str2)=>{
console.log(Str1);
let contadorSubs = 0;
for (p1 =0; p1 < Str1.length; p1++) {
    console.log(Str1[p1]);
    //Por cada elemento en la lista original, revisar la existencia en el subsecuente    
    for (p2=0; p2 < Str2.length; p2++) {
        if (Str1[p1]===Str2[p2]) {
            console.log('Iguales: '+Str1[p1]+', '+Str2[p2]);
            contadorSubs++;            
            }
        //console.log(contadorSubs);
    }
    if (contadorSubs==Str1.length){
        return(true);
    }
}
return(false);
}

//Pruebas..
Str1='abcd';
Str2='axbhcdr';

const r = isSubsecuent(Str1,Str2);
console.log(`Return: ${r}`);