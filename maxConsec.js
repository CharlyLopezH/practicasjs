console.log('Hola');

const maxConsec=(arraySec)=>{
    let maxi=0;
    let cont=0; 
    //Apuntador a cada elemnto del arreglo
    for (p=0; p<arraySec.length;p++) {

        if (arraySec[p]==1) {               
            cont++;   
        } else {
            cont=0;
        }
        maxi=Math.max(maxi,cont);
    }
    return(maxi);
}

//..
arraySec=[0,1,1,1,1,1,1,1,1,1,1,1,1,0];
const r=maxConsec(arraySec);
console.log('Max cadena: '+r);