status2="";
object2=[];

function preload(){
    img2=loadImage('desk1.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status2=true;
    ObjectDetector.detect(img2, gotResults);

}

function draw(){
    image(img2, 0, 0, 640, 420);
   
    if(status2 != ""){

        for(i=0; i<object2.length; i++){

            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("object").innerHTML=object2.length + "Objects Detected";

            fill('red');
            percent=floor(object2[i].confidence*100);
            text(object2[i].label + " " + percent + "%", object2[i].x +15, object2[i].y+15);
            noFill();
            stroke('red');
            rect(object2[i].x, object2[i].y, object2[i].width, object2[i].height);

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
        object2=results;
    }
}