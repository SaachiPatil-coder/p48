class stage2{
constructor(){}


display2(){
    if(gameState = PLAY2){
        bg2=createSprite(550,320,0,0);
        bg2.addImage(bg2I);
        bg2.scale = 2.3
        bg2.visible = false
    
        this.ingredients();
        this.enemy();
        iGroup.setVelocityXEach = (7+(score/4))
        eGroup.setVelocityXEach = (8+(score/10))
        stroke("red");
        textSize(20);
        text("Score: " + score,10,20);
      }
    
      if(gameState = END2){
        eGroup.setVelocityEach(0,0);
        iGroup.setVelocityEach(0,0);
        eGroup.setLifetimeEach(-1);
        iGroup.setLifetimeEach(-1);
        gameOver.visible = true;
      }
      if(score === 30){
        background("cyan")
        textSize(40)
        stroke("black")
        fill("white")
        text("You are passed to the last Stage!!")
    
      }
}
ingredients(){
     ingredients = createSprite(50, 600, 10, 10);
     ingredients.depth = bg2.depth+1;
    if (frameCount % 40 === 0) {
      ingredients.velocityY = Math.round(random(-10,10));
      ingredients.scale = 0.2;
      var rand = Math.round(random(1,4));
      if (rand === 1) {
        ingredients.addImage(breadI);
      } else if (rand == 2) {
        ingredients.addImage(broccoliI);
      }
      else if (rand === 3){
       ingredients.addImage(cheeseI); 
      }
      else if (rand === 4){
       ingredients.addImage(ketchupI); 
      }
      else if (rand === 5){
        ingredients.addImage(lettuceI); 
       }
       else if (rand === 6){
        ingredients.addImage(onionI); 
       }
       else if (rand === 7){
        ingredients.addImage(pbaseI); 
       }
       else if (rand === 8){
        ingredients.addImage(spiceI); 
       }
       else if (rand === 9){
        ingredients.addImage(tomatoI); 
       }
      ingredients.y = Math.round(random(20,380));
      ingredients.x = Math.round(random(20, 580));
      ingredients.velocityX = Math.round(random(-10,10));
      ingredients.setLifetime = 50;
      iGroup.add(ingredients);
    }
  }
  
  enemy(){
    var enemy = createSprite(50, 600, 10, 10);
    if (frameCount % 40 === 0) {
      enemy.velocityY = Math.round(random(-10,10));
      enemy.scale = 1;
      var rand = Math.round(random(1,2));
      if (rand === 1) {
        enemy.addImage(bananaI);
      } else if (rand == 2) {
        enemy.addImage(coconutI);
      }
      enemy.y = Math.round(random(20,380));
      enemy.x = Math.round(random(20, 580));
      enemy.velocityX = Math.round(random(-10,10));
      enemy.setLifetime = 50;
      eGroup.add(enemy);
  }
  }
  
  mousePressed(ingredients){
    score = score + 1
    iGroup.destroyEach();
  }
  
   mousePressed(enemy){
    gameState = END2;
  }
}
