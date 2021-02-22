const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var drops=[];

function preload(){

}

function setup(){
    var canvas = createCanvas(500,1200);
    engine = Engine.create();
    world = engine.world;

   for(var i=0; i<maxDrops; i++){
      drops.push(new createdrops(random(0,400),random(0,400)));
   }



    
}

function draw(){
    background(56,44,44);
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
}   

