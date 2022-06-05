class Game {
  constructor() {
 this.resetTitle=createElement("h2")   
 this.resetButton=createButton("")

this.leaderBoardTitle=createElement("h2")
this.leader1=createElement("h2")
this.leader2=createElement("h2")



  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()

   car1 = createSprite(width/2-100,height-100)
   car1.addImage("car1",car1Img)
   car1.scale=0.07

   car2 = createSprite(width/2+100,height-100)
   car2.addImage("car2",car2Img)
   car2.scale=0.07

   cars = [car1,car2]

   
  }
  getState(){
  var Huandale_Pringle=database.ref("gameState")
  Huandale_Pringle.on("value",function(data){
gameState=data.val()
console.log(gameState)
  })
  }
  updateState(state){
database.ref("/").update({
"gameState":state
})
  }
  handleElements(){
    form.hide()
    form.titleImg.position(40,50)
 form.titleImg.class("gameTitleAfterEffect")
 this.resetTitle.html("Reset Game")
 this.resetTitle.class("resetText")
 this.resetTitle.position(width/2+200,40)

 this.resetButton.class("resetButton")
 this.resetButton.position(width/2+230,100)

this.leaderBoardTitle.html("LeaderBoard")
this.leaderBoardTitle.class("resetText")
this.leaderBoardTitle.position(width/3-60,40)

this.leader1.class("leadersText")
this.leader1.position(width/3-50,80)

this.leader2.class("leadersText")
this.leader2.position(width/3-50,130)
  }
  showLeaderBoard(){
  var leader1
  var leader2
  console.log(allPlayers)
  var players=Object.values(allPlayers)
  console.log(players)
  if ((players[0].rank==0 && players[1].rank==0) || players[0].rank==1){
    //&emsp;this tag is used for displaying 4 spaces
    leader1=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score
    leader2=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score
  }
  if (players[1].rank==1){
    leader1=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score
    leader2=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score
  }
  this.leader1.html(leader1)
  this.leader2.html(leader2)
  }

handlePlayerControls(){
  if (keyIsDown(UP_ARROW)){
    player.positionY=player.positionY+10
    player.update()
  }
  if (keyIsDown(LEFT_ARROW) && player.positionX>width/3-50){
  player.positionX=player.positionX-5
  player.update()
  }
  if (keyIsDown(RIGHT_ARROW) && player.positionX<width/2+300){
    player.positionX=player.positionX+5
    player.update()
  }
}


handleResetButton(){
  this.resetButton.mousePressed(()=>{
    database.ref("/").set({
      playerCount:0,
      gameState:0,
      players:{}
    })
    window.location.reload()
  })
}


play (){
  this.handleElements()
  this.handleResetButton()
 Player.getPlayersInfo()
 if (allPlayers!==undefined){
   image (trackImg,0,-height*5,width,height*6)
console.log(allPlayers)
   this.showLeaderBoard()

   var index=0
   for (var plr in allPlayers){
     index=index+1
     var x=allPlayers[plr].positionX
     var y=height-allPlayers[plr].positionY
    
     cars[index-1].position.x=x
     cars[index-1].position.y=y
     if (index==player.index){
     fill("blue")
     stroke("lime")
     ellipse(x,y,65,65)

     camera.position.x=cars[index-1].position.x
     camera.position.y=cars[index-1].position.y





     }

   }
   this.handlePlayerControls()
   drawSprites()
 }
}



}
