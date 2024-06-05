// Set the date we're counting down to
var countDownDate = new Date("2024-08-11 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/h8zWPCig10qzSmrd/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}
document.querySelector("#trimite").addEventListener("click", SubForm);

// document.querySelector("#trimite").addEventListener("click", function(){
//   var name = document.getElementById("name").value;
//   var participants = document.getElementById("number-persons").value;
//   var textToDisplay = "Vor fi prezenti: " + name + " , " + participants + " persoane."
//
//   var mailToLink = "mailto:x@y.com?subject=Participanti petrece surpriza&body=" + encodeURIComponent(textToDisplay);
//   window.location.href = mailToLink;
//
// });

document.querySelector("#nu-pot").addEventListener("click", function(){
  alert("Ne pare rau ca nu poti veni! Te asteptam data viitoare!")
});
