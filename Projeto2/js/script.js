function abrir(){
		 document.getElementById("container-texto1").style.display="none";
		 document.getElementById("container-section1").style.cssText="animation: expandir 1s forwards;"
		 document.getElementById("mais1").style.display="none";
		 document.getElementById("linha1").style.cssText="display: block;"
		 document.getElementById("linha2").style.cssText="display: block;"
		 document.getElementById("linha3").style.cssText="display: block;"
		 document.getElementById("linha4").style.cssText="display: block;"
		 document.getElementById("linha5").style.cssText="display: block;"
		 document.getElementById("linha6").style.cssText="display: block;"
		 document.getElementById("linha7").style.cssText="display: block;"
		 document.getElementById("linha8").style.cssText="display: block;"
		 document.getElementById("linha9").style.cssText="display: block;"
		 document.getElementById("X").style.cssText="display: block;"

		 document.getElementById("container-section1").addEventListener("animationend",function(){
		 	document.getElementById("container-texto1").style.cssText="display: none;"
		 })


}
function fechar(){
		 document.getElementById("container-section1").style.cssText="animation: diminuir 1s forwards;"
		 document.getElementById("mais1").style.display="block";
		 document.getElementById("linha1").style.cssText="display: none;"
		 document.getElementById("linha2").style.cssText="display: none;"
		 document.getElementById("linha3").style.cssText="display: none;"
		 document.getElementById("linha4").style.cssText="display: none;"
		 document.getElementById("linha5").style.cssText="display: none;"
		 document.getElementById("linha6").style.cssText="display: none;"
		 document.getElementById("linha7").style.cssText="display: none;"
		 document.getElementById("linha8").style.cssText="display: none;"
		 document.getElementById("linha9").style.cssText="display: none;"
		 document.getElementById("X").style.cssText="display: none;"

		 document.getElementById("container-section1").addEventListener("animationend",function(){
		 	document.getElementById("container-texto1").style.cssText="display: block; animation: aparecer 0.5s;";
		 });
		 }

function abrir_dois(){
		document.getElementById("container-texto2").style.display="none";
		 document.getElementById("container-section2").style.cssText="animation: expandir 1s forwards;"
		 document.getElementById("mais2").style.display="none";
		 document.getElementById("linha10").style.cssText="display: block;"
		 document.getElementById("linha11").style.cssText="display: block;"
		 document.getElementById("linha12").style.cssText="display: block;"
		 document.getElementById("linha13").style.cssText="display: block;"
		 document.getElementById("linha14").style.cssText="display: block;"
		 document.getElementById("X2").style.cssText="display: block;"

		 document.getElementById("container-section2").addEventListener("animationend",function(){
		 	document.getElementById("container-texto2").style.cssText="display: none;"
		 })

}

function fechar_dois(){
		 document.getElementById("container-section2").style.cssText="animation: diminuir 1s forwards;"
		 document.getElementById("mais2").style.display="block";
		 document.getElementById("linha10").style.cssText="display: none;"
		 document.getElementById("linha11").style.cssText="display: none;"
		 document.getElementById("linha12").style.cssText="display: none;"
		 document.getElementById("linha13").style.cssText="display: none;"
		 document.getElementById("linha14").style.cssText="display: none;"
		 document.getElementById("X2").style.cssText="display: none;"

		 document.getElementById("container-section2").addEventListener("animationend",function(){
		 	document.getElementById("container-texto2").style.cssText="display: block; animation: aparecer 0.5s;"
		 })

}
	function abrir_tres(){
		 document.getElementById("container-texto3").style.display="none";
		 document.getElementById("container-section3").style.cssText="animation: expandir 1s forwards;"
		 document.getElementById("mais3").style.display="none";
		 document.getElementById("linha15").style.cssText="display: block;"
		 document.getElementById("linha16").style.cssText="display: block;"
		 document.getElementById("linha17").style.cssText="display: block;"
		 document.getElementById("linha18").style.cssText="display: block;"
		 document.getElementById("linha19").style.cssText="display: block;"
		 document.getElementById("linha20").style.cssText="display: block;"
		 document.getElementById("linha21").style.cssText="display: block;"
		 document.getElementById("linha22").style.cssText="display: block;"
		 document.getElementById("X3").style.cssText="display: block;"

		 document.getElementById("container-section3").addEventListener("animationend",function(){
		 	document.getElementById("container-texto3").style.cssText="display: none;"
		 })

}
	function fechar_tres(){
		 document.getElementById("container-section3").style.cssText="animation: diminuir 1s forwards;"
		 document.getElementById("mais3").style.display="block";
		 document.getElementById("linha15").style.cssText="display: none;"
		 document.getElementById("linha16").style.cssText="display: none;"
		 document.getElementById("linha17").style.cssText="display: none;"
		 document.getElementById("linha18").style.cssText="display: none;"
		 document.getElementById("linha19").style.cssText="display: none;"
		 document.getElementById("linha20").style.cssText="display: none;"
		 document.getElementById("linha21").style.cssText="display: none;"
		 document.getElementById("linha22").style.cssText="display: none;"
		 document.getElementById("X3").style.cssText="display: none;"

		 document.getElementById("container-section3").addEventListener("animationend",function(){
		 	document.getElementById("container-texto3").style.cssText="display: block; animation: aparecer 0.5s;"
		 })
	}

		const checkpoint = 100;

	window.addEventListener("scroll",function(){
		  const currentScroll = window.pageYOffset;
  		if (currentScroll <= checkpoint) {
    		opacity = 0 - currentScroll / checkpoint;
  		} 
  		else {
    		opacity = 1;
  		}

		document.getElementById("container-pai1").style.opacity=opacity
	})

	const checkpoint2 = 400;

	window.addEventListener("scroll",function(){
		  const currentScroll = window.pageYOffset;
  		if (currentScroll <= checkpoint2) {
    		opacity = 0 - currentScroll / checkpoint2;
  		} 
  		else {
    		opacity = 1;
  		}

		document.getElementById("container-pai2").style.opacity=opacity
	})

		const checkpoint3 = 800;

	window.addEventListener("scroll",function(){
		  const currentScroll = window.pageYOffset;
  		if (currentScroll <= checkpoint3) {
    		opacity = 0 - currentScroll / checkpoint3;
  		} 
  		else {
    		opacity = 1;
  		}

		document.getElementById("container-pai3").style.opacity=opacity
	})
