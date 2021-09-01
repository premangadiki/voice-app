var speechrecognition = window.webkitSpeechRecognition;

var recognition = new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);

    if(content=="take my selfie"){
        console.log("taking your selfie");
        speak();
    }
}

 function speak(){
     var synth = window.speechSynthesis;
     speak_data = "taking your selfie in 5 seconds";
     var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
 }

 camera=document.getElementById("camera");

 Webcam.set({
     width:360,
     height:250,
     image_format:'jpeg',
     jpeg_quality=100
 });

 