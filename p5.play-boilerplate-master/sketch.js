const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
polygon_img = loadImage("polygon.png")

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  land = new Ground()
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,200,10);

     //big building 
     //floor1
   box1 = new box(300,275,30,40)
   console.log(box1);
   box2 = new box(330,275,30,40)
   box3 = new box(360,275,30,40)
   box4 = new box(390,275,30,40)
   box5 = new box(420,275,30,40)
   box6 = new box(450,275,30,40)
   box7 = new box(480,275,30,40) 

   //floor2
    box8 = new box(330,235,30,40)
    box9 = new box(360,235,30,40)
    box10 = new box(390,235,30,40)
    box11 = new box(420,235,30,40)
    box12 = new box(450,235,30,40)

    //floor 3

    box13= new box(360,195,30,40);
    box14= new box(390,195,30,40);
    box15= new box(420,195,30,40);
    
    // floor 4
    box16 = new box(390,155,30,40);
 //ball
    

    //small building
    // floor 1
     room1 =  new box(640,175,30,40);
     room2 = new  box(670,175,30,40);
     room3 =  new  box(700,175,30,40);
     room4 = new   box(730,175,30,40);
     room5 = new  box(760,175,30,40);

     //floor2
     room6 = new  box(670,135,30,40);
     room7 = new  box(700,135,30,40);
     room8 = new  box(730,135,30,40);

     //floor3
      room9 = new  box(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});


  }

function draw() {
  background(56,44,44);  
  drawSprites();

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the box and room ",100,30);


  //Engine.update(engine);
  land.display();
  stand1.display();
  stand2.display();
   
  fill("blue")
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   fill("red");
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   fill("pink");
   box13.display();
   box14.display();
   box15.display();
   fill("yellow");
   box16.display();
   fill("orange");

   room1.display();
   room2.display();
   room3.display();
   room4.display();
   room5.display();
   fill("lightblue");
   room6.display();
   room7.display();
   room8.display();
   fill("lightgreen");
   room9.display();
   fill("gold");
   imageMode(CENTER)
   image(polygon_img ,ball.position.x,ball.position.y,40,40);
 
   slingShot.display();
 }
 function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
  slingShot.fly();
 }

 function keyPressed(){
  if(keyCode === 32){
       slingShot.attach(this.ball)
  }
}