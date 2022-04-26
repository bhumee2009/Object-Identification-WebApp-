status3="";
object3=[];

function preload(){
    img3=loadImage('fruit.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status3=true;
    ObjectDetector.detect(img3, gotResults);

}

function draw(){
    image(img3, 0, 0, 640, 420);
    
    if(status3 != ""){

        for(i=0; i<object3.length; i++){

            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("object").innerHTML=object3.length + "Objects Detected";

            fill('red');
            percent=floor(object3[i].confidence*100);
            text(object3[i].label + " " + percent + "%", object3[i].x +15, object3[i].y+15);
            noFill();
            stroke('red');
            rect(object3[i].x, object3[i].y, object3[i].width, object3[i].height);

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
        object3=results;
    }
}