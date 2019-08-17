$(document).ready(
     (function () {
         'use strict';

    var constraints = {
        video: {
            width: 720,
            height: 576,
            facingMode: "environment"
        }
    };

    var video = document.querySelector('video');

    function handleSuccess(stream) {
      window.stream = stream; // only to make stream available to console
      video.srcObject = stream;
    }

    function handleError(error) {
      console.log('getUserMedia error: ', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);
    const canvas = document.querySelector('#canvas-element');
    var i = 0;
    var imgArray = new Array();
    <!--setInterval(explode, 100); -->
    $( "#add" ).click(function() {
       canvas.width = video.videoWidth;
       canvas.height = video.videoHeight;
       canvas.getContext('2d').drawImage(video, 0, 0);
       var str =  $( "#imgInp" ).val();
       var newElement2 = '<tr><td><div><img id="screenshot-img'+i+'" src=""></div><input name="imgInp'+i+'" type="text" id="imgInp'+i+'" value="'+str+'"/></td></tr>';
       $( "#mytable" ).append( $(newElement2) );
	   
       const img = document.querySelector('#screenshot-img'+i);
       img.src = canvas.toDataURL('image/png');
       imgArray[i] = new Image();
       imgArray[i].src = img.src';    
       i += 1;
	    
    }); 
    $( "#send" ).click(function() {
	   const img1 = document.querySelector('#screenshot-img0');
       const show1 = document.querySelector('#show-img1');
       show1.src=img1.src;
       console.log(imgArray)
    });
    function explode(){
       canvas.width = video.videoWidth;
       canvas.height = video.videoHeight;
       canvas.getContext('2d').drawImage(video, 0, 0);
      const show1 = document.querySelector('#show-img1');
      show1.src = canvas.toDataURL('image/png');
    };   
	})()
);

