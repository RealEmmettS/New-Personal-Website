// generate some JS that will keep the copyright statement up-to-date
// Example: Copyright © [YEAR] SHAUGHNESSY

var d = new Date();
var year = d.getFullYear();
var text = "© " + year + " SHAUGHNESSY";

// On page load, change the text of id 'copyright' to the text variable
window.onload = function() {
  document.getElementById("copyright").innerHTML = text;
}