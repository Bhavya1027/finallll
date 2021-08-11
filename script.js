function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
      x.className += " responsive";
      document.getElementById("myTopnav").style.height="95vh";
      document.getElementById("nav").style.display = "block";
      // document.getElementById("nav").style.padding = "10%";
      document.getElementById("nav").style.textAlign = "center";
      document.getElementById("logo").style.alignSelf = "center";
      document.getElementById("logo").style.width = "90%";  
      document.getElementById()        
      document.getElementById("navi").style.flexDirection = "column";
      document.getElementById("listItem").style.marginBottom = "25%";
      document.getElementById("listItem2").style.marginBottom = "25%";
      document.getElementById("listItem4").style.marginBottom = "25%";
      document.getElementById("listItem3").style.marginBottom = "25%";
      // document.getElementById("listItem").style.width = "100%";
      // document.getElementById("listItem").style.padding= "7%";
      // document.getElementById("bu1").style.padding= "10%";
      document.getElementById("menuButton").className = "fa fa-times" ;
    } else {
      x.className = "header";
      document.getElementById("nav").style.display = "none";
      x.style.height = "auto";
      document.getElementById("menuButton").className = "fa fa-bars" ;
      document.getElementById("logo").style.width = "70%";
  
    }
  } 

  


  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myTopnav").style.padding = "0% 10%";
    } else {
      document.getElementById("myTopnav").style.padding = "1% 10%";
    }
  } 


  function closeFunction(){
    if(window.innerWidth <= 710 ){
      var x = document.getElementById("myTopnav");
      x.className = "header";
      document.getElementById("nav").style.display = "none";
      x.style.height = "auto";
      document.getElementById("menuButton").className = "fa fa-bars" ;
    }
  }
