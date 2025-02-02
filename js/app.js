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
        if(hours > 12){
          hours = hours - 12;
        }
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

  function weatherImage(code){

    switch(code){
      case 0 | 1:
        return 2;
      case 2:
        return 13;
      case 3:
        return 6;
      case 45:
      case 48:
        return 7;
      case 51:
      case 53:
      case 55:
        return 20;
      case 56:
      case 57:
        return 20;
      case 61:
      case 63:
      case 65:
        return 11;
      case 66:
      case 67:
        return 11;
      case 71:
      case 73:
      case 75:
        return 26;
        break;
      case 77:
        return 26;
      case 80:
      case 81:
      case 82:
        return 11;
      case 85:
      case 86:
        return 26;
      case 95:
        return 8;
        break;
      case 96:
      case 99:
        return 19;
        break;
      default:
        return 2;
    }

  }

  async function updateQuote() {
    // Fetch a random quote from the Quotable API

    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    if (response.ok) {
      // Update DOM elements
      if(data.quote.length < 125){
        quote.textContent = "\" " + data.quote + " \"";
        cite.textContent = "- " + data.author;
      }else{
        updateQuote();
      }
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  async function getWeather() {
    // Fetch a data from the Open Metro API
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.490825&longitude=-80.397917&daily=temperature_2m_max,weathercode&timezone=Canada/Eastern");
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      reading.textContent = Math.round(data.daily.temperature_2m_max[0]);
      forcastday1.textContent = days[new Date(data.daily.time[1]).getDay()];
      forcastday2.textContent = days[new Date(data.daily.time[2]).getDay()];
      forcastday3.textContent = days[new Date(data.daily.time[3]).getDay()];
      forcastday4.textContent = days[new Date(data.daily.time[4]).getDay()];
      forcastday5.textContent = days[new Date(data.daily.time[5]).getDay()];

      forcastreading1.textContent = Math.round(data.daily.temperature_2m_max[1]);
      forcastreading2.textContent = Math.round(data.daily.temperature_2m_max[2]);
      forcastreading3.textContent = Math.round(data.daily.temperature_2m_max[3]);
      forcastreading4.textContent = Math.round(data.daily.temperature_2m_max[4]);
      forcastreading5.textContent = Math.round(data.daily.temperature_2m_max[5]);

      statusimage.style["background-image"] = "url('./img/"+ weatherImage(data.daily.weathercode[0])+".png')";

      forcaststatus1.style["background-image"] = "url('./img/"+ weatherImage
      (data.daily.weathercode[1])+".png')";
      forcaststatus2.style["background-image"] = "url('./img/"+ weatherImage(data.daily.weathercode[2])+".png')";
      forcaststatus3.style["background-image"] = "url('./img/"+ weatherImage(data.daily.weathercode[3])+".png')";
      forcaststatus4.style["background-image"] = "url('./img/"+ weatherImage(data.daily.weathercode[4])+".png')";
      forcaststatus5.style["background-image"] = "url('./img/"+ weatherImage(data.daily.weathercode[5])+".png')";
      
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
  const forcastday1 = document.querySelector(".fd1");
  const forcastday2 = document.querySelector(".fd2");
  const forcastday3 = document.querySelector(".fd3");
  const forcastday4 = document.querySelector(".fd4");
  const forcastday5 = document.querySelector(".fd5");

  const forcastreading1 = document.querySelector(".fr1");
  const forcastreading2 = document.querySelector(".fr2");
  const forcastreading3 = document.querySelector(".fr3");
  const forcastreading4 = document.querySelector(".fr4");
  const forcastreading5 = document.querySelector(".fr5");

  const forcaststatus1 = document.querySelector(".fs1");
  const forcaststatus2 = document.querySelector(".fs2");
  const forcaststatus3 = document.querySelector(".fs3");
  const forcaststatus4 = document.querySelector(".fs4");
  const forcaststatus5 = document.querySelector(".fs5");
  

  // call updateQuote once when page loads
  window.onload = getWeather();

  /* function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    console.log("Mobile device detected");
    console.log(document.body.clientWidth);
  }*/

