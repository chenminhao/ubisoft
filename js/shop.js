$(function(){
	$('.Code a').hover(function(){
      $(this).children('div').filter(':not(:animated)').fadeIn("slow");
        // console.log('111');
    },function(){
       $(this).children('div').fadeOut("slow");
       // console.log('222');
    });
     $('.btn').toggle(function(){
      $(this).prev('div').show();
    },function(){
      $(this).prev('div').hide();
    });
    $('.choose li').click(function(){
      $(this).css('fontSize','20px').siblings().css('fontSize','16px');
    	$('.select>div').eq($('.choose li').index($(this))).show().siblings('div').hide();
    })
     $('.nav>div b').toggle(function(){
      $('.nav ul').eq($('.nav>div b').index($(this))).show();
    },function(){
      $('.nav ul').eq($('.nav>div b').index($(this))).hide();

    });
})