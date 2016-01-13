	
$(function() {
        var nav = $('#menu-p');   
      $(window).scroll(function () { 
        if ($(this).scrollTop() > 110) { 
          nav.css("top", "0"); 
        } else { 
          nav.css("top", "50"); 
        } 
      });  
});

  
		
