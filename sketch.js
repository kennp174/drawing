//Your Drawing

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background("blue");

//head
  strokeWeight(0);
  ellipse(195,195,150,200);
//body
  ellipse(200,417,200,260);
//nose
  fill("orange");
  stroke("orange");
  strokeWeight(1);
  triangle(262,240,300,200,262,150);
//eye
  fill("black");
  stroke("black");
  ellipse(220,170,25,25);
//left/right,up/down,size//
//wing
  fill("darkblue");
  stroke("darkblue");
  strokeWeight(0);
  triangle(230,350,350,430,180,350);
//top right: left/right, up/down // bottom point // left point
//feet
  fill("darkred");
  ellipse(230,561,50,35);
  ellipse(170,561,50,35);
//horizon
  stroke("black");
  strokeWeight(3);
  line(700,578,10,578);
  line(700,578,700,640);
  line(700,640,780,640);
  line(780,640,780,700);
  stroke("darkgray");
  fill("darkgray");
  rect(10,578,700,700);
  rect(700,640,100,100);
//sun
  stroke("yellow");
  fill("yellow");
  strokeWeight(0);
  arc(600,0,300,300,0, PI+QUARTER_PI, CHORD);

}
