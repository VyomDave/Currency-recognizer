Webcam.set({
    width: 300,
    height: 300,
    img_format: 'png',
    png_quality: 90
});



function capture() {
    Webcam.snap(function (snap) {
        document.getElementById("snapshot").innerHTML = `<img src=${snap} id="output">`;
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eenQOVMTH/model.json", modelloaded)


function modelloaded() {
    console.log("model has been loaded")

}

function identify() {
    image = document.getElementById("output");
    classifier.classify(image, output);
}

function output(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results);
        object_name = results[0].label;
        confidence = results[0].confidence.toFixed(3) * 100;
        document.getElementById("object_result").innerHTML = object_name;
        document.getElementById("accuracy_result").innerHTML = confidence + "%";
    }
}

function guide(){
    var speech = window.speechSynthesis;
    var speakdata1 = "tap on the screen to start"
    var speak_this1 = new SpeechSynthesisUtterance(speakdata1);
    speech.speak(speak_this1);
    setTimeout(function(){
      },3000
      )
 
 

}

function start(){
    var speech = window.speechSynthesis;
    var speak_data = "Hold the note in front of the camera and wait for 5 seconds";
    var speak_this = new SpeechSynthesisUtterance(speak_data);
  
    speech.speak(speak_this);
    Webcam.attach("#camera");
    setTimeout(function(){
      capture()
    },6000
    )
}
