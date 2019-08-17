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
       imgArray[i] = canvas.toDataURL('image/png');
       i += 1;
    }); 
    $( "#send" ).click(function() {
       console.log(imgArray)
       $.ajax({
            type: 'POST',
            url: "http://cosapi.herokuapp.com/process",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(imgArray),
            success: function (data) {
                ///status.innerHTML = data;
                console.log(data)
                processed.src = 'data:image/png;base64,' + data
            },
            error: function () {
                alert('error');
            }
        })
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

