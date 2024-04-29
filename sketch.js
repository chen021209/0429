var captureGraphics
var capture_width = 640
var capture_height = 480
var span = 5
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(capture_width,capture_height)
  captureGraphics = createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  captureGraphics.hide()
 

}

function draw() {
  background(220);
  push()
  translate(width/2-160, height/2-120) //把原點移到(width/2-160, height/2-120)
  captureGraphics.image(capture,0,0) //
  for(var x= 0;x<captureGraphics.width;x=x+10){
    for(var y=0;y<captureGraphics.height;y=y+10){
      var pixel = captureGraphics.gey(x,y)
      fill(pixel)
      rect(x,y,10)
    }
  }
  pop()
}
