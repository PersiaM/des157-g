console.log  ('reading js');


/*function setup() {
  //size is create canvas in p5
  //create a variable to refrence the canvas
  var myCanvas = createCanvas(800, 250);

  //conect mycanvas to my sketch
  myCanvas.parent('mysketch')
}

function draw () {

  ellipse(mouseX, mouseY, 50,50);
}*/

var r;
var g;
var b;
var a;
/*var w=var(random(1,10));*/

var diam;
var x;
var y;
var c;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mysketch')
  background(210);
  /*frameRate (10);*/
  smooth(200);
}

function draw(){


  r= random(225);
  g= random(225);
  b= random(225);
  a= random(225);
  c= random(180,225);
  diam= random(60);
  x= random(width);
  y= random(height);


  fill(r, g, b, a);
  /*noStroke();*/
  stroke(225);
  ellipse(x,y,diam,diam);
  ellipse(mouseX,mouseY, 50,50);
  frameRate(10);
  //x=x+1;

if(mouseIsPressed){
    console.log('mouseIsPressed');
  c= random(180,225);

  background(c);
}

}

/*function mouseIsPressed() {
  console.log('mouseIsPressed');
  c= random(100,225);

  background(c);

}*/
