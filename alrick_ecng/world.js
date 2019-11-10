var start = 0;

function move_js()
{
  document.getElementById("00Div").style.background = "white";
  document.getElementById("01Div").style.background = "white";
  document.getElementById("02Div").style.background = "white";
  //alert("forward"); 
  document.getElementById("0"+start+"Div").style.background = "red";
  start++;
}

function turn_js(val)
{
  alert(val);
}
