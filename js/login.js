// alert('111');
var login=document.getElementById('login');

// console.log(login);

var password=document.getElementById('password');
// console.log(password);

var rows=document.getElementsByTagName('tr');

// console.log(rows);

var sub=document.getElementById('sub');
// console.log(sub);

var flag = false;

var pattern1=/^[a-zA-Z][a-zA-Z0-9]{3,11}$/;

var pattern2=/^[a-zA-Z0-9]{6,11}$/;


login.addEventListener('focus',focus,false);
password.addEventListener('focus',focus,false);
login.addEventListener('blur',check);
password.addEventListener('blur',check);
function focus(){
	this.style.outline='1px solid #abcdef';
	switch(this){
		case login:
		rows[0].lastElementChild.innerHTML='请输入帐号';
		rows[0].lastElementChild.style.color='#000';
		break;
		case password:
		rows[1].lastElementChild.innerHTML='6-11位数字字母组成';
		rows[1].lastElementChild.style.color='#000';
	}
}
function check(){
	var res1=pattern1.test(login.value);
	var res2=pattern2.test(password.value);
	switch(this){
		case login:
		if (login.value=='') {
			this.style.outline='1px solid rgba(255,0,0,.8)';
			rows[0].lastElementChild.innerHTML='帐号不能为空!';
			rows[0].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
		}else if(res1){
			this.style.outline = '1px solid rgba(0,255,0,0.8)';
			rows[0].lastElementChild.innerHTML = '输入帐号正确！';
			rows[0].lastElementChild.style.color = 'rgba(0,255,0,0.8)';
							
		}
		else{
			this.style.outline = '1px solid rgba(255,0,0,0.8)';
			rows[0].lastElementChild.innerHTML = '该帐号不存在！';
			rows[0].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
		}
		break;
		case password:
		if(password.value == ''){ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[1].lastElementChild.innerHTML = '密码不能为空！';
							rows[1].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false;
						}else if(res2){ 
							this.style.outline = '1px solid rgba(0,255,0,0.8)';
							rows[1].lastElementChild.innerHTML = '密码输入正确！';
							rows[1].lastElementChild.style.color = 'rgba(0,255,0,0.8)';	
							flag=true;
						}else{ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[1].lastElementChild.innerHTML = '密码不合法！';
							rows[1].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false; 
						}
						break;				
	}
	if(res1&&res2&&flag){ 
		sub.removeAttribute('disabled');
	}else{ 
		sub.setAttribute('disabled','disabled');
	}
}
