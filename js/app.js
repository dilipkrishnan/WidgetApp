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