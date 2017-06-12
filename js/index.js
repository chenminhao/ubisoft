//轮播图
function scrolls() {
    var container = document.getElementById('container');
    var list = document.getElementById('lists');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 3;
    var animated = false;
    var timer = null;
    lists.style.left = -((lists.offsetWidth) / 5) + 'px';
    var listwidth = (lists.offsetWidth) / 5;
    console.log(list);

    function animate(offset) {
        animated = true;
        var time = 600;
        var inteval = 10;
        var speed = offset / (time / inteval);
        var target = parseInt(list.style.left) + offset;
        var go = function() {
            if ((speed > 0 && parseInt(list.style.left) < target) || (speed < 0 && parseInt(list.style.left) > target)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            } else {
                list.style.left = target + 'px';
                if (target > (-listwidth)) {
                    list.style.left = (-listwidth * len) + 'px';
                } else if (target < (-listwidth * len)) {
                    list.style.left = (-listwidth) + 'px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].className = '';
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        clearInterval(timer);
        timer = setTimeout(function() {
            next.onclick();
            play();
        }, 3000);
    }

    function stop() {
        clearTimeout(timer);
    }
    next.onclick = function() {
        if (index == 3) {
            index = 1;
        } else {
            index += 1;
        }
        if (!animated) {
            animate(-listwidth);
        }
        showButton();
    }
    prev.onclick = function() {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 3;
        } else {
            index -= 1;
        }
        if (!animated) {
            animate(listwidth);
        }
        showButton();
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -listwidth * (myIndex - index);
            if (!animated) {
                animate(offset);
            }
            index = myIndex;
            showButton();
        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}
window.onresize = function() {
    history.go(0);
}
window.onload = function() {
    scrolls();
}
$(function() {
    $('nav>ul>li:eq(1)>button').toggle(function() {
        if (!$(".subnav").is(":animated")) {
            $('.subnav').show(700);
        }
    }, function() {
        if (!$(".subnav").is(":animated")) {
            $('.subnav').hide(700);
        }
    });
    $('nav>div').toggle(function() {
        if (!$(".search").is(":animated")) {
            $('.search').slideDown(500);
        }
    }, function() {
        if (!$(".search").is(":animated")) {
            $('.search').slideUp(500);
        }
    });
    $('.chooses li').bind('click', function() {
        $(this).addClass('choose').siblings().removeClass('choose');
        $('.box>ul').eq($('.chooses li').index($(this))).show().siblings().hide();
    })
    $('.moves img').each(function() {
        $(this).hover(function() {
            $(this).css({
                position: 'relative',
                top: '2px',
                left: '3px',
                boxShadow: '8px 5px 15px #555',
                opacity: '0.8'
            });
        }, function() {
            $(this).css({
                position: 'relative',
                top: 0,
                left: 0,
                boxShadow: '0px 0px 0px #fff',
                opacity: '1'
            });
        })
    });
    $('#play li').each(function() {
        $(this).hover(function() {
            $(this).children().show();
        }, function() {
            $(this).children('div').hide();
            $(this).children('span').hide();
        });
    });
    $('.Code a').hover(function() {
        $(this).children('div').filter(':not(:animated)').fadeIn("slow");
    }, function() {
        $(this).children('div').fadeOut("slow");
    });
    $('.btn').toggle(function() {
        $(this).prev('div').show();
    }, function() {
        $(this).prev('div').hide();
    });
    $('.response').toggle(function() {
        $(this).next('ol').show();
    }, function() {
        $(this).next('ol').hide();
    });
    $('.sub>li:eq(1)').toggle(function() {
        $(this).next().show();
    }, function() {
        $(this).next().hide();
    });
    $('.box>ul>li').hover(function() {
        $(this).children('div').filter(':not(:animated)').slideDown("slow");
    }, function() {
        $(this).children('div').slideUp("slow");
    });
    $('.videos>div').hover(function() {
        $(this).children().children('img').filter(':not(:animated)').fadeTo("slow", 1);
    }, function() {
        $(this).children().children('img').fadeTo("slow", .9);
    });
});