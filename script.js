function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementsByClassName("main-content")[0].style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("main-content")[0].style.marginLeft= "0";
  }