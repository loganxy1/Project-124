function setup(){
    video = createCapture(VIDEO);
    video.position(100, 175);
    video.size(550, 500);

    canvas = createCanvas(600, 500);
    canvas.position(800, 175);
    background("white");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}