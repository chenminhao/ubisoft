// alert('111');
var login=document.getElementById('login');

// console.log(login);

var password=document.getElementById('password');
// console.log(password);
var passwords=document.getElementById('passwords');

var rows=document.getElementsByTagName('tr');

var names=document.getElementById('names');
console.log(name);

var idcare=document.getElementById('idcare');
// console.log(rows);

var sub=document.getElementById('sub');
// console.log(sub);



var flag = false;

var pattern1=/^[a-zA-Z][a-zA-Z0-9]{3,11}$/;

var pattern2=/^[a-zA-Z0-9]{6,11}$/;

var pattern3=/^$/;

var pattern4=/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;

var pattern5=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;


login.addEventListener('focus',focus,false);

password.addEventListener('focus',focus,false);

passwords.addEventListener('focus',focus,false);

names.addEventListener('focus',focus,false);

idcare.addEventListener('focus',focus,false);

login.addEventListener('blur',check);

password.addEventListener('blur',check);

passwords.addEventListener('blur',check);

names.addEventListener('blur',check);

idcare.addEventListener('blur',check);

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
		break;
		case passwords:
		rows[2].lastElementChild.innerHTML='6-11位数字字母组成';
		rows[2].lastElementChild.style.color='#000';
		break;
		case names:
		rows[3].lastElementChild.innerHTML='请输入名字';
		rows[3].lastElementChild.style.color='#000';
		break;
		case idcare:
		rows[4].lastElementChild.innerHTML='18位身份证号';
		
		rows[4].lastElementChild.style.color='#000';

	}
}
function check(){
	var res1=pattern1.test(login.value);

	var res2=pattern2.test(password.value);

	var res4=pattern4.test(names.value);

	var res5=pattern5.test(idcare.value);
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
						}else if(res2){ 
							this.style.outline = '1px solid rgba(0,255,0,0.8)';
							rows[1].lastElementChild.innerHTML = '密码输入正确！';
							rows[1].lastElementChild.style.color = 'rgba(0,255,0,0.8)';	
						}else{ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[1].lastElementChild.innerHTML = '密码不合法！';
							rows[1].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
						}
						break;
						case passwords:
		if(passwords.value == ''){ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[2].lastElementChild.innerHTML = '密码不能为空！';
							rows[2].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false;
						}else if(password.value==passwords.value){ 
							this.style.outline = '1px solid rgba(0,255,0,0.8)';
							rows[2].lastElementChild.innerHTML = '密码一致';
							rows[2].lastElementChild.style.color = 'rgba(0,255,0,0.8)';	
							flag=true;
						}else{ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[2].lastElementChild.innerHTML = '密码不一致！';
							rows[2].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false; 
						}
						break;	
						case names:
		if(names.value == ''){ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[3].lastElementChild.innerHTML = '姓名不能为空';
							rows[3].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false;
						}else if(res4){ 
							this.style.outline = '1px solid rgba(0,255,0,0.8)';
							rows[3].lastElementChild.innerHTML = '姓名输入正确！';
							rows[3].lastElementChild.style.color = 'rgba(0,255,0,0.8)';	
							flag=true;
						}else{ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[3].lastElementChild.innerHTML = '姓名不合法！';
							rows[3].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false; 
						}
						break;	
						case idcare:
		if(idcare.value == ''){ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[4].lastElementChild.innerHTML = '身份号码不能为空！';
							rows[4].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false;
						}else if(res5){ 
							this.style.outline = '1px solid rgba(0,255,0,0.8)';
							rows[4].lastElementChild.innerHTML = '身份号码正确！';
							rows[4].lastElementChild.style.color = 'rgba(0,255,0,0.8)';	
							flag=true;
						}else{ 
							this.style.outline = '1px solid rgba(255,0,0,0.8)';
							rows[4].lastElementChild.innerHTML = '身份号码不合法！';
							rows[4].lastElementChild.style.color = 'rgba(255,0,0,0.8)';
							flag=false; 
						}
						break;					
	}
	if(res1&&res2&&res4&&res5&&flag){ 
		sub.removeAttribute('disabled');
	}else{ 
		sub.setAttribute('disabled','disabled');
	}
}
