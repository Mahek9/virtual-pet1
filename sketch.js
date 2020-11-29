var dog,happydog;
var database;
var foodS,foodstock;

function preload()
{
  //load images here
  dog=loadImage("images/Dog.png");
  happydog=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  var dog1 =createSprite(250,250,40,30);
  dog1.addImage(dog);
  dog1.scale=0.2;
  

  database=firebase.database();
 // console.log(database);

  foodstock=database.ref('food');
  foodstock.on("value",function(data){
    food:food
  });
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
food();
  drawSprites();
  //add styles here
  text("note:press Up_Arrow to feed Drago Milk");
   textSize(40);
stroke(20);
fill("white");
}

function food(){

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
}



