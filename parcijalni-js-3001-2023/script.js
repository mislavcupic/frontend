
const inputSearch = document.querySelector('.input-txt');
const divSearch = document.querySelector('.search-result');
const divMessage = document.querySelector('.message');



const handleSearch = () => {

const songName = inputSearch.value.trim();
  
if(songName < 3){
    return;
}

else if (songName===''){
    console.log('...stranica nije učitana jer niste ništa upisali,unesite ponovno');
}


   //url
   const url = `https://itunes.apple.com/search?term=${songName}&entity=song`;
   const request = new XMLHttpRequest();
   request.open('GET',url,true);
   console.log(request);

   request.onload = () => {
    if(request.status ===200){
    //    divMessage.textContent= 'Downloading';
        console.log('req onload ok');
        const responseObject = JSON.parse(request.response);///e.target.response tu može ići i e.target.response
        //console.log(e);
        console.log(responseObject);

        //FOR PETLJA 
    for(i=0;i<responseObject.results.length;i++){

        

     const pjesme = responseObject.results[i].trackName;  //po imenu
     console.log(pjesme);
        
     //UBACI OVDJE
     const divLista = document.querySelector('.div-list');
     const childP = document.createElement('p');
    
     divLista.appendChild(childP);

     childP.innerText=pjesme;
     
     
        
           }
    }
   };

   request.send();
    


}




const handleInputSearch = () => {

    const p = document.createElement('span');
    p.innerText = inputSearch.value;
    divSearch.append(p);
}



 inputSearch.addEventListener('change', handleInputSearch);
 inputSearch.addEventListener('click',handleSearch);
 

