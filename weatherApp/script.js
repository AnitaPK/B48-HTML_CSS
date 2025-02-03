function showResult(data){
    console.log(data)
    document.querySelector('#result').innerHTML = `
        <h1>${data.name}</h1>
        <p>Temp In F : ${data.main.temp}</p>
    `


}

function getWeather(){
    city = document.querySelector('#city').value;
    try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
        .then(responce=>responce.json())
        .then(data=>showResult(data))
    } catch (error) {
        console.log(error);
        alert('getting error')
    }
}

// getWeather()