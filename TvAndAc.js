status4="";
object4=[];

function preload(){
    img4=loadImage('ac and tv.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status4=true;
    ObjectDetector.detect(img4, gotResults);

}

function draw(){
    image(img4, 0, 0, 640, 420);
  
    if(status4 != ""){

        for(i=0; i<object4.length; i++){

            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("object").innerHTML=object4.length + "Objects Detected";

            fill('red');
            percent=floor(object4[i].confidence*100);
            text(object4[i].label + " " + percent + "%", object4[i].x +15, object4[i].y+15);
            noFill();
            stroke('red');
            rect(object4[i].x, object4[i].y, object4[i].width, object4[i].height);

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
        object4=results;

    }
}