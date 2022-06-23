
var x = document.getElementById("resultado");

$("#btnLocalizar").click(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&lang=sp&units=metric&appid=e7f7bdc257804d7dd9bc1b7af07e2a26", function (data) {
            console.log(data);
            $("#resultado").empty();
            $("#resultado").append("<ul>");
            $("#resultado").append("<li>Codigo Pais: " + data.sys.country + "</li>");
            $("#resultado").append("<li>Ciudad/Comuna :" + data.name + "</li>");
            $("#resultado").append("<li>Latitud:" + data.coord.lat + "</li>");
            $("#resultado").append("<li>Longitud:" + data.coord.lon + "</li>");
            if (data.weather[0].main == "Clear") {
                $("#resultado").append("<li>Clima actual: Despejado</li>");
            } else if (data.weather[0].main == "Cloudy") {
                $("#resultado").append("<li>Clima actual: Nublado</li>");
            } else {
                $("#resultado").append("<li>Clima actual: " + data.weather[0].main + "</li>");
            }
            $("#resultado").append("<li>Temperatura Actual:" + Math.round(data.main.temp) + "</li>");
            $("#resultado").append("<li>Temperatura Minima:" + Math.round(data.main.temp_min) + "</li>");
            $("#resultado").append("<li>Temperatura Maxima:" + Math.round(data.main.temp_max) + "</li>");
            $("#resultado").append("<ul>");
        });
    });
});