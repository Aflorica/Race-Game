var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState=0

var car1Img
var car2Img
var trackImg

var car1
var car2
var cars=[]

var allPlayers=[]

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("assets/car1.png")
  car2Img = loadImage("assets/car2.png")
  trackImg = loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount==2){
    game.updateState(1)
  }
  if (gameState==1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
