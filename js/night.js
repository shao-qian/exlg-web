function openNightMode(){
	document.querySelector("body").className+=" night";
	// document.querySelector("html").classList.add("night");
	var nlist=document.querySelector("body").childNodes;
	for(var i=0;i<nlist.length;i++){
		nlist[i].className+=" night";
	}
}
// window.onload=function(){
// 	var d = new Date();
// 	var nowhour = d.getHours();
// 	if(nowhour>=10||nowhour<=6){
// 		openNightMode();
// 	}
// }
$(document).ready(function(){
	var d = new Date();
	var nowhour = d.getHours();
	if(nowhour>=10||nowhour<=6){
		openNightMode();
	}
});