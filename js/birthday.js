$(document).ready(function(){
	var birth =[[0,0],[5,7],[8,17],[0,0],[0,0],[12,6],[8,10],[11,10],[0,0],[1,2],[4,21],[1,16],[8,10]]
	var da = new Date();
	var nmon = da.getMonth();
	var nday = da.getDate();
	
	console.log(nmon+" "+nday);
	var tep=document.querySelectorAll(".cul li");
	var ter=document.querySelectorAll(".cul li a");
	var ten=document.querySelectorAll(".cul li a p");
	for(var i=1;i<birth.length;i++){
		console.log(birth[i][0]+" "+birth[i][1]);
		if(nmon+1==birth[i][0]&&nday==birth[i][1]){
			tep[i].className="cheer";
			ter[i].title="祝 "+ten[i].innerText+" 生日快乐！";
		}
	}
});