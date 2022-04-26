status1="";
object1=[];

function preload(){
    img1=loadImage('bottle.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status1=true;
    ObjectDetector.detect(img1, gotResults);

}

function draw(){
    image(img1, 0, 0, 640, 420);
    
    if(status1 != ""){

        for(i=0; i<object1.length; i++){

            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("object").innerHTML=object1.length + "Objects Detected";

            fill('red');
            percent=floor(object1[i].confidence*100);
            text(object1[i].label + " " + percent + "%", object1[i].x +15, object1[i].y+15);
            noFill();
            stroke('red');
            rect(object1[i].x, object1[i].y, object1[i].width, object1[i].height);

        }
    }
}

function back(){
    window.location="index.html";
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object1=results;
    }
}