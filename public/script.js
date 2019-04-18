$(document).ready(function() {
		$('#contact').on('click', function (e){
		e.preventDefault;
		console.log('вы нажали на кнопку');
	});
});

$(document).ready(function() {
        $('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});
});

$(document).ready(function(){
  $('.contact').click(function(){
  $("html, body").animate({ scrollTop: 2100 }, 800);
return false;
});
 
});

$(document).ready(function(){
  $('.portfolioo').click(function(){
  $("html, body").animate({ scrollTop: 1600 }, 800);
return false;
});
 
});

$(document).ready(function(){
  $('.about').click(function(){
  $("html, body").animate({ scrollTop: 700 }, 800);
return false;
});
 
});

$(document).ready(function(){
  $('.home').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 800);
return false;
});
 
});

$(document).ready(function(){
  $('.homeguzh').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 800);
return false;
});
 
});

