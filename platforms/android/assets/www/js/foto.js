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
  $$('#btncam').on('click',tomarfoto);


}
function tomarfoto(){
  console.log("tomar foto!!");
  navigator.camera.getPicture(onSuccess, onFail,{
        sourceType: 1,
        quality: 50,
        destinationType: 1,
        allowEdit: false,
        correctOrientation: true,
        saveToPhotoAlbum: true
  });
}

function onSuccess(imageURI){
  $$('#foto').attr('src',imageURI);
}

function onFail(message){
  console.log('Failed Because: '+message);
}



