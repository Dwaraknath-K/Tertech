function openNav() 
{
  document.getElementById("mySidebar").style.width = "270px";
  if(screen.width>=768)
  document.getElementById("main").style.marginLeft = "270px";
}

function closeNav() 
{
  document.getElementById("mySidebar").style.width = "0";
  if(screen.width>=768)
  document.getElementById("main").style.marginLeft= "0";
}