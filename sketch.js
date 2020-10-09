const Engine= Matter.Engine;//namespacing 
const World = Matter.World; 
const Bodies= Matter.Bodies; 
var myEngine, myWorld; 
var ground;
function setup() 
{ createCanvas(400,400); 
myEngine = Engine.create(); 
myWorld= myEngine.world; 
var options ={
  isStatic:true
}
ground = Bodies.rectangle(200,380,400,10,options); 
World.add(myWorld,ground);
var balloptions={restitution:2.0}
object = Bodies.circle(200,100,20,balloptions) 
World.add(myWorld,object) 
console.log(object.position.x) 
console.log(object.position.y) }
function draw() 
{ background(0); 
Engine.update(myEngine); 
ellipseMode(RADIUS); 
ellipse(object.position.x,object.position.y,20,20) 
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10)
drawSprites(); 
}
