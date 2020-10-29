var snake1, snake2;
var snakeImage;
var middle_border;
var top_border;
var bottom_border
var right_side_border
var left_side_border
var maze_object1;
var maze_object2;
var maze_object3;
var maze_object4;
var maze_object5;
var maze_object6;
var maze_object7;
var maze_object8;
var maze_object9;
var maze_object10;

function setup() {
  createCanvas(2000,1000);
  snakeImage = loadImage("snake.jpeg");
}

function draw() {
  background(0,0,0);  
  snake1 = createSprite(200,300);
  snake2 = createSprite(1200,300);

  snake1.addImage(snakeImage);
  snake1.scale = 0.3;
  snake2.addImage(snakeImage);
  snake2.scale = 0.3;

  middle_border = createSprite(1000,500,10,1000)
  top_border = createSprite(1000,5,2000,10);
  bottom_border = createSprite(1000,995,2000,10);
  right_side_border = createSprite(1995,500,10,1000);
  left_side_border = createSprite(5,500,10,1000);

  middle_border.shapeColor = "blue";
  top_border.shapeColor = "red";
  bottom_border.shapeColor = "red";
  right_side_border.shapeColor = "yellow";
  left_side_border.shapeColor = "yellow";

  maze_object1 = createSprite(380,268,400,5);
  maze_object2 = createSprite(335,330,310,5);
  maze_object3 = createSprite(580,480.5,5,620);
  maze_object4 = createSprite(490,602.5,5,550);
  maze_object5 = createSprite(600,875,216,5);
  maze_object6 = createSprite(705.5,575,5,600);
  //maze_object7 = createSprite()

  drawSprites();
}