/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function clickbutton() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
       {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 
  //  document.getElementById("mainBtn").addEventListener("click", redirectFunction);
        
        function redirectFunction(){
            window.location.href = "https://www.example.com";
            // You can also use window.location.replace method
            
            
            window.location.replace("https://www.example.com");
             
        }
    
