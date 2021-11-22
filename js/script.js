function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function sobreMim(){
	if(document.getElementById("divinfo").style.display == "none"){
	document.getElementById("divinfo").style.display = "block";
}
else{
	document.getElementById("divinfo").style.display = "none";
}
}

function exp(){
	if(document.getElementById("divexp").style.display == "none"){
	document.getElementById("divexp").style.display = "block";
}
else{
	document.getElementById("divexp").style.display = "none";
}
}

function proj(){
	if(document.getElementById("divproj").style.display == "none"){
	document.getElementById("divproj").style.display = "block";
}
else{
	document.getElementById("divproj").style.display = "none";
}
}