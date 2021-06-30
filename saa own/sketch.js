var gameOver,restart,gameOverImage,restartImage;
var gameState ;
//stage1
var l1;
var PLAY1 = 1;
var END1 = 0;
var bg,bgI,ig;
var pit,pitI;
var maskI;
var chef,chefI;
var jumpSound,dieSound,checkpointSound;
var score = 0;
var virus,virusI;
//stage2
var l2;
var PLAY2 = 1;
var END2 = 0;
var banana,bread,broccoli,cheese,coconut,ketchup_b,lettuce,onion,pbase,spice,tomato,bg2;
var bananaI,breadI,broccoliI,cheeseI,coconutI,ketchup_bI,lettuceI,onionI,pbaseI,spiceI,tomatoI,bg2I;
var iGroup, eGroup;
var ingredients

//stage3
var l3;
var PLAY3 = 1;
var END3 = 0;
//burger
var bun,bp,bpl,bplt,proper_burger,mayo,bg_b;
var bunI,bpI,bplI,bpltI,proper_burgerI,mayoI,bg_bI;
//pizzeria
var bg_p,ketchup_p,main_pizza,mushroom,pbase,ps,psc,psct,psctm;
var bg_pI,ketchup_pI,main_pizzaI,mushroomI,pbaseI,psI,pscI,psctI,psctmI;
//indian
var bg_i,corn,curry,daal,indian_main,indian_main2,rice;
var bg_iI,cornI,curryI,daalI,indian_mainI,indian_main2I,riceI;
//snacks
var bg_s,chutney,main_snack,samosa,tomato;
var bg_sI,chutneyI,main_snackI,samosaI,tomatoI;

function preload(){
  gameOverImage=loadImage("GO.png");
  restartImage=loadImage("restart1.png");
  //stage1
  bgI=loadImage("stage1I/road.png");
  jumpSound = loadSound("stage1I/jump.mp3")
  dieSound = loadSound("stage1I/die.mp3")
  checkPointSound = loadSound("stage1I/checkPoint.mp3")
  chefI=loadImage("stage1I/chef1.png");
  virusI = loadImage("stage1I/virus.png")
  pitI = loadImage("stage1I/pit.jpg")
  maskI = loadImage("stage1I/mask.png")
  //stage2
  bananaI = loadImage("stage2I/banana.png")
  breadI = loadImage("stage2I/bread.png")
  broccoliI = loadImage("stage2I/broccoli.png")
  cheeseI = loadImage("stage2I/cheese.png");
  coconutI = loadImage("stage2I/cocnut.png")
  ketchup_I = loadImage("stage2I/ketchup.png");
  lettuceI = loadImage("stage2I/lettuce.png");
  onionI = loadImage("stage2I/onion.png");
  pbaseI = loadImage("stage2I/pbase.png");
  spiceI = loadImage("stage2I/spice.jpg");
  tomatoI=loadImage("stage2I/tomato.png");
  bg2I = loadImage("stage2I/bg2.jpg")
  //stage3
  //burger shop
  bunI = loadImage("stage3I/burger-shop/bun.jpg");
  bpI = loadImage("stage3I/burger-shop/bun-patty.jpg");
  bplI = loadImage("stage3I/burger-shop/bun-patty-lettuce.jpg");
  bpltI = loadImage("stage3I/burger-shop/bun-patty-lettuce-tomato.jpg");
  proper_burgerI = loadImage("stage3I/burger-shop/proper-burger.jpg");
  mayoI = loadImage("stage3I/burger-shop/mayonise.jpg")
  bg_bI = loadImage("stage3I/burger-shop/bg-b.jpg");
  //pizzeria
  bg_pI = loadImage("stage3I/pizzeria/bg-p.jpg")
  ketchup_pI = loadImage("stage3I/pizzeria/ketchup.png")
  main_pizzaI = loadImage("stage3I/pizzeria/main-pizza.png")
  mushroomI = loadImage("stage3I/pizzeria/mushroom.png")
  pbaseI = loadImage("stage3I/pizzeria/pbase.png")
  psI = loadImage("stage3I/pizzeria/pizza-sauce.jpg")
  pscI = loadImage("stage3I/pizzeria/pizza-sauce-cheese.jpg")
  psctI = loadImage("stage3I/pizzeria/pizza-sauce-cheese-tomato.jpg")
  psctmI = loadImage("stage3I/pizzeria/pizza-sauce-cheese-tomato-mushroom.jpg")
  //indian
  bg_iI = loadImage("stage3I/indian-restaurant/bg-i.jpg")
  cornI = loadImage("stage3I/indian-restaurant/corn.png")
  curryI = loadImage("stage3I/indian-restaurant/curry.jpg")
  daalI = loadImage("stage3I/indian-restaurant/daal.jpg")
  indian_mainI = loadImage("stage3I/indian-restaurant/indian-main.png")
  indian_main2I = loadImage("stage3I/indian-restaurant/indian-main2.png")
  riceI = loadImage("stage3I/indian-restaurant/rice.jpg")
  //snacks
  bg_sI = loadImage("stage3I/snacks corner/bg-s.jpg")
  chutneyI = loadImage("stage3I/snacks corner/chutney.jpg")
  main_snackI = loadImage("stage3I/snacks corner/main-snack.png")
  samosaI = loadImage("stage3I/snacks corner/samosa.jpg")
  tomatoI = loadImage("stage3I/snacks corner/tomato.jpg")
}

function setup() {
 createCanvas(1250,640);

 //l1=new stage1();
 l2=new stage2();
 l3=new stage3();

 iGroup = new Group();
eGroup = new Group();
  

  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;
  
  restart = createSprite(300,180);
  restart.addImage(restartImage);
  restart.visible = false;
  
  //obstaclesGroup=new Group();
  
  score=0;
}

function draw() {
 background("black");

   // l1.display();
    l2.display2();

        if(mousePressedOver(restart)) {
      reset();
    }


  /*if(chef.x > 2599){
    background("cyan")
    textSize(40)
    stroke("black")
    fill("white")
    text("You are passed to the second Stage!!")
  }*/
  
  
  drawSprites();
  fill("lightpink");
  textSize(20);
   text("Score: "+ score, 500,50);
}

/*function reset(){
  gameState=PLAY1;
gameOver.visible=false;
restart.visible=false;
chef.changeAnimation("girl_running",girl_running);
  pit.destroy();
  score=0;
 virus.x=50;
}*/

