var canvas=null;
var video=null;
var poseNet=null;
var noseXNum=null;
var noseYNum=null;
var i=null;
var leftWristXNum=null;
var rightWristXNum=null;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseXNum=results[0].pose.nose.x;
        noseYNum=results[0].pose.nose.y;
        leftWristXNum=results[0].pose.leftWrist.x;
        rightWristXNum=results[0].pose.rightWrist.x;
        i=floor(leftWristXNum-rightWristXNum);
        console.log({noseX: noseXNum, noseY: noseYNum});
        console.log({i: i, leftWristX: leftWristXNum, rightWristX: rightWristXNum});
    }
}

function preload(){
}

function onModelLoaded(){
    console.log('PoseNet is initialized!');
}

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, onModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969a97');
    fill('#f90093');
    stroke('#f90093');
    square(noseXNum, noseYNum, i);
}