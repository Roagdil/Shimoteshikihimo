
 // Otra forma de ocultar la pantalla de carga es utilizando un evento de carga
  window.addEventListener("load", ()=>
    document.getElementById("carga").style.display = "none"
  );
i = true;
index = 0;
video = document.getElementsByTagName("video")[0];
boton = document.getElementsByClassName("boton")[0];
boton.value = "Play";
boton.addEventListener("click",()=>reproducir())
imagenes = document.getElementsByClassName("imagenes")[0]
lista = ["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png","./img/11.png","./img/12.png","./img/13.png","./img/14.png","./img/15.png","./img/16.png"];
video.addEventListener("ended",()=>clearInterval(t));
for(v = 0; v < lista.length; v++){
  fetch(lista[v])
  .then((response) => {
    console.log("response.status =", response.status); // response.status = 200
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    lista[v] = objectURL;
  });
}

function reproducir(){
   
  if (i){
    
    video.style.visibility="visible";
    imagenes.style.visibility="visible";
    video.volume = 0.2;
    video.play();
    boton.value = "Pause";
    
    t = setInterval(cambiarImagen,200);
    i = false;
    
  }else{
    video.pause();
    i = true;
    boton.value = "Play";
    clearInterval(t);
  }
  
}



function cambiarImagen(){
  
  
  imagenes.src= lista[index];
  index = index == 15 ? 0 : index +1;
  

}

