var myColor = ['#826B85',//0. blue
               '#F32B1A', //1. red
               '#603222',//2. brown
               '#FEC07D',//3. skindark
               '#FFFFFF',//4.white
               '#FEC07D',//5. skindark
               '#F9E1D8',//6.skin
               '#BACB69',//7.treelight
               '#A0A067',//8.treedark
               '#5D4B5D'//9.trunk
               ]

var mic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //background(myColor[0]);
  
  mic = new p5.AudioIn();
  mic.start();
  

  //startingColor = color('#8a5f3c')
  //endingColor = color('#c15f77')
}


function draw() {

  background(myColor[0]);

  var myVolume = mic.getLevel();
  
  //snow
    fill(255);
    noStroke();
         var rx = random() * width;
         var ry = random() * height;
         var rr = random() * 100;
    //ellipse(rx,ry,rr);
    textSize(rr);
    text("*",rx,ry);

  //text
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(24);
  fill(255);
  noStroke();
  text("* Merry Chrismas *",width/2,height*4/5);
  textSize(18);
  text("Where is Santa?",width/2,height*4/5.25);
  
    
  //var ellipseColor = lerpColor (startingColor,endingColor,myVolume*5); 
  
  //eye
  var mySize = map(myVolume,0,1,5,20);
  
  var mySizeeye = map(myVolume,0,1,5,500);
  
  var mySizenose = map(myVolume,0,1,2,50);
  
  var mySizehat = map(myVolume,0,1,1,500);

  
  push();
  translate(width/2,height/2);
  
    
  //beard
  fill(255);
  noStroke();
  ellipse(0,60,180,180);
  
  //face
  fill(myColor[6]);
  noStroke();
  rectMode(CENTER);
  rect(0,10,70,70,10);
  
  //hat
  fill(myColor[1]);
  noStroke();
  triangle(-35,-20,0,-100-mySizehat,30,-20);
  fill(myColor[4]);
  ellipse(0,-100-mySizehat,20);

  //hatline
  stroke(myColor[4]);
  strokeWeight(18);  
  line(-35,-20,35,-20); 
  
  
  //eyes white  
  //  noStroke;
  //  fill(255);
  //  ellipse(-14,10,mySize+10);
  //    ellipse(14,10,mySize+10);

  //eyes black
  //  strokeWeight(mySize);
  //  stroke(0);
  //  line(-11,10,-18,10);
  //  line(11,10,18,10);


   
  //nose
  stroke(myColor[1]);
  strokeWeight(mySizenose*4+5)
  line(0,40,0,55);
  
  
    
    
  //tree    
  fill(myColor[7]); 
  noStroke();
    
  //tree-100 
  //quad(-100,0-100-mySizehat*2+10,
  //     -50,-50-100-mySizehat*2+10,
  //     50,-50-100-mySizehat*2+10,
  //     100,0-100-mySizehat*2+10);
    
  //tree-50 -25
  quad(-100+20,0-50-mySizehat*9+40,
       -50+30,-50-50-mySizehat*9+40,
       50-30,-50-50-mySizehat*9+40,
       100-20,0-50-mySizehat*9+40); 
  
  //tree1
  quad(-100-10,0-mySizehat*7+30,
       -50-10,-50-mySizehat*7+30,
       50+10,-50-mySizehat*7+30,
       100+10,0-mySizehat*7+30);
  
  //tree+50 x+50
  quad(-100-60,0+50-mySizehat*3+20,
       -50-40,-50+50-mySizehat*3+20,
       50+40,-50+50-mySizehat*3+20,
       100+60,0+50-mySizehat*3+20); 
    
  //tree+100 x+100
  quad(-100-110,0+100-mySizehat+10,
       -50-90,-50+100-mySizehat+10,
       50+90,-50+100-mySizehat+10,
       100+110,0+100-mySizehat+10);
    
  //tree+150 x+150
  quad(-100-160,0+150,
       -50-140,-50+150,
       50+140,-50+150,
       100+160,0+150);
    
  
      //eyes white  
    noStroke;
    fill(255);
    ellipse(-14,10,mySizeeye+10);
    ellipse(14,10,mySizeeye+10);

  //eyes black
  strokeWeight(mySize);
  stroke(0);
  line(-11,10,-18,10);
  line(11,10,18,10);
    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}