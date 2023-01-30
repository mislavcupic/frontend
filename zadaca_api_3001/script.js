/*proučiti api i izlistati koktele prema searchu koji je izlistao korisnik

izlistati sve što je našao pod margarita ili što god
moram napraviti onaj searchString
moram po pretrazi mijenjati podatke na podacima u skladu sa pretragom, na klik imena pića on izbacuje i mijenja podatke,
na klik idemo na drugi api (by id) i onda on vraća listu s jednom stvari i ta lista će na nekoliko jezika vraćati sliku, način pripreme i sl.
napraviti za Thumb i ovo objašnjenje kako se radi koktel to */
/*var index = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
requests=new Array(index.length);
for (let i = 0; i < index.length; i++) {
    var url = "https://wind-bow.glitch.me/twitch-api/channels/" + index[i];
    requests[i] = new XMLHttpRequest();
    requests[i].open("GET", url);
    requests[i].onload = function() {
        var data = JSON.parse(requests[i].responseText);
        console.log(data);
    }
    requests[i].send();
}*/


// request1
const inputSearch = document.querySelector('.inputSearch');
const inputBtn = document.querySelector('.input-btn');
const divSearch = document.querySelector('.search-result');
const h1cocktailName = document.querySelector('.h1-class');
const cugaItems = document.querySelectorAll('.ol-list');



//req2 

const answerContainer = document.querySelector('.answer-container');
const drinkName = document.querySelector('.name-div');
const drinkImg = document.querySelector('.drink-img');
const drinkDescription = document.querySelector('.drink-description');
const drinkIngredients = document.querySelector('.drink-ingredients');

const cocktailList=[];
const listaImena = [];
const idOdabranihPića = [];
const liContainer = [];



const handleSearch = () => {

   const cocktailName = inputSearch.value.trim();
  
    if(cocktailName < 3){
        return;
    }
    //napravi url za taj koktel

const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

   //request na stranicu
const request = new XMLHttpRequest();
request.open('GET', url, true);
console.log(request);
// novi url za dohvaćanje po id - ju


request.onload =  () => { //ako ide target.response umjesto request.response onda idemo sa eventom u parametru funkc.
    if(request.status===200){
    const responseObject = JSON.parse(request.response);///e.target.response tu može ići i e.target.response
    //console.log(e);
    console.log(responseObject);
    h1cocktailName.innerText = cocktailName;

    for(i=0;i<responseObject.drinks.length;i++){
     const imenaOdabranogPića = responseObject.drinks[i].strDrink;  //po imenu
     console.log(imenaOdabranogPića);
     
     //UBACI OVDJE
     const olList = document.querySelector('.ol-list');
     const childLi = document.createElement('li');
     const aLi = document.createElement('a');
     olList.appendChild(childLi);
     childLi.appendChild(aLi);
   

//www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

     childLi.innerText=imenaOdabranogPića;
     

     childLi.classList.add('li-cuga');
     olList.href+=imenaOdabranogPića[i];
  
     idOdabranihPića[i] = responseObject.drinks[i].idDrink;
       
         childLi.setAttribute('id',idOdabranihPića[i]);
// liContainer[i] += childLi.id; //maknuo sam [i]
    
    console.log(drinkIngredients);
    
    



     
    }
  }

    else if (request.status >= 400 && request.status<=500){
       //  h1cocktailName.innerText = `${cocktailName} nije nađen`;

       inputSearch.innerText = `${cocktailName} nije nađen`;
//       
     
//     }
//     else{
//         h1City.innerText = 'Dogodila se pogreška, pokušajte ponovno s unosom!';
//     }
   
//   // Pristupi podacima koje je server vratio
 
    }
    else {
        h1cocktailName.innerText = 'Dogodila se pogreška, pokušajte ponovno s unosom!';
    }
};
    


request.send(); 
}
  
//OVO ĆE SVE BITI TEST PA AKO NEKAJ PUKNE BRIŠI SVE POD OVIM KOMENTARIMA
const handleLinks = () => {
      console.log('ovdje smo');
      
   

  for(i=0;i<idOdabranihPića.length;i++){
   
      
    
    const url2 = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idOdabranihPića[i]}`;
  //  liContainer.setAttribute('href',url2);

 
  console.log(idOdabranihPića[i]);
    const request2 = new XMLHttpRequest();
    request2.open('GET', url2, true);
    console.log(request2);
  
   
 request2.onload = () => {
  
   if(request2.status===200){
    const responseObject2 = JSON.parse(request2.response);
     console.log(responseObject2);
    drinkIngredients.innerText+= responseObject2.drinks[0].strInstructions;

    //UBACI OVDJE 

   
   }

  else console.log('nešto se strgalo');
 };
  
 
 request2.send();

} 
}
  



for(i=0;i<idOdabranihPića.length;i++){
    const odabranoPice=idOdabranihPića[i];
    odabranoPice.addEventListener('click',handleLinks);
}

const handleInputSearch = () =>{
    const p = document.createElement('span');
    p.innerText = inputSearch.value;
    divSearch.append(p);
}

 

inputBtn.addEventListener('click',handleSearch);
inputSearch.addEventListener('change',handleInputSearch);


