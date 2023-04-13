

const date = document.getElementById('dtae')
const userInput = document.getElementById("user-Input");
const dayJsObject = dayjs().format("dddd/MMM/DD|HH:mm") 
const containerDiv = document.querySelector(".container-lg");
const currentHour = dayjs().hour();



$(function () {
  loadValues() ;
  //// THIS FUNCTION WILL GO THROUGH EACH TEXTAREA TAG AND PUSH USER-INPUT IN LOCAL STORAGE/////////////////////////////

  $('.saveBtn').click(function(){
    let value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');
    localStorage.setItem(key,value);

  })
  //////HERE YOU CAN GET LOCALSTORAGE VALUE//////////
  
function loadValues() {
  $('.time-block').each(function() {
    let key = $(this).attr('id');
    let value = localStorage.getItem(key);
    if (value) {
      $(this).find('.description').val(value);
    }
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








  