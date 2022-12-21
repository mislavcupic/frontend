var Osoba = {ime:'', godine:null};
var niz = stvoriNizObj(Osoba); //5 objekata - osoba imenom i godinama
 //promijeniti godine postojećim objektima
var godine = dodajGodine(niz);


function stvoriNizObj(Osoba){
   
    var osobe=[];
    for(var i=0;i<5;i++){
            Osoba = {
            ime: 'Mislav'+ i,
            godine: randomInteger()
        }
    
        osobe.push(Osoba);
   
        
    }
     return osobe;
}
function randomInteger(minLimit=1,maxLimit = 100){
var rand = Math. random() * maxLimit;


rand = Math. floor(rand); // 99.

return rand;
}


function dodajGodine(niz){
    

    for(i=0;i<niz.length;i++){
        
       niz[i].godine = niz[i].godine+1;
}
    return niz;
}

function prosjekGodina(niz){
    
var prosjek = 0;
    for(i=0;i<niz.length;i++){

        prosjek+=niz[i].godine/niz.length;
        
        
}
    return prosjek;
}



