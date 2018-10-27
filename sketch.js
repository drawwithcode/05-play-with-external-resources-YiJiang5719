var bg;
var audio;
var lamp;
var texture;
var forward;


function preload(){
  // put preload code here
  bg = loadImage("./assets/snap2018-10-24-09-56-23.png");
  audio = loadSound("./assets/Begin.mp3");
  lamp = loadImage("./assets/lamp.png");
  texture = loadImage("./assets/texture.png");
  forward = loadImage("./assets/snap-foreward.png");
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  angleMode(DEGREES);
  audio.setVolume(0.5);

  audio.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(audio);

  //image(bg, 0, 0);

 button = createButton('pause');
 button.position(width/2, height/2+300);
 button.mousePressed(stop);

 button = createButton('play');
 button.position(width/2, height/2+320);
 button.mousePressed(Replay);

}

function draw(){
  //background(0,30);

  image(bg, 0, 0);
    var volume = analyzer.getLevel();
    console.log(volume);
    var volume1 = map(volume,0,1,50,600);
    var volume2 = map(volume,0,1,50,width/2);

    noStroke();
    fill(160,18,96);
    beginShape();
    vertex(0,height+volume2);
    vertex(width, height/5+volume2);
    vertex(width, height/4+volume2);
    vertex(0,height+volume2);
    endShape(CLOSE);

  push();
  translate(width/2,height/2);
  rotate(frameCount);
  imageMode(CENTER);
  image(texture,0,0,texture.width/2+volume2,texture.height/2+volume2)
  pop();

  beginShape();
  vertex(0,height/3+volume2);
  vertex(width, height/5-volume2);
  vertex(width, height/4-volume2);
  vertex(0,height/2+volume2);
  endShape(CLOSE);
  image(forward, 0, 0);
}

function stop() {
  if(audio.isPlaying()) {
   audio.pause();
   }
}

function Replay() {
  if (audio.isPaused()){
   audio.loop();
   }
 }
