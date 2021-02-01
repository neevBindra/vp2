var dog,sadDog,happyDog;
var database , foodObj, foodS,foodStock ;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj = new Food();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  var feed = createButton ("FEED DOG");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  var addFood = createButton("ADD FOOD")
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  

}

function draw() {
  background(46,139,87);
  drawSprites();
  foodObj.display();
}

//function to read food Stock
function readStock(data){
foodS = data.val();
foodObj.update(foodS);
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  foodObj.update(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock()
  })
}

//function to add food in stock
function addFood(foodS){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

