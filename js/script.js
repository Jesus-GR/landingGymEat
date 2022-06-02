
function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	video=document.getElementById('medio');
	video.addEventListener('click', presionar, false);
}

function presionar(){
	if(!video.paused && !video.ended){
		video.pause();
		// Dejamos de ejecutar la funcion procesarcuadros cada 0.033 segundos
		//window.clearInterval(bucle);
	 }
	 else{
		video.play();
		//Activamos el intervalo de ejecución
		//bucle=setInterval(procesarCuadros, 33);
	}
}

// Con esta función procesaremos los valores del array y los pasaremos a gris.

 window.addEventListener("load", iniciar, false);

