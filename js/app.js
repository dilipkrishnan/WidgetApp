  //Get current time
  function clock(){
          
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    //set AM/PM and 12-hour time
    if (hours >= 12){
        period = "PM";
        hours = hours - 12;
    }

    // add 0 for values less than 10
    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

  }

  // Refresh window
  function refreshPage(){
      
      window.location.reload();
  }

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = "\" " + data.content + " \"";
      cite.textContent = "- " + data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  async function getWeather() {
    // Fetch a data from the Open Metro API
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.58&longitude=79.64&daily=temperature_2m_max,weathercode&timezone=Canada/Eastern");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      reading.textContent = data.daily.temperature_2m_max[0];
      //statusimage.textContent = data.daily.weathercode[0];
      console.log(data.daily.weathercode[0]);
      switch(data.daily.weathercode[0]){
        case 0 | 1:
          statusimage.style["background-image"] = "url('../img/2.png')";
          break;
        case 2:
          statusimage.style["background-image"] = "url('../img/13.png')";
          break;
        case 3:
          statusimage.style["background-image"] = "url('../img/6.png')";
          break;
        case 45:
        case 48:
          statusimage.style["background-image"] = "url('../img/7.png')";
          break;
        case 51 | 53 | 55:
          statusimage.style["background-image"] = "url('../img/20.png')";
          break;
        case 56 | 57:
          statusimage.style["background-image"] = "url('../img/20.png')";
          break;
        case 61 | 63 | 65:
          statusimage.style["background-image"] = "url('../img/11.png')";
          break;
        case 66 | 67:
          statusimage.style["background-image"] = "url('../img/11.png')";
          break;
        case 71 | 73 | 75:
          statusimage.style["background-image"] = "url('../img/26.png')";
          break;
        case 77:
          statusimage.style["background-image"] = "url('../img/26.png')";
          break;
        case 80 | 81 | 82:
          statusimage.style["background-image"] = "url('../img/11.png')";
          break;
        case 85 | 86:
          statusimage.style["background-image"] = "url('../img/26.png')";
          break;
        case 95:
          statusimage.style["background-image"] = "url('../img/8.png')";
          break;
        case 96 | 99:
          statusimage.style["background-image"] = "url('../img/19.png')";
          break;
        default:
          statusimage.style["background-image"] = "url('../img/211.png')";
      }
      
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  var updateClock = setInterval(clock,1000);

  //get current date

  var today = new Date();
  const dayNumber = today.getDate();
  const year = today.getFullYear();
  const dayName = today.toLocaleString("default",{weekday:"short"});
  const monthName = today.toLocaleString("default",{month:"long"});

  document.querySelector(".month-name").innerHTML = monthName;
  document.querySelector(".day-name").innerHTML = dayName;
  document.querySelector(".day-number").innerHTML = dayNumber;
  document.querySelector(".year").innerHTML = year;


  // Powered by Quotable

  const quote = document.querySelector(".quote");
  const cite = document.querySelector(".autor");
  
  // call updateQuote once when page loads
  window.onload = updateQuote();


  // Powered by Open Metro
  const reading = document.querySelector(".reading");
  const statusimage = document.querySelector(".status-image");

  // call updateQuote once when page loads
  window.onload = getWeather();


 
 
