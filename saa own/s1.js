class stage1{
    constructor(){
      bg=createSprite(0,325,2000,0);
      bg.velocityX = -5;
      bg.x = bg.width /2;
      bg.addImage("bgI",bgI);
      //bg.scale=3.4;
      
        
         chef=createSprite(350,570,600,10);
        chef.addImage("chefI",chefI);
        chef.scale=0.8;
       // chef.velocityX=2;
        chef.debug=false;
        chef.setCollider("rectangle",0,0,chef.width,chef.height)
        
        
       virus=createSprite(100,560,600,10);
       virus.addImage("virusI",virusI);
       virus.scale=0.7;
       virus.debug=false;
        
        ig=createSprite(300,620,600,10);
        ig.visible=false;
    }

display(){
    chef.velocityY = chef.velocityY + 0.8;
chef.collide(ig); 
  
   //Gravity
virus.velocityY =virus.velocityY + 0.8;
virus.collide(ig); 
  
  
   if (gameState===PLAY1){
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
    gameOver.visible=false;
  restart.visible=false;
    // virus.y=chef.y;
   score = score + Math.round(getFrameRate()/60);
 
    spawnObstacles();
    spawnmasks();
   if (pit.isTouching(virus)){
    virus.velocityY=-12;
   }
 bg.velocityX = -(4 + 3* score/100);
  
      if(chef.isTouching(mask)){
          score = score + 1000
          checkPointSound.play() 
      }

     if(score>0 && score%100 === 0){
       checkPointSound.play() 
    }
    
 if((keyDown("space")&& chef.y >= 220)) {
   chef.velocityY = -12;
    jumpSound.play();
  }  
  
  if (chef.isTouching(pit)){
    gameState=END;
     dieSound.play();
  }
  }
else if ( gameState===END1) {
  gameOver.visible=true;
  restart.visible=true;
  bg.velocityX = 0;
     chef.velocityY = 0
  
    virus.x=chef.x;

      //set lifetime of the game objects so that they are never destroyed
    pit.setLifetime(-1);
   pit.setVelocityX(0);
}}
spawnObstacles() {
    if (frameCount % 60 === 0){
    pit = createSprite(600,450,10,40);
    obstacle.velocityX = -6 ;//+ score/100);
    
     //generate random obstacles
    var rand = Math.round(random(1,6));
      pit.addImage(pitI);
   pit.scale=0.1;
     pit.debug=false;
     pit.depth> background.depth;
 pit.setCollider("circle",0,0,1);
    }
      
 }
 
 spawnmasks() {
   if (frameCount % 1000 === 0){
   var mask = createSprite(600,200,10,40);
  mask.velocityX = -6 ;//+ score/100);
   
    //generate random masks
   var rand = Math.round(random(1,6));
     mask.addImage(maskI);
  mask.scale=0.1;
    mask.debug=false;
 mask.setCollider("circle",0,0,1);
   }
     
 }
}