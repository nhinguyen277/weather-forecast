window.onload = weather;

function weather() {
    var icon = document.getElementById("icon");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var wind_speed = document.getElementById("wind");
    // API key
    var myAPIkey = "ee07ff2db5544b9fcfabdc60e6066649";
    //set on click listener to  button
    document.getElementById("Toronto").onclick = Toronto;
    document.getElementById("Whitehorse").onclick = Whitehorse;
    var output = document.getElementById("output");


    function Toronto() {
        //display hidden output  of the city
        output.style.display = "block";

        var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" +
            myAPIkey + "&units=metric";
        //retrieve API data
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var DATA = xhr.response;
                    //display API icon from json object
                    icon.innerHTML = "<img src='https://openweathermap.org/img/wn/" + DATA.weather[0].icon +
                        "@2x.png' width='50px' height='50px' border='1px' style='background-color:#ADD8E6;' alt='icon'>";
                    var desc = DATA.weather[0].description;
                    // display decription with the uppercase of first letter
                    out_conditions.innerHTML = desc[0].toUpperCase() + desc.slice(1);
                    // display temperature with celcius
                    out_temp.innerHTML = Math.round(DATA.main.temp) + "°C";
                    // display wind speed 
                    wind_speed.innerHTML = DATA.wind.speed;


                } else {
                    out_location.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }

            }

        }
        xhr.open('GET', url, true);
        xhr.responseType = "json";
        xhr.send(null);


    }

    function Whitehorse() {
        //display hidden output  of the city
        output.style.display = "block";

        var url = "https://api.openweathermap.org/data/2.5/weather?q=Whitehorse&appid=" +
            myAPIkey + "&units=metric";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var DATA = xhr.response;
                    
                    //display API icon from json object
                    icon.innerHTML = "<img src='https://openweathermap.org/img/wn/" + DATA.weather[0].icon +
                        "@2x.png' width='50px' height='50px' border='1px' style='background-color:#ADD8E6;' alt='icon'>";
                    var desc = DATA.weather[0].description;
                    // display decription with the uppercase of first letter
                    out_conditions.innerHTML = desc[0].toUpperCase() + desc.slice(1);
                    // display temperature with celcius
                    out_temp.innerHTML = Math.round(DATA.main.temp) + "°C";


                } else {
                    out_location.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }

            }

        }
        xhr.open('GET', url, true);
        xhr.responseType = "json";
        xhr.send(null);


    }
}