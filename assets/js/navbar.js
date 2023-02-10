const headerNav = document.getElementById("header-nav");
headerNav.innerHTML= 
  '<nav class="navbar">'+
    '<button id="bar-toggler"class="navbar-toggler" aria-controls="bar-collapse-l" aria-expanded="false"><span id="navbar-toggler-icon">X</span></button>'+
    '<ul id="bar-collapse-l"  class="bar left " data-visible="false">'+
      '<li><a href="#"><span aria-hidden="true">LECCIONES</span></a></li>'+
      '<li><a href="#"><span aria-hidden="true">BIBLIOTECA</span></a></li>'+
      '<li><a href="#"><span aria-hidden="true">MIS CURSOS</span></a></li>'+
    '</ul>'+
    '<div class="logo" ><a href="./index.html">UTOPIA</a></div>'+

    '<ul id="bar-collapse-r"class="bar right">'+
      '<li><a href="#">TEMA</a></li>'+
      '<li><a href="#">LANG</a></li>'+
      '<li><a href="#">CONF</a></li>'+
      '<li><a href="./registrar.html">REGISTRATE</a></li>'+
    '</ul>'+
 '</nav>'
;
const navbarLeft = document.getElementById("bar-collapse-l");
const barToggle = document.getElementById("bar-toggler");

barToggle.addEventListener("click", () => {
  const visibility = navbarLeft.getAttribute("data-visible");
  if(visibility === "false"){
    navbarLeft.setAttribute("data-visible", true);
  }
  else{
    navbarLeft.setAttribute("data-visible", false);
  }
});