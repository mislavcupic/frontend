const apiKey = "1864ed379bf003d534983a65a1cfcb31";
const input = document.querySelector('#city-input');
let weatherIconSrc = document.querySelector('.weather-icon #icon-img');
let IconDisplay = document.querySelector('.weather-icon');
const searchBtn = document.getElementById('search-button');
const h1City = document.querySelector('#city');
const divRez = document.querySelector('#rezultat');
const divRez2 = document.querySelector('#rezultat2');
const divRez3= document.querySelector('#rezultat3');
const divRez4 = document.querySelector('#rezultat4');
const divRez5 = document.querySelector('#rezultat5');
const divRez6 = document.querySelector('#rezultat6');





const handleSearch = () => {

    const city = input.value.trim();
    if(city.length <2){
        return;
    }
    //napravi url za taj grad
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hr`;
   //dohvati vrijeme
const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload =  () => { //ako ide target.response umjesto request.response onda idemo sa eventom u parametru funkc.
    if(request.status===200){
    const responseObject = JSON.parse(request.response);///e.target.response tu može ići i e.target.response
    //console.log(e);
    console.log(responseObject);
    const temperature = responseObject.main.temp; 
    const humidity = responseObject.main.humidity;
    const pressure = responseObject.main.pressure;
    const wind = responseObject.wind.speed;
    const vrijeme = responseObject.weather[0].description;
    const icon = responseObject.weather[0].icon;
    //DZ ikonicu riješio, trebam još Clouds, Humidity, Wind, Pressure, Vrijeme
    const urlDio = `http://openweathermap.org/img/w/`; //"http://openweathermap.org/img/w/"
    weatherIconSrc.src = urlDio+icon+'.png';
    IconDisplay.appendChild(weatherIconSrc);
   
   
   
//naći na openWeather u example kodu
     divRez.innerHTML = `Temperatura je: <b>${temperature}&#8451;</b>`;
     divRez2.innerHTML = `Vlažnost zraka je: <b>${humidity} %</b>`;
     divRez3.innerHTML= `Vjetar: <b>${wind} m/s</b>`;
     divRez4.innerHTML= `Tlak zraka: <b>${pressure} hPa</b>`;
     divRez5.innerHTML=` Vrijeme: <b>${vrijeme}</b>`;   
                        
                        ;
    }
    else if (request.status >= 400 && request.status<=500){
        h1City.innerText = `${city} nije nađen`;
        divRez.innerHTML = '';
        divRez2.innerHTML='';
        divRez3.innerHTML='';
        divRez4.innerHTML='';
        divRez5.innerHTML='';
        divRez6.innerHTML='';
    }
    else{
        h1City.innerText = 'Dogodila se pogreška, pokušajte ponovno s unosom!';
    }
   
  // Pristupi podacima koje je server vratio
};

request.send(); 
}

    searchBtn.addEventListener('click',handleSearch);
