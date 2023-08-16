const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2151cd06dfmsh096f06cf8c629fbp174afejsn488d356a33ff',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city)=>{
	cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct.innerHTML= response.cloud_pct;
    temp.innerHTML= response.temp;
    feels_like.innerHTML= response.feels_like;
    humidity.innerHTML= response.humidity;
    min_temp.innerHTML=response.min_temp;
	max_temp.innerHTML=response.max_temp;
    wind_speed.innerHTML= response.wind_speed;
    wind_degrees.innerHTML= response.wind_degrees;
    sunrise.innerHTML= response.sunrise;
    sunset.innerHTML=  response.sunset;
	feels_like.innerHTML= response.feels_like;
 
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);	
})
getWeather("Kolkata")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
.then(response => response.json())
	.then((response) => {
		f1.innerHTML= response.feels_like;
		h.innerHTML= response.humidity;
		m.innerHTML=response.max_temp;
		m1.innerHTML=response.min_temp;
		s1.innerHTML=response.sunrise;
		s2.innerHTML=response.sunset;
		t.innerHTML=response.temp;
		w1.innerHTML=response.wind_degrees;
		w2.innerHTML=response.wind_speed;

		console.log(response)})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
.then(response => response.json())
	.then((response) => {
		f3.innerHTML= response.feels_like;
		h33.innerHTML= response.humidity;
		m33.innerHTML=response.max_temp;
		m3.innerHTML=response.min_temp;
		s33.innerHTML=response.sunrise;
		s3.innerHTML=response.sunset;
		t3.innerHTML=response.temp;
		w3.innerHTML=response.wind_degrees;
		w33.innerHTML=response.wind_speed;
 

		console.log(response)})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(response => response.json())
	.then((response) => {
		f4.innerHTML= response.feels_like;
		h44.innerHTML= response.humidity;
		m44.innerHTML=response.max_temp;
		m4.innerHTML=response.min_temp;
		s44.innerHTML=response.sunrise;
		s4.innerHTML=response.sunset;
		t4.innerHTML=response.temp;
		w4.innerHTML=response.wind_degrees;
		w44.innerHTML=response.wind_speed;
 

		console.log(response)})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
		.then(response => response.json())
			.then((response) => {
				f5.innerHTML= response.feels_like;
				h55.innerHTML= response.humidity;
				m55.innerHTML=response.max_temp;
				m5.innerHTML=response.min_temp;
				s55.innerHTML=response.sunrise;
				s5.innerHTML=response.sunset;
				t5.innerHTML=response.temp;
				w5.innerHTML=response.wind_degrees;
				w55.innerHTML=response.wind_speed;
		 
		
				console.log(response)})
				.catch(err => console.error(err));


		