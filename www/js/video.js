// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',camera);

function camera(){
  $$('#btnvid').on('click',capturavideo);


}
function capturavideo(){
  console.log("tomar foto!!");
  navigator.device.capture.captureVideo(captureSucces, captureError,{duration: 40});
  
}

function onSuccess(imageURI){
  $$('#foto').attr('src',imageURI);
}

function onFail(message){
  console.log('Failed Because: '+message);
}

var captureSucces = function(mediaFiles){
  var i, path, len;
  for(i=0, len = mediaFiles.length; i<len; i++){
    path = mediaFiles[i].fullPath;
    $$('#foto').attr('src',path);
    console.log(path);
  }
};

var captureError = function(error){
  navigator.notification.alert('Error code: '+error,code, null, 'Capture Error');
}

