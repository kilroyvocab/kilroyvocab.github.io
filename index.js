function setup(){
  createCanvas(1400,750);
  console.log(mouseX, mouseY);
}

function draw(){
  drawIntor()
}

function drawIntor(){
  // draw the sentence welcome to...
  var w = 'Welcome To Ms.Kilroy Global History Vocabulary Website';
  fill(0);
  textSize(40);
  text(w,50,300);

}
