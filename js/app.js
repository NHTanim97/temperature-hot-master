
// API KEY
const API_KEY = `a2d98a2a0b43afcaddc9f9cd50fc1b5f`;

const loadTemperature = city =>{

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}


const displayTemperature = (data) =>{
    // const Temperature = document.getElementById('temperature');
    // Temperature.innerText = data.main.temp;

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition-weather', data.weather[0].main);

    // console.log(data.weather[0].main);
}


// set for condition sun clouds
const setInnerTextById = (id, text) =>{

    const Temperature = document.getElementById(id);
    Temperature.innerText = text;
}



// search for api call
document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    // set city
    document.getElementById('city').innerText = inputFieldValue;
    loadTemperature(inputFieldValue);

})

loadTemperature('dhaka');