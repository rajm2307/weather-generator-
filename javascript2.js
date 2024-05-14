// const search_input = document.querySelector("#search_input")
// let searchButton = document.querySelector("#searchButton")
// let weather_icon = document.querySelector("#weather_icon")
// let weather = document.querySelector("#weather")
// let desc = document.querySelector("#desc")
// let humidity = document.querySelector("#humidity")
// let wind = document.querySelector("#wind")
// let API = "8cf5ac5621c8d0266298a149e49d7514"


// const setWeather = (data)=>{
//     desc.innerHTML = data.weather[0].descritpion;
//     weather.innerHTML = Math.round(data.main.temp - 273.15) + "°c";
//     humidity.innerHTML = data.main.humidity + "%";
//     windSpeed.innerHTML = data.wind.speed + "km/h";

//     switch(data.weather[0].main){
//         case 'Rain':
//             weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
//         case 'Mist':
//             weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
//         case 'Snow':
//             weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
//         case 'Haze':
//             weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
//         case 'Clear':
//             weather_icon.src =  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
//         case 'Clouds': 
//         weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
        
//     }
// }

// let call_API = (id)=>{
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${id}`)
//     .then(response => {
//         if (!response.ok) {
//             alert("Check spelling of City and try again or Something Went Wrong!");
//             throw new Error(`Request failed with status ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(data =>{
//         setWeather(data)
//     })
//     .catch(error =>{
//         alert(error)
//     })

// }


// searchButton.addEventListener("click", (a) =>{
//     if (search_input.value == "") {
//         alert("Please Enter Your City")
//     }
//     else{
//         call_API(API);
//     }
// })

// search_input.addEventListener("click", (e) =>{
//     if (e.key == "Enter") {
//         e.preventDefault();
//         searchButton.click();
//     }
// })

// searchButton.click()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const search_input = document.querySelector("#search_input")
let searchButton = document.querySelector("#searchButton")
let weather_icon = document.querySelector("#weather_icon")
let weather = document.querySelector("#weather")
let desc = document.querySelector("#desc")
let humidity = document.querySelector("#humiditi")
let wind = document.querySelector("#wind")
let API = "8cf5ac5621c8d0266298a149e49d7514"


const setWeather = (data)=>{
    // weather_icon.innerHTML = data.weather[0].main
    weather.innerHTML = Math.round(data.main.temp - 273.15) + "°c";
    desc.innerHTML = data.weather[0].description
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + "km/hr"

    switch (data.weather[0].main) {
        case "Rain":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
            break;
        
        case "Mist":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
            break;
        
        case "Snow":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
            break;

        case "Haze":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
            break;

        case "Clear":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
            break;

        case "Clouds":
            weather_icon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
            break;
    
    }
}

const callAPI = (id)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_input.value}&appid=${id}`)
    .then(response =>{
        if (!response.ok) {
            alert("Check spelling of City and try again or Something Went Wrong!");
            throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json();
    })
    .then(data => {
        setWeather(data)
    })
    .catch(error=> console.log(error))
}


searchButton.addEventListener("click",()=>{
    if (search_input.value == "") {
        alert("Please Enter your city name");
    }
    else{
        callAPI(API);
    }
})

search_input.addEventListener("click",(e)=>{
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
    }
})

searchButton.click()