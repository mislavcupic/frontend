const apiKey = "1864ed379bf003d534983a65a1cfcb31";
const input = document.querySelector('#city-input');
let weatherIconSrc = document.querySelector('.weather-icon #icon-img');
let IconDisplay = document.querySelector('.weather-icon');
const searchBtn = document.getElementById('search-button');
const h1City = document.querySelector('#city');
const divRez = document.querySelector('#rezultat');





const handleSearch = () => {

    const city = input.value.trim();
    if(city.length <2){
        return;
    }
    //napravi url za taj grad
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   //dohvati vrijeme
const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload =  () => { //ako ide target.response umjesto request.response onda idemo sa eventom u parametru funkc.
    if(request.status===200){
    const responseObject = JSON.parse(request.response);///e.target.response tu može ići i e.target.response
    //console.log(e);
    console.log(responseObject);
    const temperature = responseObject.main.temp; 
    
    const icon = responseObject.weather[0].icon;
    //DZ
    const urlDio = `http://openweathermap.org/img/w/`; //"http://openweathermap.org/img/w/"
    weatherIconSrc.src = urlDio+icon+'.png';
    IconDisplay.appendChild(weatherIconSrc);
   
   
   
//naći na openWeather u example kodu
    divRez.innerHTML = `Temperatura je: <b>${temperature}&#8451;</b>`;
    }
    else if (request.status >= 400 && request.status<=500){
        h1City.innerText = `${city} nije nađen`;
        divRez.innerHTML = '';
    }
    else{
        h1City.innerText = 'Dogodila se pogreška, pokušajte ponovno s unosom!';
    }
   
  // Pristupi podacima koje je server vratio
};

request.send(); 
}

    searchBtn.addEventListener('click',handleSearch);
