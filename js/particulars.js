var carrousel=document.getElementById('carrousel');

var uls=carrousel.getElementsByTagName('ul')[0];

// console.log(uls);
// console.log(carrousel);

var lis=uls.getElementsByTagName('li');

// console.log(lis); 
var ols=carrousel.getElementsByTagName('ol')[0];

// console.log(ols);

var oLi=ols.getElementsByTagName('li');

// console.log(oLi);
var dleft=document.getElementById('dleft');

var dright=document.getElementById('dright');

var index=1;

var animated=false;

var len=6;

var timer=null;

for(var i=0;i<oLi.length;i++){
	oLi[i].onclick=function(){
		var myIndex=parseInt(this.getAttribute('index'));
		var offset=-800*(myIndex-index);
		if(!animated){
			animate(offset);
		}
		index=myIndex;
		showoLi();
	}
}
function animate(offset){
	animated=true;
	var time=300;
	var inteval=5;
	var speed=offset/(time/inteval);
	var target=parseInt(uls.style.left)+offset;
	var go=function(){
		if((speed>0&&parseInt(uls.style.left)<target)||(speed<0&&parseInt(uls.style.left)>target)){
			uls.style.left=parseInt(uls.style.left)+speed+'px';
			setTimeout(go,inteval);
		}else{
			uls.style.left=target+'px';
			if(target>-800){
				uls.style.left=-800*len+'px';

			}
			if(target<(-800*len)){
				uls.style.left='-800px';
			}
			animated=false;
		}
	}
	go();

}
function showoLi(){
	for(var i=0;i<oLi.length;i++){
		oLi[i].className='cls';
	}
	oLi[index-1].className='clr';
}
function play(){
	clearInterval(timer);
	timer=setTimeout(function(){
		dright.onclick();
		play();
	},3000);
}
function stop(){
	clearTimeout(timer);
}
dright.onclick=function(){
	if(index==6){
		index=1;
	}else{
		index+=1;
	}
	if(!animated){
		animate(-800);
	}
	showoLi();
}
dleft.onclick=function(){
	if(animated){
		return;
	}
	if(index==1){
		index=6;
	}else{
		index-=1;
	}
	if(!animated){
		animate(800);
	}
	showoLi();
}
// carrousel.addEventListener("mouseover", function(e) {
//     var box = carrousel.getBoundingClientRect();
//     if((e.clientX - box.left) < ((box.right - box.left) / 2)){
//         carrousel.style.cursor = "url('./images/arrowL.png')";
//     }
//     else{
//         carrousel.style.cursor = "url('./images/arrowR.png')";
//     }
// });
// carrousel.addEventListener("mouseout", function() {
//     carrousel.style.cursor = "default";
// });
dleft.addEventListener('mouseover',function(e){
	dleft.style.cursor="url('images/arrowR.ico'),auto";

});
dleft.addEventListener("mouseout", function() {
    dleft.style.cursor = "default";
});
dright.addEventListener('mouseover',function(e){
	dright.style.cursor="url('images/arrowL.ico'),auto";

})
dright.addEventListener("mouseout", function() {
    dright.style.cursor = "default";
});
carrousel.onmouseover=stop;
carrousel.onmouseout=play;
play();

/*------------------放大镜效果--------------------*/
var thumbnail=document.getElementById('thumbnail');

var coverDiv=document.getElementById('cover');

var flagDiv=document.getElementById('flag');

var Original=document.getElementById('Original');

var bigImg=document.getElementById('bigImg');

coverDiv.onmousemove=function(e){
	var ev=e||window.event;
	var mouseX=0;
	var mouseY=0;
	mouseX=ev.offsetX;
	mouseY=ev.offsetY;
	flagDiv.style.display="block";

	Original.style.display="block";

	flagDiv.style.left=(mouseX-flagDiv.offsetWidth/2)+'px';

	flagDiv.style.top=(mouseY-flagDiv.offsetHeight/2)+'px';

	flagDiv.style.left=parseInt(flagDiv.style.left)>(coverDiv.offsetWidth-flagDiv.offsetWidth)?(coverDiv.offsetWidth-flagDiv.offsetWidth)+'px':flagDiv.style.left;
	//左边
	flagDiv.style.left=parseInt(flagDiv.style.left)<0?0+'px':flagDiv.style.left;

	flagDiv.style.top=parseInt(flagDiv.style.top)>(thumbnail.offsetHeight-flagDiv.offsetHeight)?(thumbnail.offsetHeight-flagDiv.offsetHeight)+'px':flagDiv.style.top;
	//上边
	flagDiv.style.top=parseInt(flagDiv.style.top)<0?0+'px':flagDiv.style.top;

	bigImg.style.left=-2*parseInt(flagDiv.style.left)+'px';
	bigImg.style.top=-2*parseInt(flagDiv.style.top)+'px';
}
thumbnail.onmouseout = function() { 
			flagDiv.style.display = 'none';
			Original.style.display = 'none';

		}
//滚动图片
var oPlay=document.getElementById('play');

var oUl=oPlay.getElementsByTagName('ul')[0];

var oLi=oUl.getElementsByTagName('li');

var oImg=oPlay.getElementsByTagName('img');

var speed=3;

oUl.innerHTML+=oUl.innerHTML;

// for(var i=0;i<oImg.length;i++){

// oImg[i].offsetWidth=liwidth;

// oImg[i].style.width=oImg[i].offsetWidth+'px';

// oLi[i].offsetWidth=liwidth;
// oLi[i].style.width=oLi[i].offsetWidth+'px';
// }
// oImg[0].style.width=oImg[0].offsetWidth+'px';
// 
// console.log(oImg[0].style.width);

oUl.style.width = (oLi.length * oLi[0].offsetWidth) + 'px';

timer=setInterval(run,30);

function run(){
	if(oUl.offsetLeft < -oUl.offsetWidth/2){ 
				oUl.style.left = 0;
			}else if(oUl.offsetLeft > 0){
				oUl.style.left = -oUl.offsetWidth/2 + 'px'; 
			}

			oUl.style.left = (oUl.offsetLeft+speed)+'px';
}

oPlay.onmouseover = function() { 
			clearInterval(timer);
		}

oPlay.onmouseout = function() { 
			clearInterval(timer);
			timer = setInterval(run,30);
		}