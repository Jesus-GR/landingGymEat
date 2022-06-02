
 function iniciar(){
	volumen = 0.5;
	Song = document.getElementById('audio');
	Duracion = Song.duration;
	

	ReproducirCancion = document.getElementById('play');
	InicioCancion = document.getElementById('inicio');
	RetrocesoCancion = document.getElementById('retroceso');
	AvanceCancion = document.getElementById('avance');
	barraProgreso =document.getElementById('barra');

	ReproducirCancion.addEventListener('click', presionar);

	PausarCancion.addEventListener('click', function (){Song.pause()});


	InicioCancion.addEventListener('click', function (){

			Song.pause();
			Song.currentTime = 0;

			});

	AvanceCancion.addEventListener('click', function(){ Song.currentTime += 5;});
			
	
	RetrocesoCancion.addEventListener('click', function(){Song.currentTime -= 5;});

	
	SubirCancion.addEventListener('click', function(){Song.volume += 0.1;});
			
	
	BajarCancion.addEventListener('click', function(){Song.volume -= 0.1;});

	   
}

function presionar(){
		   if(!Song.paused && !Song.ended) {
				ReproducirCancion.querySelector(".pause-btn").classList.toggle("hide");
				ReproducirCancion.querySelector(".play-btn").classList.toggle("hide");
				Song.pause();
				window.clearInterval(bucle);
		   }else{
				Song.play();
				ReproducirCancion.querySelector(".pause-btn").classList.toggle("hide");
				ReproducirCancion.querySelector(".play-btn").classList.toggle("hide");
				bucle=setInterval(estado, 1000);
		   }
   }
function estado(){
		   if(!Song.ended){
			   var total=parseInt(Song.currentTime*100/Duracion);
			   barraProgreso.style.width = total + "%";
			   barraProgreso.innerHTML = total + "%"; 
			   console.log(parseInt((Song.currentTime*100)/Duracion));
		   }else{
				   
			   window.clearInterval(bucle);
		   }
   }






window.addEventListener('load', iniciar, false);