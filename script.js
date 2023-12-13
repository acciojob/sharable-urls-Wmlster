// your code here
let btn=document.getElementById("button");

btn.addEventListener("click",event);
 
function event() {

	let text=document.getElementById("url");
	let txt="";
	txt+=text.innerText;
	txt+='?';


	let f1=document.getElementById("name");
	txt+=f1.name;
	txt+='=';

	txt+=f1.value;

	txt+='&'

	
	let f2=document.getElementById("year");
	txt+=f2.name;
	txt+='=';

	txt+=f2.value;


	text.innerHTML=txt;
	
}