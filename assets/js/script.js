

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






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  