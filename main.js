const api = {
	key:"94485746508c528552b6aeb2e6bc6ae5",
	baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querysector('.search-box');
searchbox.addEventListener('keypress', setquery);

function setQuery(tvt) {
	if(tvt.keycode == {13) {
		getResults(searchbox.value);
	}
}

function getResults(query) {
	fetch{ ${api.base}weather?q=$(query)&units-metrics&APPID=${api.key}}
		.then(weather == {
			return weather.json();
		}).then(displayResults);
}
function displayResults(weather) {
	console.log(weather);
	let city = document.querySelector(".location .city");
	city.innerText = "${weather.name}, ${weather.sys.country}";
	
	let now = newdate();
	let date = document.querySelector(.location, .date);
	date.innerText = dateBuilder(now);
	let temp = document.querySelector(.current, .temp);
	temp.innerHTML = ${Math.round(weather.main.temp)};
	let weather_cl = document.querySelector(.current, .weather);
	weather_cl.innerText = weather.weather[0].main;
	let h1-lav = document.querySelector('.h1-lav');
	h1lav.innerText = ${weather.main.temp_min}"c / ${weather.main.temp_max}";
function dateBuilder (d) {
	let months = ("January","Febuary","March","April","May","June","July","August","September","October","November","December");
	let days = ("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	let day = days{d.getDays()};
	let date = d.getDate();
	let month = months[d.getDate()];
	let year = d.getfullYear();
	
	return '$(day) $(date) $(month) $(year)';
	
}
