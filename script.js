let weather = {
    apiKey:"c6c831981865d3d2faa42ed615c41231",
        fetchWeather: function (city) {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
          )
            .then((response) => {
              if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
              }
              return response.json();
            })
            .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
          const { name } = data;
          const { icon, description } = data.weather[0];
          const { temp, humidity , temp_max, temp_min} = data.main;
          const { speed } = data.wind;
          document.querySelector(".city").innerText = "Weather in " + name;
          document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
          document.querySelector(".temp").innerText = temp + "°C";

          document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
          document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
          document.querySelector(".weather").classList.remove("loading");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
        },
        fetchForecast: function (city) {
          fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
          )
            .then((response) => {
              if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
              }
              return response.json();
            })
            .then((data) => this.displayForecast(data));
        },
        displayForecast: function (data) {
          const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const d = new Date();
          document.querySelector(".day1").innerText=days[(d.getDay()%7+1)%7];
          document.querySelector(".ico").src =
            "https://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + ".png";
            document.querySelector(".desc1").innerText=data.list[6].weather[0].description;
          document.querySelector(".max").innerText="Max: "+data.list[6].main.temp_max+ "°C";
          document.querySelector(".min").innerText="Min: "+data.list[6].main.temp_min+ "°C";
          document.querySelector(".hum1").innerText="Humidity: "+data.list[6].main.humidity+ "%";
          document.querySelector(".ws1").innerText="Wind Speed: "+data.list[6].wind.speed+"km/h";

          document.querySelector(".day2").innerText=days[(d.getDay()+2)%7];
          document.querySelector(".icoo").src =
            "https://openweathermap.org/img/wn/" + data.list[14].weather[0].icon + ".png";
            document.querySelector(".desc2").innerText=data.list[14].weather[0].description;

          document.querySelector(".maxx").innerText="Max: "+data.list[14].main.temp_max+ "°C";
          document.querySelector(".minn").innerText="Min: "+data.list[14].main.temp_min+ "°C";
          document.querySelector(".hum2").innerText="Humidity: "+data.list[14].main.humidity+ "%";
          document.querySelector(".ws2").innerText="Wind Speed: "+data.list[14].wind.speed+"km/h";


          document.querySelector(".day3").innerText=days[(d.getDay()+3)%7];
          document.querySelector(".icooo").src =
            "https://openweathermap.org/img/wn/" + data.list[22].weather[0].icon + ".png";
            document.querySelector(".desc3").innerText=data.list[22].weather[0].description;

          document.querySelector(".maxxx").innerText="Max: "+data.list[22].main.temp_max+ "°C";
          document.querySelector(".minnn").innerText="Min: "+data.list[22].main.temp_min+ "°C";
          document.querySelector(".hum3").innerText="Humidity: "+data.list[22].main.humidity+ "%";
          document.querySelector(".ws3").innerText="Wind Speed: "+data.list[22].wind.speed+"km/h";


          document.querySelector(".day4").innerText=days[(d.getDay()+4)%7];
          document.querySelector(".icoooo").src =
            "https://openweathermap.org/img/wn/" + data.list[30].weather[0].icon + ".png";
            document.querySelector(".desc4").innerText=data.list[30].weather[0].description;

          document.querySelector(".maxxxx").innerText="Max: "+data.list[30].main.temp_max+ "°C";
          document.querySelector(".minnnn").innerText="Min: "+data.list[30].main.temp_min+ "°C";
          document.querySelector(".hum4").innerText="Humidity: "+data.list[30].main.humidity+ "%";
          document.querySelector(".ws4").innerText="Wind Speed: "+data.list[30].wind.speed+"km/h";





          document.querySelector(".day5").innerText=days[(d.getDay()+5)%7];
          document.querySelector(".icooooo").src =
            "https://openweathermap.org/img/wn/" + data.list[38].weather[0].icon + ".png";
            document.querySelector(".desc5").innerText=data.list[38].weather[0].description;

          document.querySelector(".maxxxxx").innerText="Max: "+data.list[38].main.temp_max+ "°C";
          document.querySelector(".minnnnn").innerText="Min: "+data.list[38].main.temp_min+ "°C";
          document.querySelector(".hum5").innerText="Humidity: "+data.list[38].main.humidity+ "%";
          document.querySelector(".ws5").innerText="Wind Speed: "+data.list[38].wind.speed+"km/h";





          
    
          },
  
      
       search: function () {
          this.fetchWeather(document.querySelector(".search-bar").value);
          this.fetchForecast(document.querySelector(".search-bar").value);
          

        },
    

      };
      
      document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
      });
      
      document
        .querySelector(".search-bar")
        .addEventListener("keyup", function (event) {
          if (event.key == "Enter") {
            weather.search();
          }
        });
      
