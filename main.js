

function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tsRtJ6OED/model.json", modelReady);
}

function modelReady() {
    console.log("SUCCESS");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else { 
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        color = "rgb(" + r + "," + g + "," + b +")";
        document.getElementById("sounds").style. color = color;
        document.getElementById("accuracy").style. color = color;
        console.log(results);
        sound = results[0].label;
        accuracy = results[0].confidence;
        document.getElementById("sounds").innerHTML = "Sound: " + sound;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + accuracy.toFixed(2);
        animal= document.getElementById("images");
        if (sound == "cat") {
            images.src = "cat gif.gif";

        } else if (sound == "dog") {
            images.src = "dog gif.gif";

        } else if (sound == "wolf") {
            images.src = "wolf gif.gif";

        } else if(sound == "cow"){
            images.src = "cow gif.gif";

        }else{
            images.src = "ear.png";
        }
    }


}