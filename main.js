function startClassoficator(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a6__cf64o/.modelReadysab")
}

function modelReadysab(){
    classifier.classify(gotResult);
}