function soundClassifictaion() {
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/R1CmIRX9B/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
var cow = 0;
var cat = 0;
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_count").innerHTML = 'Detected Cow -' + cow + 'Detected Cat -' + cat;
        document.getElementById("result_label").innerHTML = 'Dectected Voice is of -' + results[0].label;
        img = document.getElementById('image');
        if(results[0].label == "Mooing"){
            img.src='mooing.gif';
            cow = cow + 1;
        }
        else if(results[0].label == "Meowing"){
            img.src='https://y-teach-blip.github.io/Project----108/meowing.gif';
            cat = cat + 1;
        }
        else{
            img.src= "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif" ;
        }
    }

    
}