const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const data_hide = document.getElementsByClassName("data_hide");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (cityName.value === "") {
    city_name.innerText = "Please write the name before search";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=5b5874088e770b11588b503e336d80b5`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      data_hide[0].style.visibility = "visible";
      temp.innerHTML = `${arrdata[0].main.temp} <sup>O</sup>C</p>`;
      city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
      const tempMood = arrdata[0].weather[0].main;

      //weather icon condition
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud-sun' style='color: #eccc68'> </i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6'> </i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud-showers-heavy' style='color: #a4b0be'> </i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6'> </i>";
      }

      console.log(arrdata);
    } catch {
      city_name.innerText = "Please enter the city name correctly";
      data_hide[0].style.visibility = "hidden";
    }
  }
});
