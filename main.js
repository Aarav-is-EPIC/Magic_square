noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas = createCanvas(400,400);
    video=createCapture(VIDEO);
    canvas.position(590,160);
    video.size(550,550);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);



}
function modelLoaded(){
    console.log("Model has been  Loaded");
}
function gotPoses(results){
if(results.length > 0){

    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("xvalue of the nose is="+ noseX +"y value of the nose is="+noseY);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.x;
    diffrence=floor(rightWristX - leftWristX)
    console.log("Leftwrist="+leftWristX+"rightwrist"+rightWristX+"diffrence"+diffrence);
    

}}

function draw(){
    background("cyan");
    document.getElementById("square_side").innerHTML = "The square side will be :"+ diffrence + "pixels";
    fill("#9000ff");
    stroke("#9000ff");
    square(noseX,noseY,diffrence);
}


