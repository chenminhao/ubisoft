// alert($().jquery);
// $(function(){
// 	$('#checke').bind('click',function(){
//     $(this).addClass('choose').siblings().removeClass('choose');
//     // $('#check').eq($('.main-2 ul li').index($(this))).show().siblings().hide();
// 	});
// });
// console.log($('.checke li'));
// console.log($('.check>div'));
$('.checke li').bind('click',function(){
   	
	$(this).addClass('choose').siblings().removeClass('choose');
    $('.check>div').eq($('.checke li').index($(this))).show().siblings().hide();
})
//图片滚动hover
$('#play li').each(function(){
    $(this).hover(function(){
    $(this).children().show();
    },function(){
     $(this).children('div').hide();
     $(this).children('span').hide();    
    });
     $('.Code a').hover(function(){
      $(this).children('div').fadeIn("slow");
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
     
});
