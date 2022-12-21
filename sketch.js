var bg, bgImg;
var carImg;
var obstacle1, obstacle2;
//obstacle1 = RoadBarrier, obstacle2 = RoadCone

function preload() {
  bgImg = loadImage("assets/Bg.png");
  carImg = loadImage("assets/Car.png");
  obstacle1 = loadImage("assets/RoadBarrier.png");
  obstacle2 = loadImage("assets/RoadCone.png");
}

function setup() {
  createCanvas(1000, 500);

  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImg);
  bg.scale = 2.6;
  bg.velocityY = 3

  car = createSprite(500, 400);
  car.addImage(carImg);
  car.scale = 0.2;

  obstaclesGroup = createGroup()
}

function draw() {
  background("black");

  if (bg.y > height) {
    bg.y = 250;
  }

  spawnObstacles()

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 50 === 0) {
    obstacles = createSprite(random(50, 900), -50 );

    n = Math.random(round(1, 2));

    if (n == 1) {
      obstacles.addImage(obstacle1);
    } else {
      obstacles.addImage(obstacle1);
    }

    obstacles.scale = 0.50;
    obstacles.velocityY = 3;

    // obstacles.lifetime = 400;
    obstaclesGroup.add(obstacles);
  }
}
