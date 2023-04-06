

const date = document.getElementById('dtae')
const userInput = document.getElementById("user-Input");
const dayJsObject = dayjs().format("dddd/MMM/DD     HH:mm") 
const buttons = document.querySelectorAll("button");
const containerDiv = document.querySelector(".container-lg");
const currentHour = dayjs().hour();
const textAreas = document.querySelectorAll(".description");
const save = document.getElementById("saved")
const clearText = document.getElementById("clear");




$(function () {
////ON CLICK EVENT THIS FUNCTION WILL GO THROUGH EACH DIV ELEMENT AND LOOK FOR BUTTON TAG AND INVOKE  THE PUSHTOSTORAGE FUNCTION///////////////
  $('button').click(function(event) {
    if (event.target.tagName === "BUTTON") {
      pushToStorage();
     
    }
  });
  //// THIS FUNCTION WILL GO THROUGH EACH TEXTAREA TAG AND PUSH USER-INPUT IN LOCAL STORAGE/////////////////////////////
  function pushToStorage() {
    $('textarea').each(function() {
      localStorage.setItem(this.id, this.value);
    });
  //////HERE YOU CAN GET LOCALSTORAGE VALUE//////////
    $('textarea').each(function() {
      var showItem = localStorage.getItem(this.id);
      $(userInput).innerHTML = showItem;
     
    });
  }
  
 
  ////////THIS WILL GO THROUGH EVERY DIV ELEMENT AND ADD THE CLASS ACCORDING TO THE HOUR///////////////
  
  Array.from(containerDiv.children).forEach(child => {
    const hour = parseInt(child.id);
    
  
    if (hour < currentHour) {
      child.classList.add("past");
    } else if (hour === currentHour) {
      child.classList.add("present");
    } else {
      child.classList.add("future");
    }
  });



  date.innerHTML=dayJsObject;


});








  