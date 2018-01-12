function setup(){
  createCanvas(1400,750);
  console.log(mouseX, mouseY);
}

function draw(){
  drawIntor()
}

function drawIntor(){
  // draw the sentence welcome to...
  var w = 'Welcome to killroy vocab website';
  fill(0);
  textSize(50);
  text(w,600,300);

}
