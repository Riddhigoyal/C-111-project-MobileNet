Webcam.set({
    height: 300,
    width: 310,
    image_format: "jpg",
    jpg_quality: 90,

    constraints:{
        facingMode: "environment"
    }
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='captured_img' src='" + data_uri +"'>";
    });
}

console.log ("ml5 version",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded(){
    console.log ("model loded successfully");
}

function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log (error);
    }

    if(results){
        console.log (results);
        document.getElementById("object_name").innerHTML= results[0].label;
    }
}