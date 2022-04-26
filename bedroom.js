status="";
object=[];

function preload(){
    img=loadImage('bedroom1.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status=true;
    ObjectDetector.detect(img, gotResults);

}

function draw(){
    image(img, 0, 0, 640, 420);
   
    if(status != ""){

        for(i=0; i<object.length; i++){

            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("object").innerHTML=object.length + "Objects Detected";

            fill('red');
            percent=floor(object[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x +15, object[i].y+15);
            noFill();
            stroke('red');
            rect(object[i].x, object[i].y, object[i].width, object[i].height);

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
        object=results;
    }
}