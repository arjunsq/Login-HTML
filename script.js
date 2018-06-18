
function validatesignup()
{
  //name check
  document.getElementById("vname").innerHTML="";
  var letters = /^[A-Za-z]+$/;
  if(document.forms["signup"]["name"].value.match(letters))
  {
    return true;
  }
  else
  {
    document.getElementById("vname").innerHTML='Please input alphabet characters only';
    return false;
  }
}