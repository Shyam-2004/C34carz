var ball;
var database , positions
function setup(){
    database= firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var child = database.ref ("ball/position")
    child.on("value",readop)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
     database.ref("ball/position").set({
    x:positions.x+x,
    y:positions.y+y,

     })
    
}

function readop(data){
positions=data.val()
ball.x=positions.x
ball.y=positions.y
}