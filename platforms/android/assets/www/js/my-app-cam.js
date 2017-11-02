// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('deviceready',camera);

function camera(){
  console.log('Dispositivo Listo!');
  $$('#btn_imagen').on('click',tomarfoto);
  $$('#btn_video').on('click',capturavideo);
  $$('#btn_audio').on('click',grabaudio);


}

function tomarfoto(){
  document.location="foto.html";
}

function capturavideo(){
  document.location="video.html";
}

function grabaudio(){
  document.location="audio.html";
}



