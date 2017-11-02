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
  $$('#btnaud').on('click',capturaudio);


}
function capturaudio(){
  console.log("captura audio");
  navigator.device.capture.captureAudio(captureSucces, captureError,{duration: 20});
  
}

var captureSucces = function(mediaFiles){
  var i, path, len;
  for(i=0, len = mediaFiles.length; i<len; i++){
    path = mediaFiles[i].fullPath;
    $$('#audio').attr('src',path);
    console.log(path);
  }
};

var captureError = function(error){
  navigator.notification.alert('Error code: '+error,code, null, 'Capture Error');
}

