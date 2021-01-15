var w = window.innerWidth;
var h = window.innerHeight;
let table;
let food = [];
let foodIndex = 0;
let foodSelection;
let foodsquares = [];
var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(w, h);
  background(230);


  question = createP("What did you eat today?");
  question.position(w/2.8, 100);
   question.style("text-align", "center");
  question.style("justify-content", "center");
  question.style("width", "500px");
 question.style("font-family", "Helvetica");
  question.style("font-size", "1rem");

caption = createP("(Maximum four items)");
  caption.position(w/2.8, 130);
   caption.style("text-align", "center");
  caption.style("justify-content", "center");
  caption.style("width", "500px");
 caption.style("font-family", "Helvetica");
  caption.style("font-size", "0.6rem");



  food = table.getColumn('Name');

  foodSelection = createSelect();
  foodSelection.position(w/2.1, 160);
  for (let i = 0; i < food.length; i++) {
    foodSelection.option(food[i])
  }
  foodSelection.changed(mySelectItem);
  foodSelection.style("background-color", "black");
  foodSelection.style("color", "white");
  foodSelection.style("width", "130px");
  foodSelection.style("height", "22px");
  foodSelection.style("font-family", "Helvetica");
  foodSelection.style("font-size", "0.8rem");


  for (let i = 0;
    (i < width) && (i < height); i++) {
    
    foodsquares.push(new Shapes());
  }
}

function draw() {
  background(230);


  for (var j = 0; j < 4; j++) {

    noStroke();
    fill(226, 6, 19);
    foodsquares[1].show();
    fill(255, 236, 0);
    foodsquares[2].show();
    fill(0, 158, 226);
    foodsquares[3].show();
    fill(0, 149, 64);
    foodsquares[4].show();
  }
}

function mySelectItem() {
  let item = foodSelection.value();

  foodIndex = food.indexOf(item);
}



function Shapes() {
  
  this.r = 80;
  this.pos = createVector(x+(w/5), y);
  this.total = 4;
    
  x += 200;
  y = 450;
  
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);

    beginShape();
    // stroke(255);
    // strokeWeight(2);
    for (var i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      var x = this.r * cos(angle);
      var y = this.r * sin(angle);
      vertex(x, y);

    }
    endShape(CLOSE);
    pop();
  
  }
}

// function shapes(x1, y1, x2, y2, x3, y3, x4, y4){

//   this.a = createVector(x1, y1);
//   this.b = createVector(x2, y2);
//   this.c = createVector(x3, y3);
//   this.d = createVector(x4, y4);
//   this.pos = createVector(random(),100);

//   //quad(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y, this.d.x, this.d.y);

//   this.show = function() {
//     push();
//     translate(this.pos.x, this.pos.y);

//     beginShape();
//     stroke(255);
//     strokeWeight(2);
//     fill(random(red,green,blue));


//    let x1 = 100;


//     quad(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y, this.d.x, this.d.y);

//      quad(100,100,200,0,300,100,200,200);

//     endShape(CLOSE);
//     pop();
//   }

// }