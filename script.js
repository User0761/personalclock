function displayTime(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var currentTime = hour + ":" + minute + ":" + second;
  document.getElementById("time").innerHTML = currentTime;
  greeting = ""
  if(hour < 12){
    greeting = "Good morning!";
  }else if(hour < 17){
    greeting = "Good afternoon!";
  }else{
    greeting = "Good evening!"
  }
  document.getElementById("greeting").innerHTML = greeting;
  var day = date.getDay();
  var displayDay = " ";
  switch(day){
   case 0:
     displayDay = "Sunday";
     break;
   case 1:
     displayDay = "Monday";
     break;
   case 2:
     displayDay = "Tuesday";
     break;
   case 3:
     displayDay = "Wednesday";
     break;
   case 4:
     displayDay = "Thursday";
     break;
   case 5:
     displayDay = "Friday";
     break;
   case 6:
     displayDay = "Saturday";
     break;
 }
 document.getElementById("day").innerHTML = "It is " + displayDay + ".";

}
setInterval(displayTime, 1000);