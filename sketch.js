var speakerIMG, runningGirlIMG,quarterNoteIMG, TwoEightNotesIMG, EigthNoteIMG;
var girl, speaker, notes;
var ground; 

function preload(){
    speakerIMG=loadImage("Images/SpeakerImage.png");
    runningGirlIMG= loadImage("Images/Untitled1.jpg");
    quarterNoteIMG=loadImage("Images/QuarterNotes.png");
    TwoEightNotesIMG=loadImage("Images/2EigthNotes.png");
    EigthNoteIMG=loadImage("Images/eigthNote.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);

    girl=createSprite(displayWidth/2,displayHeight/2+200);
    girl.addImage("running",runningGirlIMG);
    girl.scale=0.3;

    ground=createSprite(displayWidth/2, displayHeight-30,displayWidth,10);
    

}
function draw(){
    background(180);

    if (keyDown("UP_ARROW")){
        girl.velocityY=-15;
    }
    girl.velocityY=girl.velocityY+0.8;;

    girl.collide(ground);

    if (keyDown(RIGHT_ARROW)){
        girl.x=girl.x+20;
    }
    if (keyDown(LEFT_ARROW)){
        girl.x=girl.x-20
    }

    obstacleSpeakers();


    drawSprites();
}
function obstacleSpeakers(){
    if (frameCount % 60===0){
        var speaker=createSprite(displayWidth/1.2,0,20,20);
        speaker.addImage("speaker", speakerIMG);
        var r=Math.round(random(1,3));
        if (r===1){
            speaker.x=displayWidth/1.2;
        }
        else if(r===2){
            speaker.x=displayWidth/2;
        }
        else 
        speaker.x=displayWidth/4;

        speaker.scale=0.6;
        speaker.velocityY=5;
        speaker.lifetime=150;
    }
}