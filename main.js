function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uqzBt3n6U/model.json', modelReady);
}

var Dog = 0;
var Cat = 0;
var Tiger = 0;
var Cow = 0;

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255 + 1);
        g = Math.floor(Math.random() * 255 + 1);
        b = Math.floor(Math.random() * 255 + 1); 

        document.getElementById("result_label").innerHTML = 'Detected Voice is of - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+r+", "+g+", "+b+")";

        document.getElementById("number").innerHTML = "Detected Dog - " + Dog + " Detected Cat - " + Cat + " Detected Tiger - " + Tiger + " Detected Cow - " + Cow;
        document.getElementById("number").style.color = "rgb("+r+", "+g+", "+b+")";

        img = document.getElementById("animal_img");
       
        if(results[0].label == "cat"){
            img.src = "cat.png";
            Cat = Cat + 1;
            
        }
        else if(results[0].label == "dog"){
            img.src = "dog.png";
            Dog = Dog +1;
        }
        else if(results[0].label == "tiger"){
            img.src = "tiger.png";
            Tiger = Tiger + 1;
        }
        else if(results[0].label == "cow"){
            img.src = "cow.png";
            Cow = Cow + 1;
        } 
        else{
            img.src = "human-ear.png";
        }
    }
}